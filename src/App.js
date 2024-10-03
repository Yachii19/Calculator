import './App.css';
import { useState } from "react";

function Display({display}) {
  return (
    <div className="Display">
      {display}
    </div>


  )
}

function NameAndSection(){
  return(
    <div className='NameContainer'>
      <p>
        John Rein Vinuya
      </p>
      <p>
        BSIT - 3A
      </p>
    </div>
  )
}

function Key({label, clickHandler}) {
  return (
    <button className='ButtonKeys' onClick={clickHandler}>
      {label}
    </button>
  )
}

function App() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[num2, setNum2] = useState(null);
  const[op, setOp] = useState(null);

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp('John Rein Vinuya');
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const clearClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const numClickHandler  = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    if(op === null) {
      if(num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
        if(num2 === null) {
          setNum2(value);
          setDisp(value);
        } else {
          setNum2(num2 + value);
          setDisp(num2 + value);
        }
    }
   
    console.log(num1);
  } 

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);

    setOp(value);
    setDisp(value);
    console.log(op);
  }


  const eqClickHandler = (e) => {
    e.preventDefault();
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      const firstNum = parseFloat(num1);
      const secondNum = parseFloat(num2);

      switch (op) {
        case '+':
          result = firstNum + secondNum;
          break;
        case '-':
          result = firstNum - secondNum;
          break;
        case '×':
          result = firstNum * secondNum;
          break;
        case '÷':
          result = secondNum !== 0 ? firstNum / secondNum : 'Error';
          break;
        default:
          result = 'Error';
      }
      setDisp(result);
      setNum1(result);
      setNum2(null);
      setOp(null);
    }
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          < NameAndSection/>
        </div>
        <div className="DispContainer">
          < Display display={disp}/>
        </div>

        <div className="ButtonContainer">
          
          < Key label={7} clickHandler={numClickHandler}/>
          < Key label={8} clickHandler={numClickHandler}/>
          < Key label={9} clickHandler={numClickHandler}/>
          < Key label={'='} clickHandler={eqClickHandler}/>
          < Key label={4} clickHandler={numClickHandler}/>
          < Key label={5} clickHandler={numClickHandler}/>
          < Key label={6} clickHandler={numClickHandler}/>
          < Key label={'+'} clickHandler={opClickHandler}/>
          < Key label={1} clickHandler={numClickHandler}/>
          < Key label={2} clickHandler={numClickHandler}/>
          < Key label={3} clickHandler={numClickHandler}/>
          < Key label={'-'} clickHandler={opClickHandler}/>
          < Key label={'C'} clickHandler={clearClickHandler}/>
          < Key label={0} clickHandler={numClickHandler}/>
          < Key label={'÷'} clickHandler={opClickHandler}/>
          < Key label={'×'} clickHandler={opClickHandler}/>
          < Key label={'Vinuya'} clickHandler={nameClickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
