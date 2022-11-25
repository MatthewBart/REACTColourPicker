import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Generates a random colour and three possible answers to what colour is displayed
function App() {
  // Define constants and set functions
  const[colour, setColour]=useState("");
  const[answers,setAnswers]=useState<string[]>([]);
  const[isCorrect, setCorrect]=useState("");
  

  // Picks a new colour and sets two random colours to be used as other guesses
  const pickNewColour=()=>{
    const correctColour= getRandomColour();
    setAnswers([correctColour,getRandomColour(),getRandomColour()].sort(()=>0.5-Math.random()));
    setColour(correctColour);
  }

  // Generates a random hexidecimal code
  const getRandomColour=()=>{

    const digits =
    ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  
    const colour = new Array(6)
        .fill("")
        .map(()=>digits[Math.floor(Math.random() * digits.length)])
        .join("");
        return `#${colour}`;

  }

  // Loads initial colour
  useEffect(() => {
    pickNewColour();
  }, [])

  // Handles button clicks
  // Determines if the answer is correct and changes colour if it is
  function handleClick(answer:string){
    if(answer==colour){
      setCorrect("true");
      pickNewColour();
    }
    else{
      setCorrect("false");
    }
  }
    
  // Front end
  // Displays three buttons and a colour
  // Displays whether the colour is correct or incorrect
  return (
    <div className="App">
      <div className="column">
        {isCorrect=="false"&& <div className="wrong">Wrong Answer</div>}
        {isCorrect=="true"&& <div className="right">Correct Answer</div>}
        <div className="colour-picker" style={{background: colour}}></div>
          {answers.map((answers)=>(
          <button
            onClick={()=>handleClick(answers)} key={answers}>{answers}</button>
          ))}
      </div>
    </div>
  );
}

export default App;
