import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id:'abq', name: "Dave", age: 45 },
      { id:'sdgf', name: "Quang", age: 27 },
      { id:'asf', name: "Robert", age: 29 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps,NextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

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
    console.log('[App.js] render' )
    let persons = null

    if(this.state.showPersons){
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
    }


    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        clicked = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

