import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log(this.state)
    this.state = {
      string: 'Hello Doug'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Refreseher</h1>
          <p>
            {this.state.string}
          </p>
          <button onClick = {() => this.setState({string: "What's UPPPP!!!"})} >Change Text</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}


export default App;
