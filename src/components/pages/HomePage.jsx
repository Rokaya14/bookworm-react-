import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class HomePage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Link to="/login"  >Login</Link>
      </div>
    );
  }
}

export default HomePage;