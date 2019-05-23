import React, { Component } from "react";
import Landing from "./Landing";
import TechStack from "./TechStack";
// import Portfolio from "./Portfolio";
import Contact from "./Contact";
// import Navigation from "./Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPageIdx: "0"
    }
  }

  // handleNav = index => {
  //   document.querySelectorAll(".link")[this.state.curPageIdx].classList.toggle("active");
  //   document.querySelectorAll(".link")[index].classList.toggle("active");
  //   this.setState(prevState => ({
  //     curPageIdx: index
  //   }))
  // };

  render() {

    return (
      <Router>
        <div id="app">
          {/* <Navigation handleNav={this.handleNav} /> */}
          <Route path="/" exact component={Landing} />
          {/* <Route path="/aboutme/" component={AboutMe} /> */}
          <Route path="/techstack/" component={TechStack} />
          {/* {/* <Route path="/portfolio/" component={Portfolio} /> */}
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
}
