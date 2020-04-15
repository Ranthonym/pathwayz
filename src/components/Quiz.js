import React from "react";
import PropTypes from "prop-types";
import QuestionList from "./QuestionList";

const Quiz = ({
  step,
  questions,
  totalQuestions,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <div>
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
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
};

export default Quiz;
