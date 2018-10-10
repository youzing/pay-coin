import React, { Component } from "react";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Img from "./coin.png";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Signin from "./pages/signin";
const { Header, Footer } = Layout;
const ROUTE_SIGNUP = `/signup`,
  ROUTE_HOME = `/home`,
  ROUTE_SIGNIN = `/signin`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <div className="all">
              <div className="nav">
           
              <Link to="/home" className="navhome">
              <img src={Img} alt="好大一只鸡"/>
              Pay-coin</Link>
          
                <Link to="/signup" className="navsignup">Sign up</Link>
                <Link to="/signin" className="navsignin">Sign in</Link>
              </div>
              <div className="content">
              <Route path={ROUTE_SIGNUP} component={Signup} />
              <Route path={ROUTE_SIGNIN} component={Signin} />
              <Route path={ROUTE_HOME} component={Home} />
              </div>
            </div>
          </Router>

          <Footer className="foot">XinCheng © 2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
