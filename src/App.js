import logo from './logo.svg';
import './App.css';

function Display() {
  return (
    <div className="Display">
      GG
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

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value);
  }
  return (
    <div className="App">
      <div className="CalcContainer">
        <div className="DispContainer">
          < Display/>
        </div>

        <div className="ButtonContainer">
          
          < Key label={7} clickHandler={genericClickHandler}/>
          < Key label={8} clickHandler={genericClickHandler}/>
          < Key label={9} clickHandler={genericClickHandler}/>
          < Key label={'÷'} clickHandler={genericClickHandler}/>
          < Key label={4} clickHandler={genericClickHandler}/>
          < Key label={5} clickHandler={genericClickHandler}/>
          < Key label={6} clickHandler={genericClickHandler}/>
          < Key label={'×'} clickHandler={genericClickHandler}/>
          < Key label={1} clickHandler={genericClickHandler}/>
          < Key label={2} clickHandler={genericClickHandler}/>
          < Key label={3} clickHandler={genericClickHandler}/>
          < Key label={'-'} clickHandler={genericClickHandler}/>
          < Key label={'C'} clickHandler={genericClickHandler}/>
          < Key label={0} clickHandler={genericClickHandler}/>
          < Key label={'='} clickHandler={genericClickHandler}/>
          < Key label={'+'} clickHandler={genericClickHandler}/>

        </div>
      </div>
    </div>
  );
}

export default App;
