import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import Results from "./Results";
import shuffleQuestions from "../helpers/shuffleQuestions";
import QUESTION_DATA from "../data/quiz-data";

class QuizApp extends Component {
  state = {
    ...this.getInitialState(this.props.totalQuestions),
  };

  static propTypes = {
    totalQuestions: PropTypes.number.isRequired,
  };

  getInitialState(totalQuestions) {
    totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
    const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);

    return {
      questions: QUESTIONS,
      totalQuestions: totalQuestions,
      step: 1,
    };
  }

  handleAnswerClick = (index) => (e) => {
    if (e.target.nodeName === "LI") {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = "none";
      setTimeout(this.nextStep, 500);
    }
  };

  handleEnterPress = (index) => (e) => {
    if (e.keyCode === 13) {
      this.handleAnswerClick(index)(e);
    }
  };

  nextStep = () => {
    const { questions, step } = this.state;
    const restOfQuestions = questions.slice(1);

    this.setState({
      step: step + 1,
      questions: restOfQuestions,
    });
  };

  restartQuiz = () => {
    this.setState({
      ...this.getInitialState(this.props.totalQuestions),
    });
  };

  render() {
    const { step, questions, userAnswers, totalQuestions } = this.state;

    if (step >= totalQuestions + 1) {
      return (
        <Results restartQuiz={this.restartQuiz} userAnswers={userAnswers} />
      );
    } else
      return (
        <Fragment>
          <Quiz
            step={step}
            questions={questions}
            totalQuestions={totalQuestions}
            handleAnswerClick={this.handleAnswerClick}
            handleEnterPress={this.handleEnterPress}
          />
        </Fragment>
      );
  }
}

export default QuizApp;
