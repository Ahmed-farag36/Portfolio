import React from "react";
import Carousel from "./Carousel";
// import Modal from "./Modal";
import TempModal from "./TempModal";
import Comments from "./Comments";

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
            "/img/wallpaper_1536845282419.jpg",
            "/img/wallpaper_1536845282419.jpg",
            "/img/wallpaper_1536934453559.jpg"
          ],
          usedTech: ["html5.svg", "javascript.svg", "react.svg"]
        },
        {
          title: "PROJECT 2",
          link: "https://www.example.com/project2",
          images: [
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg",

            "/img/wallpaper_1536845282419.jpg"
          ],
          usedTech: [
            "html5.svg",
            "css31.svg",
            "javascript.svg",
            "node-dot-js.svg"
          ]
        },
        {
          title: "PROJECT 3",
          link: "https://www.example.com/project3",
          images: [
            "/img/wallpaper_1541066409195.jpg",
            "/img/wallpaper_1541066409195.jpg",
            "/img/wallpaper_1541066409195.jpg"
          ],
          usedTech: ["html5.svg", "javascript.svg"]
        },
        {
          title: "PROJECT 4",
          link: "https://www.example.com/project4",
          images: [
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg"
          ],
          usedTech: [
            "html5.svg",
            "javascript.svg",
            "node-dot-js.svg",
            "mongodb.svg",
            "graphql.svg"
          ]
        }
      ],
      modalData: {}
    };
  }

  componentDidMount() {}

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
        <Carousel onImgClick={this.handleOpenModal} data={this.state.data} />
        {this.state.modalView ? (
          <TempModal
            data={this.state.modalData}
            onCloseModal={this.handleCloseModal}
          />
        ) : null}
      </div>
    );
  }
}

export default Portfolio;
