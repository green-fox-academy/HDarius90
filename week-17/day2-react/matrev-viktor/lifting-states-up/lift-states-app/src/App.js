import {useState} from 'react'
import './App.css';

export default function App() {

const [countSession, setSessionCounter] = useState(0);
const [counter, setCounter] = useState(parseInt(localStorage.getItem('mindenkori')));

function handleCounterIncrease(){
  setSessionCounter(countSession + 1)
  setCounter(counter + 1)
  localStorage.setItem('mindenkori', counter + 1);
}

function handleCounterDecrease(){
  setSessionCounter(countSession - 1)
  setCounter(counter - 1)
  localStorage.setItem('mindenkori', counter - 1);
  
}

  return (
    <div className="App">
      Counter App
     <CounterComponent counter={counter} countSession={countSession} />
     <ButtonComponent  handleCounterIncrease={handleCounterIncrease} handleCounterDecrease={handleCounterDecrease} />
    </div>
  );
}

function CounterComponent({counter, countSession}) {
  return (
    <div>
        <p> Számláló (mindenkori): {counter}</p> 
        <p>Számláló (munkamenet): {countSession}</p>   
    </div>
  )
}


function ButtonComponent({ handleCounterIncrease, handleCounterDecrease}){

  
  return(
      <div>
        <button
          type="button"
          onClick={handleCounterIncrease}
        >
          Növel
        </button>

        <button
          type="button"
          onClick={handleCounterDecrease}
        >
          Csökkent
        </button>
      </div>
)
}



