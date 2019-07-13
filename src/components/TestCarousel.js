import React from "react";
import "./App.css";

export default props => {
  const handle = (e, dest) => {
    document.querySelector("#slides").style.transform += "translateX(-30%)";
  };
  return (
    <div id="test">
      <button onClick={() => handle()}>Prev</button>
      <button onClick={handle}>Next</button>
      <div id="body">
        <div id="slides">
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
          <img
            className="slide"
            src="/img/wallpaper_1536845282419.jpg"
            alt=""
          />
        </div>
        {/* <div id="slides">
          <div
            className="slide"
            style={{backgroundImage: `url("/img/wallpaper_1536845282419.jpg")`}}
          >
          </div>
          <div
            className="slide"
            style={{backgroundImage: `url("/img/wallpaper_1536845282419.jpg")`}}
          >
          </div>
          <div
            className="slide"
            style={{backgroundImage: `url("/img/wallpaper_1536845282419.jpg")`}}
          >
          </div>
          <div
            className="slide"
            style={{backgroundImage: `url("/img/wallpaper_1536845282419.jpg")`}}
          >
          </div> 
        </div>*/}
      </div>
    </div>
  );
};
