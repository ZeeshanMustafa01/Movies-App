import React, { Fragment } from 'react';
import MoviesPages from './common/MoviesPages';

import Table from './common/Table';

function MoviesTable(props) {
	return (
		<Fragment>
			<Table />
			<MoviesPages />
		</Fragment>
	);
}

export default MoviesTable;
