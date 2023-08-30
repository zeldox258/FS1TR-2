import './App.css';
import React, {Component} from 'react';

class Person extends React.Component {

  constructor (props){
    super();

    this.state = { counter: props.startValue };
    this.props = props;

  }

  increaseCounter = () => {
    this.setState((state) => {
      return {counter: state.counter + 1};
    });
  }


  render(){
    //JS
    let name = this.props.name;
    let region = this.props.region;
    let age = this.props.age;

    //HTML
    return (
      <div className="App">
        <header className="App-header">
          <h1>Page {name}</h1>
          {
          
          name !== "Unnamed" ?
          <p>{name}</p>:
          <p>We Dont know the name</p>

          }
          
          {
             age > 18 ?
             <p>{age}</p>:
             <p>You are underage</p>
          }
          <p>Region {region}</p>
          <p>{this.state.counter}</p>

          <button onClick={this.increaseCounter}> Click Me </button>


        </header>
      </div>
    );


  }
 
}

Person.defaultProps = {
    startValue: 0,
    region: "Anatolia",
    name:"Unnamed",
    age:0
  };

export default Person;
