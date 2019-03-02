import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
  <nav>
    <Link className="link active" to="/" onClick={() => props.handleNav("0")}>
      HEADER
    </Link>
    <Link className="link" to="/aboutme/" onClick={() => props.handleNav("1")}>
      ABOUT ME
    </Link>
    <Link
      className="link"
      to="/techstack/"
      onClick={() => props.handleNav("2")}
    >
      TECH STACK
    </Link>
    <Link
      className="link"
      to="/portfolio/"
      onClick={() => props.handleNav("3")}
    >
      PORTFOLIO
    </Link>
    <Link className="link" to="/contact/" onClick={() => props.handleNav("4")}>
      CONTACT ME
    </Link>
  </nav>
);

export default Navigation;
