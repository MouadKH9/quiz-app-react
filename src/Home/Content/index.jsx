import React from "react";
import axios from "axios";
import { Steps, Icon } from "antd";
import Question from "./Question";
import Score from "./Score";
const { Step } = Steps;

class Content extends React.Component {
  state = {
    current: 0,
    questions: [],
    answers: [],
    score: 0,
    finished: false,
    loading: true
  };
  componentDidMount() {
    this.refreshQuestions();
  }

  refreshQuestions = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`
      )
      .then(res => {
        res = JSON.stringify(res)
          .replace(/&quot;/g, "'")
          .replace(/&#039;/g, "'");
        res = JSON.parse(res);
        let questions = res.data.results;
        questions.forEach(question => {
          question.incorrect_answers.push(question.correct_answer);
          question.incorrect_answers.sort(() => Math.random() - 0.5);
        });

        this.setState({
          questions: res.data.results,
          loading: false,
          answers: []
        });
      });
  };

  tryAgain = () => {
    this.refreshQuestions();
    this.setState({ finished: false, current: 0, score: 0 });
  };
  answered = (questionIndex, answer) => {
    let correct = this.state.questions[questionIndex].correct_answer === answer;
    this.setState({
      score: this.state.score + correct,
      answers: this.state.answers.concat([
        {
          question: this.state.questions[questionIndex].question,
          answer,
          correct
        }
      ])
    });

    if (this.state.current < 4)
      this.setState({ current: this.state.current + 1 });
    else this.setState({ finished: true });
  };
  render() {
    if (this.state.loading) return <Icon className="loading" type="loading" />;
    return this.state.finished ? (
      <Score
        answers={this.state.answers}
        score={this.state.score}
        tryAgain={this.tryAgain}
      />
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
            answers={this.state.questions[this.state.current].incorrect_answers}
            clicked={this.answered}
          />
        ) : null}
      </div>
    );
  }
}

export default Content;
