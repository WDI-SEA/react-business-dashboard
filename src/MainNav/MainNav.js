import React, { Component } from 'react';
import './MainNav.css';

class MainNav extends Component {
  render() {
    return (
      <div className="MainNav">
        <p className="MainNav-brand">
          <i className="fa fa-pied-piper" aria-hidden="true"></i>
          <a href="/">DataMiner Inc.</a>
        </p>
        <p className="MainNav-description">Admin Dashboard</p>
      </div>
    );
  }
}

export default MainNav;
