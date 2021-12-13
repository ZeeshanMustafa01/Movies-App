import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';

function NavbarItems(props) {
	const user = useContext(LoginContext);

	const navItems = [
		{ path: '/movies', label: 'Movies' },
		{ path: '/price', label: 'Pricing' },
	];

	const navLogin = [
		{ path: '/movie/new', label: 'Add Movie' },
		{ path: '/profile', label: user && user.name },
		{ path: '/logout', label: 'Logout' },
	];

	const navLogout = [
		{ path: '/login', label: 'Log-in' },
		{ path: '/register', label: 'Register' },
	];

	// Handle Nav Items
	user ? navItems.push(...navLogin) : navItems.push(...navLogout);

	return (
		<ul className='navbar-nav me-auto'>
			{navItems.map((item, i) => (
				<li key={i} className='nav-item'>
					<NavLink to={item.path} className='nav-link'>
						{item.label}
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export default NavbarItems;
