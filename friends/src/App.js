import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friends-list';

class App extends Component {
  render() {
    return (
      <div className="App" style={{margin: '50px'}}>
        <FriendsList />
      </div>
    );
  }
}

export default App;
