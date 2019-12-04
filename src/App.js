import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { Layout, Menu } from "antd";
import HeaderMenu from "./Components/HeaderMenu";

import ListScreen from "./Screens/ListScreen";
import "antd/dist/antd.css";
import "./App.scss";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <HeaderMenu />
      <Content className="content">
        <Router history={history}>
          <Switch>
            <Route path="/" component={ListScreen} />
          </Switch>
        </Router>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
