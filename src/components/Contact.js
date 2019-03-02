import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/free-brands-svg-icons";

const Contact = props => (
  <div id="contact">
    <h1>CONTACT ME</h1>
    <a href="mailto:born2killthem@gmail.com">
      <FontAwesomeIcon className="contact" icon={["fab", "google"]} />
    </a>
    <a href="">
      <FontAwesomeIcon className="contact" icon={["fab", "linkedin"]} />
    </a>
    <a href="https://github.com/ahmedfarag36" target="blank">
      <FontAwesomeIcon className="contact" icon={["fab", "github"]} />
    </a>
    <a href="">
      <FontAwesomeIcon className="contact" icon={["fab", "slack"]} />
    </a>
    <a href="">
      <FontAwesomeIcon className="contact" icon={["fab", "stack-overflow"]} />
    </a>
    <a href="">
      <FontAwesomeIcon className="contact" icon={["fab", "discord"]} />
    </a>
  </div>
);

export default Contact;
