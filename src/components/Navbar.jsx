import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItems from './common/NavbarItems';

function Navbar(props) {
	return (
		<nav className='navbar  navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Movies Library
				</Link>
				<NavbarItems />
			</div>
		</nav>
	);
}

export default Navbar;
