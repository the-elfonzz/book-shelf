import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class Books extends Component {
   render() {
    return this.props.books
    .map((book) => (
        <Book key={book.id} book={book} />
    ));
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired
}


export default Books;
