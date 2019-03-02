import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";

const TechStack = props => (
  <div id="tech-stack">
    <h1 className="name-tag">MY TECH STACK</h1>
    <div className="stack">
      <FontAwesomeIcon icon={["fab", "react"]} />
      <FontAwesomeIcon icon={["fab", "node"]} />
      <FontAwesomeIcon icon={["fab", "js"]} />
      <FontAwesomeIcon icon={["fab", "css3"]} />
      <FontAwesomeIcon icon={["fab", "html5"]} />
    </div>
  </div>
);

export default TechStack;
