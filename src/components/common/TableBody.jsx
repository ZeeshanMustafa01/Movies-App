import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/userContext';
import LoginContext from '../../utils/LoginContext';

import Delete from './Delete';
import Like from './Like';

function TableBody(props) {
	const { movies } = useContext(UserContext);
	const user = useContext(LoginContext);
	return (
		<tbody>
			{movies.map((mov) => (
				<tr key={mov._id}>
					<td>
						<Link className='movie_title' to={`/movie/${mov._id}`}>
							{mov.title}
						</Link>
					</td>
					<td>{mov.genre.name}</td>
					<td>{mov.numberInStock}</td>
					<td>{mov.dailyRentalRate}</td>
					<td>
						<Like mov={mov} />
					</td>
					{user && user.isAdmin === true && (
						<td>
							<Delete mov={mov} />
						</td>
					)}
				</tr>
			))}
		</tbody>
	);
}

export default TableBody;
