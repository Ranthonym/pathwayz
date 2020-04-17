import React from "react";
import propTypes from "prop-types";

const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  return (
    <li
      className="question-answer"
      tabIndex="0"
      onClick={handleAnswerClick}
      onKeyDown={handleEnterPress}
    >
      {answer}
    </li>
  );
};

Answer.propTypes = {
  answer: propTypes.element.isRequired,
  handleAnswerClick: propTypes.func.isRequired,
  handleEnterPress: propTypes.func.isRequired,
};

export default Answer;
