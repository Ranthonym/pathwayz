import React from "react";
import propTypes from "prop-types";
import Question from "./Question";

const QuestionList = ({ questions, handleAnswerClick, handleEnterPress }) => {
  return (
    <ul className="question-list">
      {questions.map((question) => {
        return (
          <Question
            key={question.question.props.children.toString()}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
            handleEnterPress={handleEnterPress}
          />
        );
      })}
    </ul>
  );
};

QuestionList.propTypes = {
  questions: propTypes.array.isRequired,
  handleAnswerClick: propTypes.func.isRequired,
  handleEnterPress: propTypes.func.isRequired,
};

export default QuestionList;
