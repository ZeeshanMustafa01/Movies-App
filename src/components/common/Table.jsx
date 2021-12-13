import React, { useContext } from 'react';
import UserContext from '../../utils/userContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import MovieSearch from '../MovieSearch';

function Table(props) {
	const { allMovies } = useContext(UserContext);

	return (
		<div>
			<h5>There are {allMovies.length} movies available in database.</h5>
			<MovieSearch />

			<table className='table'>
				<TableHeader />
				<TableBody />
			</table>
		</div>
	);
}

export default Table;
