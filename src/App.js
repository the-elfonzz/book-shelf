import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Book from './components/Book';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Book />
      </div>
    );
  }
}

export default App;
