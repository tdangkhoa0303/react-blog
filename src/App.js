import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "antd";

import Logo from "./Components/Logo/Logo";
import MainMenu from "./Components/MainMenu/MainMenu";

// Import Page
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import BlogPost from "./Pages/BlogPost/BlogPost";

import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <Logo />
            <MainMenu
              menu={[
                { name: "Home", slug: "/" },
                { name: "Blog", slug: "/blog" },
              ]}
            />
          </Header>
          <Content style={{ padding: "10px 1%" }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route path="/blog/:slug">
                <BlogPost />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
