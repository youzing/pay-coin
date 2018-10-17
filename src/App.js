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
          {/* 最简单的router实例   公用的底层接口  一般不适用  使用高级路由   router 下  只能有一个子元素   要有一个div爸爸保护下  */} 
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

          <Footer className="foot">zyb © 2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
