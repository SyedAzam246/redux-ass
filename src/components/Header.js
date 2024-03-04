import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Header = () => {
  return (
    <header>
      <nav className='nav-container'>
        <Link to="/user">My Posts</Link>
        <Link to="/">All Posts</Link>
      </nav>
    </header>
  );
};

export default Header;