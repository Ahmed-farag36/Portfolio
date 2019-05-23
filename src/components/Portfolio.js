import React from "react";
import Modal from "./Modal";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false,
      data: [
        {
          title: "PROJECT 1",
          link: "https://www.example.com/project1",
          images: [
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg",
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
          ],
          usedTech: ["html5", "js", "react"]
        },
        {
          title: "PROJECT 2",
          link: "https://www.example.com/project2",
          images: [
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg",
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
          ],
          usedTech: ["html5", "js", "node"]
        },
        {
          title: "PROJECT 3",
          link: "https://www.example.com/project3",
          images: [
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg",
          ],
          usedTech: ["html5", "js"]
        },
        {
          title: "PROJECT 4",
          link: "https://www.example.com/project4",
          images: [
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg",
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
          ],
          usedTech: ["html5", "js", "node"]
        }
      ],
      modalData: {}
    };
  }

  componentDidMount() {

  }

  handleOpenModal = i => {
    this.setState({ modalView: true, modalData: this.state.data[i] });
  };

  handleCloseModal = () => {
    this.setState({ modalView: false });
  };

  render() {
    return (
      <div id="portfolio">
        <h1>PORTFOLIO</h1>
          <button>Prev</button>
        <div id="body">
          {
            this.state.data.map((work, i) => (
              <div
                className="work"
                key={i}
                onClick={() => this.handleOpenModal(i)}
                style={
                  {
                    background: `url(${work.images[0]})`,
                  }
                }
              >
              </div>
            ))
          }
        </div>
          <button>Next</button>
        {
          this.state.modalView ? (
            <Modal
              data={this.state.modalData}
              onCloseModal={this.handleCloseModal}
            />
          ) : null
        }
      </div>
    );
  }
}

export default Portfolio;
