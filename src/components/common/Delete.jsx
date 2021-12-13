import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import UserContext from '../../utils/userContext';

function Delete({ mov }) {
	const { handleDelete } = useContext(UserContext);

	return (
		<button
			onClick={() => handleDelete(mov._id)}
			type='button'
			className='btn btn-danger'>
			<MdDelete />
		</button>
	);
}

export default Delete;
