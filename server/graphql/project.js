const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");
const GraphQLDate = require("graphql-date");
const commentType = require("./comment");
const ProjectModel = require("../models/project");
const CommentModel = require("../models/comment");

const projectType = new GraphQLObjectType({
  name: "project",
  fields() {
    return {
      _id: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      imageSrc: {
        type: GraphQLString
      },
      projectLink: {
        type: GraphQLString
      },
      techStack: {
        type: new GraphQLList(GraphQLString)
      },
      likes: {
        type: GraphQLInt
      },
      createdAt: {
        type: GraphQLDate
      },
      updatedAt: {
        type: GraphQLDate
      },
      comments: {
        type: new GraphQLList(commentType)
      }
    };
  }
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields() {
    return {
      project: {
        type: projectType,
        args: {
          id: {
            name: "_id",
            type: GraphQLString
          }
        },
        resolve(root, params) {
          return ProjectModel.findById(params.id).populate("comments") // returns a promise solve with doc
        }
      },
      projects: {
        type: new GraphQLList(projectType),
        resolve(root, params) {
          return ProjectModel.find();
        }
      },
      comments: {
        type: new GraphQLList(commentType),
        resolve(root, params) {
          return CommentModel.find();
        }
      }
    };
  }
});

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields() {
    return {
      addProject: {
        type: projectType,
        args: {
          title: {
            type: new GraphQLNonNull(GraphQLString)
          },
          imageSrc: {
            type: new GraphQLNonNull(GraphQLString)
          },
          projectLink: {
            type: new GraphQLNonNull(GraphQLString)
          },
          techStack: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLString))
          }
        },
        resolve(root, params) {
          const newProject = new ProjectModel({
            title: params.title,
            imageSrc: params.imageSrc,
            projectLink: params.projectLink,
            techStack: params.techStack
          });
          return newProject.save();
        }
      },
      updateProject: {
        type: projectType,
        args: {
          id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          },
          imageSrc: {
            type: new GraphQLNonNull(GraphQLString)
          },
          projectLink: {
            type: new GraphQLNonNull(GraphQLString)
          },
          techStack: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLString))
          }
        },
        resolve(root, params) {
          const { id, title, imageSrc, projectLink, techStack } = params;
          return ProjectModel.findByIdAndUpdate(
            id,
            {
              title,
              imageSrc,
              projectLink,
              techStack,
              updatedAt: new Date()
            },
            err => {
              if (err) console.error(err.message);
            }
          );
        }
      },
      deleteProject: {
        type: projectType,
        args: {
          id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          return ProjectModel.findByIdAndDelete(params.id, err => {
            if (err) console.error(err.message);
          });
        }
      },
      likeProject: {
        type: projectType,
        args: {
          id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          // returning do problem
          ProjectModel.findByIdAndUpdate(
            params.id,
            { $inc: { likes: 1 } },
            err => {
              if (err) console.error(err.message);
            }
          );
        }
      },
      addComment: {
        type: commentType,
        args: {
          author: {
            type: new GraphQLNonNull(GraphQLString)
          },
          content: {
            type: new GraphQLNonNull(GraphQLString)
          },
          projectId: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          const newComment = new CommentModel({
            author: params.author,
            content: params.content
          });
          newComment.save();
          return ProjectModel.findByIdAndUpdate(params.projectId, {
            $push: {
              comments: newComment._id
            }
          });
        }
      }
    };
  }
});

module.exports = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
