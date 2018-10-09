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
        <Layout>
          <Header>Header
          <Router>
            <div>
            <Link to='/signup'></Link>
            <Link to='/signup'></Link>
            <Link to='/signup'></Link>
            </div>
          </Router>
          </Header>
          <HashRouter>
            <Switch>
              <Route path={ROUTE_SIGNUP} render={props => <Signup {...props} />} />
              <Route path={ROUTE_SIGNIN} render={props => <Signin {...props} />} />
              <Route
                path={ROUTE_HOME}
                render={props => <Home {...props} />}
              />
              <Redirect to={{ pathname: ROUTE_HOME }} />
            </Switch>
          </HashRouter>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
