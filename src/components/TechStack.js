import React from "react";
// import material icons if brands doesn't exist use svgs.

const TechStack = props => (
  <div id="tech-stack">
    <h1 className="name-tag">MY TECH STACK</h1>
    <div className="stack">
      {/* use material icons */}
      <h2>With a good grasp</h2>
      <i>MongoDB</i>
      <i>Expressjs</i>
      <i>React</i>
      <i>Nodejs</i>
      <i>GraphQL</i>
      <i>JavaScript</i>
      <i>PWA</i>
      <h2>Learning</h2>
      <i>Rust</i>
      <i>Web assembly</i>
      <h2>In my plan</h2>
    </div>
  </div>
);

export default TechStack;
