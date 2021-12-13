import React from 'react';
import { TiInfoOutline } from 'react-icons/ti';

function NotFound(props) {
	return (
		<div style={{ marginTop: '2rem' }} className='info'>
			<TiInfoOutline /> &nbsp; Your Page not Found!
		</div>
	);
}

export default NotFound;
