import React from "react";
import PropTypes from "prop-types";

const Results = ({ restartQuiz }) => {
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div>You answered...</div>
      blah blah blah
      <div className="results-total">Your Career Options Are </div>
      blah blah blah
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  );
};

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

export default Results;
