import React , {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerviedStateFromProps')
    //     return state
    // }

    shouldComponentUpdate(nexProps, NextState){
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[persons.js] getSnapshotBeforeUpdate')
        return {message: "snapshot!"}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[perons.js] componentDidUpdate')
        console.log(snapshot)
    }
    render(){
        console.log('[Persons.js] render')
      return this.props.persons.map((person, idx) => {
        return (
          <Person
            click={() => this.props.clicked(idx)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.props.changed(event, person.id)}
          />
        );
      });

    } 
}   
 
export default Persons