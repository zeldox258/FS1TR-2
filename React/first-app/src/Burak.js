import './App.css';
import React, {Component} from 'react';

class Burak extends React.Component {

  constructor (props){
    super(props);
    this.state = { counter: 0 };

  }

  increaseCounter = () => {
    this.setState((state) => {
      return {counter: state.counter + 1};
    });
  }


  render(){
    //JS
    let name = "Burak";

    //HTML
    return (
      <div className="App">
        <header className="App-header">
          <h1>Page Burak</h1>
          <p>{name}</p>
          <p>{this.state.counter}</p>

          <button onClick={this.increaseCounter}> Click Me </button>


        </header>
      </div>
    );


  }
 
}

export default Burak;
