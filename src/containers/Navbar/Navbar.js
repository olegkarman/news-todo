import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navigation-wrapper'>
                <NavLink to='/todos' activeClassName='route-link-active'>TODO List</NavLink>
                <NavLink to='/' activeClassName='route-link-active' exact={true}>Home</NavLink>
                <NavLink to='/search-news' activeClassName='route-link-active'>Search News</NavLink>
            </div>
        )
    }
};

export default Navbar;
