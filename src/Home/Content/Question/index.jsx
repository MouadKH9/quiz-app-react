import React from "react";
import { List, Avatar } from "antd";
class Question extends React.Component {
  state = {
    hovered: -1,
    selected: -1,
    answers: []
  };
  // componentWillReceiveProps() {
  //   let answers = this.props.answers;
  //   answers.sort(() => Math.random() - 0.5);
  //   this.setState({
  //     answers
  //   });
  // }
  onHover(index) {
    this.setState({
      hovered: index
    });
  }
  onExit() {
    this.setState({
      hovered: -1
    });
  }
  clicked(answer) {
    this.props.clicked(this.props.index, answer);
  }
  render() {
    return (
      <List
        style={{
          marginTop: 50
        }}
        header={
          <h3
            style={{
              textAlign: "center"
            }}>
            {" "}
            {this.props.text}{" "}
          </h3>
        }
        itemLayout="horizontal"
        dataSource={this.props.answers}
        renderItem={(item, i) => (
          <List.Item
            onClick={() => this.clicked(item)}
            onMouseEnter={() => this.onHover(i)}
            onMouseLeave={() => this.onExit()}
            className={i === this.state.hovered ? "hovered" : ""}>
            <List.Item.Meta
              avatar={
                i === this.state.hovered ? (
                  <Avatar icon="check" />
                ) : (
                  <Avatar icon="minus" />
                )
              }
              title={item}
            />{" "}
          </List.Item>
        )}
      />
    );
  }
}

export default Question;
