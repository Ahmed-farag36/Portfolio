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
            "/img/wallpaper_1536845282419.jpg",
            "/img/wallpaper_1536845282419.jpg",
            "/img/wallpaper_1536845282419.jpg"
          ],
          usedTech: ["html5", "js", "react"]
        },
        {
          title: "PROJECT 2",
          link: "https://www.example.com/project2",
          images: [
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg"
          ],
          usedTech: ["html5", "js", "node"]
        },
        {
          title: "PROJECT 3",
          link: "https://www.example.com/project3",
          images: [
            "/img/wallpaper_1541066409195.jpg",
            "/img/wallpaper_1541066409195.jpg",
            "/img/wallpaper_1541066409195.jpg"
          ],
          usedTech: ["html5", "js"]
        },
        {
          title: "PROJECT 4",
          link: "https://www.example.com/project4",
          images: [
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg",
            "/img/wallpaper_1536934453559.jpg"
          ],
          usedTech: ["html5", "js", "node"]
        },
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
        <div className="body">
          <img className="control prev" src="/img/angle-left.svg" alt="" />
          <div className="slides">
            {
              this.state.data.map((work, i) => (
                <div
                  className="work"
                  key={i}
                  onClick={() => this.handleOpenModal(i)}
                  style={
                    {
                      backgroundImage: `url(${work.images[0]})`,
                    }
                  }
                >
                </div>
              ))
            }
          </div>
          <img className="control next" src="/img/angle-right.svg" alt="" />
        </div>
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
