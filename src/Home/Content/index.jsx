import React from "react";
import axios from "axios";
import { Steps } from "antd";
import Question from "./Question";
import Score from "./Score";
const { Step } = Steps;

class Content extends React.Component {
  state = {
    current: 0,
    questions: [],
    score: 0,
    finished: false
  };
  componentDidMount() {
    axios
      .get(
        `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`
      )
      .then(res => {
        console.log(res);
        this.setState({ questions: res.data.results });
      });
  }
  answered = (questionIndex, answer) => {
    console.log(questionIndex, answer);
    if (this.state.questions[questionIndex].correct_answer === answer)
      this.setState({ score: this.state.score + 1 });
    if (this.state.current < 4)
      this.setState({ current: this.state.current + 1 });
    else this.setState({ finished: true });
  };
  render() {
    return this.state.finished ? (
      <Score score={this.state.score} />
    ) : (
      <div>
        <Steps current={this.state.current}>
          {this.state.questions.map((question, i) => (
            <Step />
          ))}
        </Steps>
        {this.state.questions.length > 0 ? (
          <Question
            index={this.state.current}
            text={this.state.questions[this.state.current].question}
            answers={this.state.questions[
              this.state.current
            ].incorrect_answers.concat([
              this.state.questions[this.state.current].correct_answer
            ])}
            clicked={this.answered}
          />
        ) : null}
      </div>
    );
  }
}

export default Content;
