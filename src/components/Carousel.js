import React, { useEffect } from 'react';

export default function Carousel() {
  useEffect(() => {
    document.querySelectorAll('.slide')[1].classList.add('focus');


  })
  let curDist = 0;
  let curSlide = 1;
  const handleSlide = (e, dist) => {
    document.querySelectorAll('.slide')[curSlide].classList.remove('focus');
    curDist += dist;
    if(dist > 0) {
      curSlide--;
    } else {
      curSlide++;
    }
    document.querySelector('#slides').style.transform = `translateX(${curDist}px)`;
    document.querySelectorAll('.slide')[curSlide].classList.add('focus');
  }

  return (
    <div id="carousel">
      <div id="body">
        <button onClick={(e) => handleSlide(e, 150)}>Prev</button>
        <button onClick={(e) => handleSlide(e, -150)}>Next</button>
        <div id="slides">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>
      </div>
    </div>
  )
}
