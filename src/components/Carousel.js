import React, { useEffect, useState } from "react";

export default function Carousel(props) {
  const [slidesDist, setSlidesDist] = useState(0);
  const [curSlide, setCurSlide] = useState(1);
  const [slidesCount, setSlidesCount] = useState(3);

  useEffect(() => {
    document.querySelectorAll(".slide")[curSlide].classList.add("focus");
    setSlidesCount(document.querySelectorAll(".slide").length);
  });

  const handleSlide = (e, dist) => {
    setSlidesDist(prevState => prevState + dist);
    setCurSlide(prevState => {
      document.querySelector(
        "#slides"
      ).style.transform = `translateX(${slidesDist + dist}px)`;
      document.querySelectorAll(".slide")[prevState].classList.remove("focus");
      if (dist > 0) return prevState - 1;
      return prevState + 1;
    });
  };

  return (
    <div id="carousel">
      <button onClick={e => handleSlide(e, 150)} disabled={curSlide === 0}>
        <img src="/img/angle-left.svg" alt="" />
      </button>
      <button
        onClick={e => handleSlide(e, -150)}
        disabled={curSlide >= slidesCount - 1}
      >
        <img src="/img/angle-right.svg" alt="" />
      </button>
      <div id="body">
        <div id="slides">
          {props.data.map((work, i) => (
            <img
              key={i}
              className="slide"
              src={work.images[0]}
              alt=""
              onClick={() => props.onImgClick(i)}
            />
          ))}
          {/* <div
              key={i}
              className="slide"
              style={{ backgroundImage: `url(${work.images[0]})` }}
              onClick={() => props.onImgClick(i)}
            /> */}
          {/* <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>*/}
        </div>
      </div>
    </div>
  );
}
