import React , {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerviedStateFromProps')
    //     return state
    // }

    // shouldComponentUpdate(nextProps, NextState){
    //     console.log('[Persons.js] shouldComponentUpdate')
    //   if (nextProps.persons !== this.props.persons || 
    //       nextProps.changed !== this.props.changed || 
    //       nextProps.clicked !== this.props.clicked) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[persons.js] getSnapshotBeforeUpdate')
        return {message: "snapshot!"}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[perons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount(){
      console.log('[Persons.js] componentWillUnmount')
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