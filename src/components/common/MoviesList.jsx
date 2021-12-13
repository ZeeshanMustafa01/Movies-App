import React, { useContext } from 'react';
import UserContext from '../../utils/userContext';

function MoviesList(props) {
	const { selectedGenre, handleGenre, allGenres } = useContext(UserContext);

	return (
		<div>
			<ul className='list-group'>
				{allGenres.map((genre, i) => (
					<li
						onClick={() => handleGenre(genre)}
						key={i}
						className={
							selectedGenre === genre
								? 'list-group-item active'
								: 'list-group-item'
						}>
						{genre.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default MoviesList;
