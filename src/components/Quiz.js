import React from "react";
import propTypes from "prop-types";
import QuestionList from "./QuestionList";

const Quiz = ({
  step,
  questions,
  totalQuestions,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <div id="quiz">
      <h1> Career Quiz </h1>
      <h1>
        {" "}
        Question {step} of {totalQuestions}{" "}
      </h1>

      <div>
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  );
};

Quiz.propTypes = {
  step: propTypes.number.isRequired,
  questions: propTypes.array.isRequired,
  totalQuestions: propTypes.number.isRequired,
  handleAnswerClick: propTypes.func.isRequired,
  handleEnterPress: propTypes.func.isRequired,
};

export default Quiz;
