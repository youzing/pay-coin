import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            Header
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Router>
                <div>
                  <Menu.Item key="1">
                    <Link to="/home">home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/signin">signin</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/signup">signup</Link>
                  </Menu.Item>
                </div>
              </Router>
            </Menu>
          </Header>
          <Content>Content</Content>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
