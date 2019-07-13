import React from "react";

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
            {images.map((image, i) => (
              <img
                key={i}
                alt="Artwork"
                src={image}
                onClick={() => {
                  document.querySelector(".image").src = image;
                }}
              />
            ))}
          </div>
        </div>
        <a className="link" href={link}>
          Project link: {link}
        </a>
        <div className="usedTech">
          {usedTech.map((tech, i) => (
            <img key={i} src={`/img/${tech}`} alt="" />
          ))}
        </div>
        <div className="meta">
          <img src="/img/heart-o.svg" alt="like icon" />
          <img src="/img/comment-o.svg" alt="comment icon" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
