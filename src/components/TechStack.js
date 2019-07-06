import React from "react";

const TechStack = props => (
  <div id="tech-stack">
    <h1 className="name-tag">MY TECH STACK</h1>
    <div className="stack">
      {/* TODO: compare svg to web fonts icons */}
      <div className="good-grasp">
        <h2>WITH A GOOD GRASP</h2>
        <i>
          <img src="/img/mongodb.svg" />
        </i>
        {/* <i>Express</i> */}
        <i>
          <img src="/img/react.svg" />
        </i>
        <i>
          <img src="/img/node-dot-js.svg" />
        </i>
        <i>
          <img src="/img/html5.svg" />
        </i>
        <i>
          <img src="/img/css31.svg" />
        </i>
        <i>
          <img src="/img/javascript.svg" />
        </i>
        {/* <i>PWA</i> */}
      </div>
      <div className="learning">
        <h2>LEARNING</h2>
        <i>
          <img src="/img/graphql.svg" />
        </i>
      </div>
      <div className="my-plan">
        <h2 className="my-plan">IN MY PLAN</h2>
        <i className="my-plan">
          <img src="/img/rust.svg" />
        </i>
        {/* <i className="my-plan">Web assembly</i> */}
      </div>
      <div className="certificate">
        <h2>MY CERTIFICATES</h2>
        <img src="/img/mws-certificate.jpg" />
      </div>
    </div>
  </div>
);

export default TechStack;
