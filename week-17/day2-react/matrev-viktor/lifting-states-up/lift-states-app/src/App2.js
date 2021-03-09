import {useState} from 'react'
import './App.css';

export default function App() {

const [counter1, setCounter1] = useState(0);
const [counter2, setCounter2] = useState(0);
const [counter3, setCounter3] = useState(0);


function handleCounterIncrease(){
 setCounter1(counter1 + 1)
 setCounter2(counter2 + 1)
 setCounter3(counter3 + 1)

}

function handleCounterDecrease(){
    setCounter1(counter1 - 1)
    setCounter2(counter2 - 1)
    setCounter3(counter3 - 1)
  
}

function handleCounter1Up(){
    setCounter1(counter1 + 1)
}

function handleCounter1Down(){
    setCounter1(counter1 - 1)
}

function handleCounter2Up(){
    setCounter2(counter2 + 1)
}

function handleCounter2Down(){
    setCounter2(counter2 - 1)
}


function handleCounter3Up(){
    setCounter3(counter3 + 1)
}

function handleCounter3Down(){
    setCounter3(counter3 - 1)
}



  return (
    <div className="App">

     <CounterComponent
      handleCounter1Down={handleCounter1Down}  handleCounter1Up={handleCounter1Up} 
      handleCounter2Down={handleCounter2Down}  handleCounter2Up={handleCounter2Up}
      handleCounter3Down={handleCounter3Down}  handleCounter3Up={handleCounter3Up}  
      counter1={counter1} counter2={counter2} counter3={counter3}  />
     <ButtonComponent   handleCounterIncrease={handleCounterIncrease} handleCounterDecrease={handleCounterDecrease} />
    </div>
  );
}

function CounterComponent({counter1, counter2, counter3, 
    handleCounter1Up, handleCounter1Down, 
    handleCounter2Up, handleCounter2Down,
    handleCounter3Up, handleCounter3Down}) {
  return (
    <div>
        <p> Counter1: {counter1}
        <button
        type='button'
        onClick={handleCounter1Up}
        >
            növel
        </button>
        <button
         type='button'
         onClick={handleCounter1Down}
        >
            csökkent
        </button>
        </p> 
        <p> Counter2: {counter2}
        <button
        type='button'
        onClick={handleCounter2Up}
        >
            növel
        </button>
        <button
         type='button'
         onClick={handleCounter2Down}
        >
            csökkent
        </button>
        </p>  
        <p> Counter3: {counter3}
        <button
        type='button'
        onClick={handleCounter3Up}
        >
            növel
        </button>
        <button
         type='button'
         onClick={handleCounter3Down}
        >
            csökkent
        </button>
        </p>    
    </div>
  )
}


function ButtonComponent({ handleCounterIncrease, handleCounterDecrease}){

  
  return(
      <div>
         <h4>Összes Gomb</h4> 
        <button
        className="all-btn"
          type="button"
          onClick={handleCounterIncrease}
        >
          Növel
        </button>

        <button
        className="all-btn"
          type="button"
          onClick={handleCounterDecrease}
        >
          Csökkent
        </button>
      </div>
)
}