import React, { Component } from "react";
import anime from "animejs";
import Intro from "./Intro";
import Question from "./Question";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: false,
    };
    this._onStartClick = this._onStartClick.bind(this);
  }

  renderIntro() {
    return (
      <Intro
        _onStartClick={this._onStartClick}
        title="Myers-Briggs Personality Test"
      />
    );
  }

  renderQuestion() {
    return <Question />;
  }

  render() {
    let showQuestion = this.state.showQuestion;
    if (showQuestion) {
      return this.renderQuestion();
    }
    return this.renderIntro();
  }

  _onStartClick() {
    // this.animateOut();
    setTimeout(
      () => this.setState({ showQuestion: !this.state.showQuestion }),
      1000
    );
  }

  animateOut() {
    setTimeout(
      () =>
        anime({
          targets: ".card",
          translateX: "150%",
          elasticity: function (el, i, l) {
            return 200 + i * 200;
          },
        }),
      200
    );
  }
}

export default QuizApp;
