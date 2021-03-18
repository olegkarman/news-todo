import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <Link to="/">Home</Link>
        <Link to="/search-news">Search news</Link>
        <Link to="/todos">TODO list</Link>
      </div>
    )
  }
}

export default Navbar;
