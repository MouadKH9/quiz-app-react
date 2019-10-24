import React from "react";
import { Button } from "antd";
import { Row, Col, List, Icon } from "antd";

class Score extends React.Component {
  state = { showAnswers: false };
  toggleAnswers = () => {
    this.setState({ showAnswers: !this.state.showAnswers });
  };
  render() {
    return (
      <div>
        <h1 className="score">
          Your score is{" "}
          <span>
            {this.props.score}/{this.props.amount}
          </span>
          !
        </h1>
        <h4 className="scoreSub">
          {this.props.score / this.props.amount > 0.5
            ? "Great Job"
            : "You can do better, try again!"}
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
                  <Button
                    icon={!this.state.showAnswers ? "eye" : "eye-invisible"}
                    size="large"
                    onClick={this.toggleAnswers}>
                    {this.state.showAnswers ? "Hide" : "View"} answers
                  </Button>
                </Button.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        {this.state.showAnswers ? (
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
                {item.answer}{" "}
                {item.correct ? (
                  <Icon className="correct" type="check" />
                ) : (
                  <Icon className="incorrect" type="close" />
                )}
              </List.Item>
            )}
          />
        ) : null}
      </div>
    );
  }
}

export default Score;
