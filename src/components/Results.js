import React from "react";
import propTypes from "prop-types";

const Results = ({ restartQuiz }) => {
  return (
    <div>
      <div className="results-container">
        {" "}
        <h1 id="results-title">Quiz Results</h1>
      </div>

      <div className="results-container">
        <div className="results-total">
          {" "}
          <h2>Results:</h2>
          {/* list all the different career options */}
          <ul id="results-breakdown">
            <li> 50% Analytical </li>
            <li> 75% Creative </li>
            <li> 25% Assertive </li>
            <li> 75% Creative </li>
            <li> 25% Assertive </li>
          </ul>
        </div>
        <div className="results-total">
          {" "}
          <h2>Top 5 careers:</h2>
          {/* list all the different career options */}
          <ul id="results-careers">
            <li> Project Manager </li>
            <li> Systems Engineer </li>
            <li> Marketing Strategist </li>
            <li> Systems Analyst </li>
            <li> Military Strategist </li>
          </ul>
        </div>
      </div>
      <div className="results-container">
        <a onClick={restartQuiz}>Retake Career Quiz</a>
      </div>
    </div>
  );
};

Results.propTypes = {
  userAnswers: propTypes.array.isRequired,
  restartQuiz: propTypes.func.isRequired,
};

export default Results;
