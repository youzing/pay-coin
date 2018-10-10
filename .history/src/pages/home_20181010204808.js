import React, { Component } from "react";
import Button from "antd/lib/button";
import "./../App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Imgcoin from "./../jumpcoinbase.png";
import Macbook from "./../macbook.png";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="coinIntro">
          <h2 className="conTitle">Thano's private bank</h2>
          <h4 className="content">I'm begging you to save money with me.I can provide private services when necessary</h4>
          <Button type="dashed" className="buttonabout">
            {" "}
            <img
              src={Imgcoin}
              alt="反正就是一张图啦"
              style={{ height: "100%" }}
            />{" "}
            Continue with Coinbase
          </Button>

          <Button type="primary" className="buttonabout">
          <Link to="/signup" className="navsignup"> Sign Up with Email</Link>
        </Button>
        <div className="contentmore">Come, you are mine.</div>
        </div>
        <div className="introImg">
          <img src={Macbook} alt="反正就是一张图啦" />
        </div>
      </div>
    );
  }
}

export default Home;
