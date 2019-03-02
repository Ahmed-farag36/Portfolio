import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <img
              alt="Artwork"
              src={images[0]}
              onClick={() => {
                document.querySelector(".image").src = images[0];
              }}
            />
            <img
              alt="Artwork"
              src={images[1]}
              onClick={() => {
                document.querySelector(".image").src = images[1];
              }}
            />
          </div>
        </div>
        <a className="link" href={link}>
          Project link
        </a>
        <div className="usedTech">
          <FontAwesomeIcon className="icon" icon={["fab", usedTech[0]]} />
          <FontAwesomeIcon className="icon" icon={["fab", usedTech[1]]} />
          <FontAwesomeIcon className="icon" icon={["fab", usedTech[2]]} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
