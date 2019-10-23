import React from "react";
class Score extends React.Component {
  render() {
    return (
      <div>
        <h1 className="score">
          Your score is
          <span>
            {" "}
            {this.props.score}
            /5{" "}
          </span>
          !
        </h1>
        <h4 className="scoreSub">
          {this.props.score > 2 ? "Great Job" : "You can do better, try again!"}
        </h4>
      </div>
    );
  }
}

export default Score;
