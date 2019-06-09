import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let persons = null
    let btnClass = "";

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, idx) =>{
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(idx)}
                  name={person.name}
                  age={person.age}
                  changed={event =>
                    this.nameChangedHandler(event, person.id)
                  }
                />
              </ErrorBoundary>
            );
          } )}
        </div>
      );

      btnClass = classes.Red
    }

    let assignedClasses =[]
    if (this.state.persons.length <=2){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red','bold']
    }
    
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

