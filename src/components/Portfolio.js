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
          link: "",
          images: [
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg"
          ],
          usedTech: ["html5", "js", "react"]
        },
        {
          title: "PROJECT 2",
          link: "",
          images: [
            "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F866911%252Fc157ebea-56a7-468d-8cc9-1ae497d0375e.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=A1XEXGnfQ6faIGi2LDyTuXRzXBk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
            "https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg"
          ],
          usedTech: ["html5", "js", "node", "mongodb"]
        }
      ],
      modalData: {}
    };
  }

  componentDidMount() {
    this.images = document.querySelectorAll(".work img");
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
        <div id="body">
          {this.state.data.map((work, i) => (
            <div
              className="work"
              key={i}
              onClick={() => this.handleOpenModal(i)}
              style={
                {
                  // background: `url("https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg")`,
                }
              }
            >
              <img src="https://cdn.macrumors.com/article-new/2018/10/applelogos2-800x289.jpg" />
            </div>
          ))}
        </div>
        {this.state.modalView ? (
          <Modal
            data={this.state.modalData}
            onCloseModal={this.handleCloseModal}
          />
        ) : null}
      </div>
    );
  }
}

export default Portfolio;
