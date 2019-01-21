import React from 'react';
import logo from '../../logo.svg';
 

function Header() {
  return (
    <header style={headerStyle}>
      <img src={logo} style={logoStyle}
      className="App-logo" alt="logo" />
      <h1>Book Shelf</h1>
    </header>
  )
}

const headerStyle = {
    background: '#333',
    hight: '20vh',
    textAlign: 'center',
    padding: '15px'
}

const logoStyle = {
  float: 'left'
}


export default Header;