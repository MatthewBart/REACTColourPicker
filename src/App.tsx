import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[colour, setColour]=useState("");
  const[answers,setAnswers]=useState<string[]>([]);
  const[isIncorrect,setIncorrect]= useState(false);
  const pickNewColour=()=>{
    const correctColour= getRandomColour();
    setAnswers([correctColour,getRandomColour(),getRandomColour()].sort(()=>0.5-Math.random()));
    setColour(correctColour);
  }

  const getRandomColour=()=>{

    const digits =
    ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  
    const colour = new Array(6)
        .fill("")
        .map(()=>digits[Math.floor(Math.random() * digits.length)])
        .join("");
        return `#${colour}`;

  }

  useEffect(() => {
    pickNewColour();
  }, [])

  function handleClick(answer:string){
    if(answer==colour){
      setIncorrect(false);
      pickNewColour();
    }
    else{
      setIncorrect(true);
    }
    
  }
  return (
    
    <div className="App">
      <div className="column">
 {/*<div className = "count">Streak:(count)</div>*/}
        {isIncorrect && <div className="wrong">Wrong Answer</div>}
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
