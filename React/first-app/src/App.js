import './App.css';
import React, {Component} from 'react';

import Burak from './Burak';
import Person from './Person';

class App extends React.Component {

  constructor (props){
    super(props);
    this.state = { counter: 0 };

  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
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
          <h1>My First React App</h1>
          <p>{name}</p>
          <p>{this.state.counter}</p>

          <button onClick={this.increaseCounter}> Click Me </button>

          <Person name="Taha"  startValue={5} region = "East Anatolia" age = {22} />
          <Person name="Burak" startValue={15} region = "west" age = {23} />
          <Person />




        </header>
      </div>
    );


  }
 
}

export default App;
