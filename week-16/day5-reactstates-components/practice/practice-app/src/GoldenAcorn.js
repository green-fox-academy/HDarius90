
import './App.css';
import { useEffect, useState} from 'react';

export default function App() {
  return (
    <div className="container">
      <SimpleGoldenAcornApp/>
    </div>
  );
}

function SimpleGoldenAcornApp() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(++count);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(--count);
    }
  }

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === 'ArrowDown') { 
        handleDecrement();
      }
      if ((e.key === 'ArrowUp')){ 
        handleIncrement();
      }
    }

    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  });

  return (
    <div className="form-item-count">
      <button className='button' type="button" onClick={() => handleIncrement()}>
        Vegyél egyet!
      </button>
      <span className='number' >{count}</span>
      <button className='button' type="button" onClick={() => handleDecrement()}>
        Egyél egyet!
      </button>
    </div>
  );
}




