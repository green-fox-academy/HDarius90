import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import React, {Component} from 'react';

class App extends Component {

  state = {
    persons: [
      {name: 'hübele balázs', age: 16},
      {name: 'gipsz jakab', age: 40},
      {name: 'kocka karesz', age: 20}
     ]
  }

  nameChangeHander = () =>{
    //NE HASZNÁLD!! this.state.persons[0].name = 'toth sándor';
    this.setState({
      persons: [
        {name: 'hübele balázs', age: 16},
        {name: 'gipsz jakab', age: 34},
        {name: 'kocka károly', age: 20}
       ]
    }
    )
  }

  
  render(){
    
    return (
    <div className="App">
      <h1>Sziasztok!</h1>
      <p>bekezdés</p>
      <button onClick={this.nameChangeHander}>Nevet módosít</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Hobbim az informatika</Person>
    </div>
  );
  
 // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sziasztok'))
  }
  
}

export default App;
