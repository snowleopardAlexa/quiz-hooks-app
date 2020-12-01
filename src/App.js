import React, { useState } from "react";
import './App.css';


function App() {

  const questions = [
    {
      questionText: 'What is the capital of Poland?',
      answerOptions: [
        {answerText: 'Warsaw', isCorrect: true},
        {answerText: 'London', isCorrect: false},
        {answerText: 'Paris', isCorrect: true},
        {answerText: 'Dublin', isCorrect: false},
      ],
    },
    {
      questionText: 'What is the highest peak of the mountain in the world?',
      answerOptions: [
        {answerText: 'Mount Everest', isCorrect: true},
        {answerText: 'Mount Blanc', isCorrect: false},
        {answerText: 'McKinley', isCorrect: false},
        {answerText: 'K2', isCorrect: false},
      ]
    },
    {
      questionText: 'The Iphone was created by which company?',
      answerOptions: [
        {answerText: 'Intel', isCorrect: false},
        {answerText: 'IBM', isCorrect: false},
        {answerText: 'Apple', isCorrect: true},
        {answerText: 'Google', isCorrect: false},
      ],
    },
    {
     questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        {answerText: '1', isCorrect: false},
        {answerText: '4', isCorrect: false},
        {answerText: '3', isCorrect: false},
        {answerText: '7', isCorrect: true},
      ],
    },
  ];

  // state
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  // display question plus one 
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      alert("this answer is correct!");
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="app">
       {/* Replace false with logic to display the score when the user
       has answered all the questions */}
       {showScore ? (
       <div className='score-section'>You scored {score} out of {questions.length}</div>
       ) : (
       <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1} </span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
       </>
       )}
    </div>
  );
}

export default App;
