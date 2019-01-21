import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Books from './components/Books';
import axios from 'axios';


class App extends Component {
  state = {
    books: [
  
    ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => this.setState({ books: res.data }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Books books={ this.state.books } />
      </div>
    );
  }
}

export default App;
