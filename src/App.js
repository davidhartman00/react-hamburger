import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "David", age: 45 },
      { name: "Quang", age: 27 },
      { name: "Robert", age: 29 }
    ]
  };

  switchNameHandler = ()=>{
    // console.log("Was clicked")
    this.setState({
      persons: [
        { name: "David", age: 35 },
        { name: "Quang", age: 27 },
        { name: "Robert", age: 30 }
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hi I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >Hobbies: Coding</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
