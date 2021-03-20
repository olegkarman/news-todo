import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navigation-wrapper">
                <Link to="/todos">TODO list</Link>
                <Link to="/">Home</Link>
                <Link to="/search-news">Search news</Link>
            </div>
        )
    }
};

export default Navbar;
