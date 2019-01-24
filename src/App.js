import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
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

 filterTitle = (items) => {
    console.log(items)
      this.setState({ books: [...this.state.books.filter(
        book => items.includes(book.title))]
       });
  }

  render() {
    return (  
      <div className="App">
        <Header />
        <Sidebar 
        books={this.state.books}
        filterTitle={this.filterTitle.bind(this)}
        title={this.value}
        result={this.result}
        />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
