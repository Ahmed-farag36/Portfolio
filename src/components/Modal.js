import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";

const Modal = props => {
  const { title, link, images, usedTech } = props.data;
  return (
    <div id="modal">
      <div className="body">
        <span className="close" onClick={props.onCloseModal}>
          X
        </span>
        <h2 className="title">{title}</h2>
        <div id="slideshow">
          <img className="image" alt="Artwork" src={images[0]} />
          <div className="thumbnails">
            {
              images.map((image, i) => (
                <img
                  key={i}
                  alt="Artwork"
                  src={image}
                  onClick={() => {
                    document.querySelector(".image").src = image;
                  }}
                />
              ))
            }
          </div>
        </div>
        <a className="link" href={link}>
          Project link: {link}
        </a>
        <div className="usedTech">
          {
            usedTech.map((tech, i) => <FontAwesomeIcon className="icon" key={i} icon={["fab", tech]} />)
          }
        </div>
        <div className="meta">
          <FontAwesomeIcon className="icon" icon={faComment} />
          {/* <FontAwesomeIcon className="icon" icon={["fab", "like"]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
