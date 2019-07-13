import React, { useState } from "react";
import Comments from "./Comments";

const Modal = props => {
  const [isCommentOpen, setCommentOpen] = useState(false);

  const { title, link, images, usedTech } = props.data;
  const handleOpenComment = e => {
    if (isCommentOpen) {
      setCommentOpen(prevState => {
        document.querySelector("#slideshow").style.gridColumn = "1/4";
        return false;
      });
    } else {
      setCommentOpen(prevState => {
        document.querySelector("#slideshow").style.gridColumn = "1/2";
        return true;
      });
    }
    // document.querySelector('#slideshow').classList.toggle('hew');
  };

  return (
    <div id="modal">
      <div className="body">
        <span className="close" onClick={props.onCloseModal}>
          X
        </span>
        <h2 className="title">{title}</h2>
        <hr />
        <div id="slideshow" style={{ backgroundImage: `url(${images[0]})` }}>
          <div className="thumbnails">
            {images.map((image, i) => (
              <img
                key={i}
                alt="Artwork"
                src={image}
                onClick={() => {
                  document.querySelector(
                    "#slideshow"
                  ).style.backgroundImage = `url(${image})`;
                }}
              />
            ))}
          </div>
        </div>
        {isCommentOpen ? <Comments comments={[]} /> : null}
        <hr />
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
          <img
            onClick={handleOpenComment}
            src="/img/comment-o.svg"
            alt="comment icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
