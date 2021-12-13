import React, { useContext } from 'react';
import UserContext from '../utils/userContext';

function MovieSearch(props) {
	const { handleSearch } = useContext(UserContext);

	const handleChange = ({ target }) => {
		handleSearch(target.value);
	};

	return (
		<div className='input-group mb-3'>
			<span className='input-group-text' id='inputGroup-sizing-default'>
				Movies
			</span>
			<input
				type='text'
				placeholder='Search Movie . . .'
				className='form-control'
				onChange={handleChange}
			/>
		</div>
	);
}

export default MovieSearch;
