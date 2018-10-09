import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Switch, Route,BrowserRouter as Router, Link, HashRouter, Redirect } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Signin from "./pages/signin";
const { Header, Footer, Sider, Content } = Layout;
const ROUTE_SIGNUP = `/signup`,
  ROUTE_HOME = `/home`,
  ROUTE_SIGNIN = `/signin`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout > 
          <Header>Header
          <Router>
            <div>
            <Link to='/home'>home</Link>
            <Link to='/signup'>signup</Link>
            <Link to='/signin'>signin</Link>
            </div>
          </Router>
          </Header>
          <Router style={{ height: '200px' }}>
            <Switch>
              <Route path={ROUTE_SIGNUP}  component={Signup} />
              <Route path={ROUTE_SIGNIN}  component={Signin} />
              <Route
                path={ROUTE_HOME}  component={Home}
              />
            </Switch>
          </Router>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
