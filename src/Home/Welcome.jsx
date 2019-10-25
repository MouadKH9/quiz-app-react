import React from "react";
import Content from "./Content";
import { Row, Col, Radio, Select, Button } from "antd";
import axios from "axios";
const { Option } = Select;

class Welcome extends React.Component {
  state = {
    started: false,
    categories: [],
    diff: "medium",
    amount: 5,
    category: null
  };
  componentWillMount() {
    axios.get("https://opentdb.com/api_category.php").then(res => {
      this.setState({ categories: res.data.trivia_categories });
    });
  }
  diffChange = e => {
    this.setState({ diff: e.target.value });
  };
  amountChange = e => {
    this.setState({ amount: parseInt(e.target.value) });
  };
  categoryChange = val => {
    this.setState({ category: val });
  };
  start = () => {
    this.setState({ started: true });
  };
  tryAgain = () => {
    this.setState({
      started: false,
      diff: "medium",
      amount: 5,
      category: null
    });
  };
  render() {
    return this.state.started ? (
      <Content
        amount={this.state.amount}
        category={this.state.category}
        diff={this.state.diff}
        tryAgain={this.tryAgain}
      />
    ) : (
      <div className="welcome">
        <Row type="flex" justify="center">
          <Col className="left-col">
            <h4>Difficulty:</h4>
          </Col>
          <Col>
            <Radio.Group
              onChange={this.diffChange}
              defaultValue="medium"
              size="large">
              <Radio.Button value="easy">Easy</Radio.Button>
              <Radio.Button value="medium">Medium</Radio.Button>
              <Radio.Button value="hard">Hard</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col className="left-col">
            <h4>Number of questions:</h4>
          </Col>
          <Col>
            <Radio.Group
              onChange={this.amountChange}
              defaultValue="5"
              size="large">
              <Radio.Button value="5">5</Radio.Button>
              <Radio.Button value="10">10</Radio.Button>
              <Radio.Button value="15">15</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col className="left-col">
            <h4>Category:</h4>
          </Col>
          <Col>
            <Select
              placeholder="Select a category"
              style={{ width: 220 }}
              onChange={this.categoryChange}>
              {this.state.categories.map(cat => (
                <Option value={cat.id}>{cat.name}</Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col>
            <Button
              onClick={this.start}
              disabled={!this.state.category}
              type="primary"
              size="large">
              Start the quiz!
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;
