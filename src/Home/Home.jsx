import React from "react";
import { Layout } from "antd";
import Welcome from "./Welcome";
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
            <Welcome />
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{ height: "10vh" }}>
          <span style={{ float: "right" }}>
            Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://mouadk.online">
              Mouad K.
            </a>
          </span>
        </Layout.Footer>
      </Layout>
    );
  }
}

export default Home;
