import React, { Component } from "react";
import { Layout } from "antd";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import "./App.scss";
import BasicExample from "./pages/basic";
import ParamsExample from "./pages/urlparam";
import AuthExample from "./pages/redirect";
import CustomLinkExample from "./pages/customlink";
import NoMatchExample from "./pages/notmatch"
import RecursiveExample from "./pages/recursive"
import SidebarExample from "./pages/sidebar"
import PreventingTransitionsExample from "./pages/transitions";
import RouteConfigExample from "./pages/routeconfig";
const { Footer } = Layout;

const ROUTE_BASIC = `/basic`,
  ROUTE_URLPARAM = `/urlparam`,
  ROUTE_REDIRECT = `/redirect`,
  ROUTE_CUSTOMLINK = `/customlink`,
  ROUTE_TRANSITIONS = `/transitions`,
  ROUTE_NOTMATCH = `/notmatch`,
  ROUTE_RECURISIVE = `/recursive`,
  ROUTE_SIDEBAR = `/sidebar`,
  ROUTE_ROUTERCONFIG = `/routeconfig`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* 最简单的router实例   公用的底层接口  一般不适用  使用高级路由   router 下  只能有一个子元素   要有一个div爸爸保护下  */}
          <Router>
            <div className="all">
              <div className="nav">
                <Link to={ROUTE_BASIC} className="">
                  基本路由
                </Link>
                {/* 带参数的url  match用 */}
                <Link to={ROUTE_URLPARAM} className="">
                  带参数的url
                </Link>
                {/*还没太懂 */}
                <Link to={ROUTE_REDIRECT} className="">
                  自动重定向
                </Link>
                {/*可以让链接也跟着动 */}
                <Link to={ROUTE_CUSTOMLINK} className="">
                  可变式链接
                </Link>
                {/*提交表单时常用  免得丢失信息*/}
                <Link to={ROUTE_TRANSITIONS} className="">
                  阻止直接跳转
                </Link>
                {/*未匹配404时*/}
                <Link to={ROUTE_NOTMATCH} className="">
                  网页不匹配（404）
                </Link>
                {/*递归递归*/}
                <Link to={ROUTE_RECURISIVE} className="">
                  递归路径
                </Link>
                {/*导航栏*/}
                <Link to={ROUTE_SIDEBAR} className="">
                  导航栏式
                </Link>
                {/*Route Config*/}
                <Link to={ROUTE_ROUTERCONFIG} className="">
                Route Config
                </Link>
              </div>
              <div className="content">
                <Route path={ROUTE_BASIC} component={BasicExample} />
                <Route path={ROUTE_URLPARAM} component={ParamsExample} />
                <Route path={ROUTE_REDIRECT} component={AuthExample} />
                <Route path={ROUTE_CUSTOMLINK} component={CustomLinkExample} />
                <Route path={ROUTE_TRANSITIONS} component={PreventingTransitionsExample} />
                <Route path={ROUTE_NOTMATCH} component={NoMatchExample} />
                <Route path={ROUTE_RECURISIVE} component={RecursiveExample} />
                <Route path={ROUTE_SIDEBAR} component={SidebarExample} />
                <Route path={ROUTE_ROUTERCONFIG} component={RouteConfigExample} />
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
