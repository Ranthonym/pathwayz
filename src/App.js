import React, { useState, useEffect } from "react";
import QuizApp from "./components/QuizApp";
function App() {
  function takeAssessment() {
    //display assessment
    prompt("I dont know what to do yet");
  }

  return (
    <div>
      <button onClick={takeAssessment}> Take Assessment Now </button>
      <QuizApp totalQuestions={5} />
    </div>
  );
}
export default App;
