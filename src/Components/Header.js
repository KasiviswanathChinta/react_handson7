import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
        <ul type='none' className='flex'>
        <li><NavLink to='/' className='line' style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Home</NavLink></li>
            <li><NavLink to ='/student' className='line' style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Student</NavLink></li>
            <li><NavLink to="/contactus" className='line' style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "white",
    };
  }}>Contact US</NavLink></li>
        </ul>
    </div>
  )
}

export default Header;