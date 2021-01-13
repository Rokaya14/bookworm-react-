import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div>
        <h1>Home </h1>
        
        <Link to="/login"  >Login</Link>
      </div>
    );
  }
}

export default HomePage;