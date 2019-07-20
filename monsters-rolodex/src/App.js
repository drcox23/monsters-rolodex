import React, { Component } from 'react';
// import logo from './logo.svg';
import {CardList} from './components/cardList/cardList.component'

import './App.css';

class App extends Component {
  constructor(){
    super();
      console.log(this.state)

      this.state = {
        monsters: []
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />        
        
      </div>
    );
  }

}


export default App;
