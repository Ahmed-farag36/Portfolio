const {
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const GraphQLDate = require("graphql-date");

module.exports = new GraphQLObjectType({
  name: "comment",
  fields() {
    return {
      _id: {
        type: GraphQLString
      },
      author: {
        type: GraphQLString
      },
      content: {
        type: GraphQLString
      },
      createdAt: {
        type: GraphQLDate
      }
    }
  }
})