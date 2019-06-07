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
    const targetIndex = this.state.persons.findIndex(el =>{
        return el.id === id
      })

      const person = {...this.state.persons[targetIndex]}
      person.name = event.target.value

      const persons = [...this.state.persons];
      persons[targetIndex] = person

      this.setState({
        persons
      });
    
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
      backgroundColor: "green",
      color: '#fff',
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
      style.backgroundColor = 'red'
    }

    let classes =[]
    if (this.state.persons.length <=2){
      classes.push('red')
    }
    if(this.state.persons.length <= 1){
      classes.push('bold')
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
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

