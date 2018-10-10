import React, { Component } from "react";
import Button from "antd/lib/button";
import "./../App.css";
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
          <a href="https://www.coinbase.com/oauth/authorize/oauth_signin?client_id=fa0e6e2478b02335b4eab7e1796945448fa1e33ca61df2103b59152e28c10085&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fauthorize&response_type=code&scope=wallet%3Auser%3Aread">
          <Button type="dashed" className="buttonabout">
            {" "}
            <img
              src={Imgcoin}
              alt="反正就是一张图啦"
              style={{ height: "100%" }}
            />{" "}
            Continue with Coinbase
          </Button>
          </a>
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
