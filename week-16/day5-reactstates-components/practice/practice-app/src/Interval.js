import React, { useState } from 'react';
import {useEffect} from 'react';

export default function IntervalApp() {
    const [seconds, setSeconds] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);
  
    function handleButton() {
      setButtonClicked(!buttonClicked);
    }
  
    useEffect(() => {
      let timer = null;
      if (!buttonClicked) {
        timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
      } else if (buttonClicked) {
        timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 500);
      }
      // clearing interval
      return () => clearInterval(timer);
    }, [buttonClicked, seconds]);
  
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button type="button" onClick={handleButton}>Click me</button>
            <Interval time={seconds} setTime={setSeconds} />
          </div>
        </header>
      </div>
    );
  }


  function Interval({time}){
    return(
       <p>{time}</p>
    )
}

