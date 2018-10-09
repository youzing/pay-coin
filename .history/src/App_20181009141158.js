import React, { Component } from "react";
import { Layout, Menu } from "antd";
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
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
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
