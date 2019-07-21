import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/cardList/cardList.component';
import { SearchBox } from './components/searchBox/SearchBox.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    // console.log(this.state);

    this.state = {
      monsters: [],
      searchFilter: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handlechange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
