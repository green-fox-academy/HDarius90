import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style ={{
      backgroundColor : 'blue'
    }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="name">Név</label>
        <input type="text" id="name"></input>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
