import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Doug', lastName: 'Cox'},
      company: 'ZTM'
    };
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi {this.state.name.firstName} and I work at {this.state.company} </p>
          <button onClick={()=> {
            this.state.name =({name: {firstName: 'Candace'}});
            console.log(this.state);
          }}> Change Name </button>
         
        </header>
      </div>
    );

  }
  
}

export default App;
