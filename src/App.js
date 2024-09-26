import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function Display({display}) {
  return (
    <div className="Display">
      {display}
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

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp('Coming Soon')
    
  }

  const numClickHandler 
  
  = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
    if(op === null) {
      if(num1 === null) {
        setNum1(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
        if(num2 === null) {
          setNum2(value);
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
    const value = e
  }
  return (
    <div className="App">
      <div className="CalcContainer">
        <div className="DispContainer">
          < Display display={disp}/>
        </div>

        <div className="ButtonContainer">
          
          < Key label={7} clickHandler={numClickHandler}/>
          < Key label={8} clickHandler={numClickHandler}/>
          < Key label={9} clickHandler={numClickHandler}/>
          < Key label={'÷'} clickHandler={opClickHandler}/>
          < Key label={4} clickHandler={numClickHandler}/>
          < Key label={5} clickHandler={numClickHandler}/>
          < Key label={6} clickHandler={numClickHandler}/>
          < Key label={'×'} clickHandler={opClickHandler}/>
          < Key label={1} clickHandler={numClickHandler}/>
          < Key label={2} clickHandler={numClickHandler}/>
          < Key label={3} clickHandler={numClickHandler}/>
          < Key label={'-'} clickHandler={opClickHandler}/>
          < Key label={'C'} clickHandler={genericClickHandler}/>
          < Key label={0} clickHandler={numClickHandler}/>
          < Key label={'='} clickHandler={genericClickHandler}/>
          < Key label={'+'} clickHandler={opClickHandler}/>

        </div>
      </div>
    </div>
  );
}

export default App;
