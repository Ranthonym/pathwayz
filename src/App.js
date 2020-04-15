import React, { useState, useEffect } from "react";
import QuizApp from "./components/QuizApp";
function App() {
  function takeAssessment() {
    //display assessment
    prompt("I dont know what to do yet");
  }

  return (
    <div>
      <QuizApp totalQuestions={5} />
    </div>
  );
}
export default App;
