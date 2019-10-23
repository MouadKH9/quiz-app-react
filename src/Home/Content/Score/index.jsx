import React from "react";
import { Button } from "antd";
import { Row, Col, List } from "antd";

class Score extends React.Component {
  state = { showAnswers: false };
  render() {
    return (
      <div>
        <h1 className="score">
          Your score is{" "}
          <span>
            {this.props.score}
            /5
          </span>
          !
        </h1>
        <h4 className="scoreSub">
          {this.props.score > 2 ? "Great Job" : "You can do better, try again!"}
        </h4>
        <Row style={{ marginTop: 30 }} type="flex" justify="center">
          <Col span={10}>
            <Row type="flex" justify="center">
              <Col>
                <Button.Group>
                  <Button
                    onClick={this.props.tryAgain}
                    icon="reload"
                    size="large"
                    type="primary">
                    Try Again
                  </Button>
                  <Button icon="eye" size="large">
                    View answers
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <List
          style={{
            marginTop: 50
          }}
          header={
            <h3
              style={{
                textAlign: "center"
              }}>
              Your answers
            </h3>
          }
          itemLayout="horizontal"
          dataSource={this.props.answers}
          renderItem={(item, i) => (
            <List.Item>
              <List.Item.Meta title={item.question} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Score;
