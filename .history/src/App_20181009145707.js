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
              <Router>
                <div>
                    <Link to="/pages">home</Link>
                    <Link to="/pages">signin</Link>
                    <Link to="/pages">signup</Link>
                </div>
              </Router>
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
