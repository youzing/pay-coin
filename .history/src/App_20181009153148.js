import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Switch, Route, Link, HashRouter, Redirect } from "react-router-dom";
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;
const ROUTE_LIST = `/customerConf/list`,
  ROUTE_SHOW = `/customerConf/show/:operate/:id`,
  ROUTE_LEVEL = `/levelConf/`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>Header</Header>
          <HashRouter>
            <Switch>
              <Route path={ROUTE_LIST} render={props => <List {...props} />} />
              <Route path={ROUTE_SHOW} render={props => <Show {...props} />} />
              <Route
                path={ROUTE_LEVEL}
                render={props => <ListForLevel {...props} />}
              />
              <Redirect to={{ pathname: ROUTE_LIST }} />
            </Switch>
          </HashRouter>

     
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
