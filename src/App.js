import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <Person name="David" age="45" />
        <Person name="Quang" age="27" >Hobbies are: Coding</Person>
        <Person name="Robert" age="29" />
      </div>
    );
  }
}

export default App;
