import React, { useEffect } from 'react';
import { logout } from '../services/authService';

function Logout(props) {
	useEffect(() => {
		logout();
		window.location = '/';
	}, []);
	return <div></div>;
}

export default Logout;
