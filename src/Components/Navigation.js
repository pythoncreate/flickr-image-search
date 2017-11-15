import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
	   <nav className="main-nav">
           <ul>
          <li><NavLink to='/clouds'>Clouds</NavLink></li>
          <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
          <li><NavLink to='/flowers'>Flowers</NavLink></li>
        </ul>
      </nav>
      );
	}

export default Navigation;
