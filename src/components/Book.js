import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Book extends Component {

  render() {
    const { id, title, body } = this.props.books;
    return (
      <div key={ id }>
        <h1>{title}</h1>
        <p>{ body }</p>
      </div>
    );
  }
}


//PropTypes
Book.propTypes = {
    book: PropTypes.object.isRequired
}


export default Book;
