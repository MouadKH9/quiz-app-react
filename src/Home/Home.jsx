import React from "react";
import { Layout } from "antd";
import Content from "./Content";
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header style={{ height: "10vh" }}>
          <h3 style={{ color: "white" }}>Quiz App</h3>
        </Layout.Header>
        <Layout>
          <Layout.Content
            style={{ padding: 30, height: "80vh", overflowY: "scroll" }}>
            <Content />
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{ height: "10vh" }}>Footer</Layout.Footer>
      </Layout>
    );
  }
}

export default Home;
