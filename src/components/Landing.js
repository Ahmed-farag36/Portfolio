import React from "react";

const Header = props => (
  <div id="header">
    <img
      className="avatar"
      src="/my-avatar.JPG"
      alt="my face"
    />
    <span>HELLO WORLD IT'S ME</span>
    <h1 className="name-tag">It's me Ahmed Farag</h1>
    <span className="title-tag">MERN Stack Web Developer</span>
    <div id="about-me">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel iure
        maiores, labore quae reiciendis optio dolor iusto inventore! Nostrum ipsum
        minima unde commodi numquam. Necessitatibus excepturi in optio reiciendis.
      </p>
    </div>
  </div>
);

export default Header;
