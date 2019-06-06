import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'abq', name: "Dave", age: 45 },
      { id:'sdgf', name: "Quang", age: 27 },
      { id:'asf', name: "Robert", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) =>{
    let targetIndex = this.state.persons.findIndex(el =>{
        return el.id === id
      })

      let person = {...this.state.persons[targetIndex]}
      person.name = event.target.value
console.log("event", event.target, "id", id, "person", person)
      this.setState({
        
      })
    
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons})
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style ={
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, idx) =>{
            return <Person 
            click={() => this.deletePersonHandler(idx)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)} />
          } )}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

          // <Person
          //   name={this.state.persons[0].name}
          //   age={this.state.persons[0].age}
          // />
          // <Person
          //   name={this.state.persons[1].name}
          //   age={this.state.persons[1].age}
          //   click={this.switchNameHandler.bind(this, "George")}
          //   changed={this.nameChangedHandler}
          // >
          //   My Hobbies: Racing
          // </Person>
          // <Person
          //   name={this.state.persons[2].name}
          //   age={this.state.persons[2].age}
          // />
