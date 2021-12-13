import React, { useContext } from 'react';
import { FaSortUp } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';
import UserContext from '../../utils/userContext';

function TableHeader(props) {
	const { handleSort, sortColumn } = useContext(UserContext);

	const columns = [
		{ path: 'title', label: 'Title' },
		{ path: 'genre.name', label: 'Genre' },
		{ path: 'numberInStock', label: 'Stock' },
		{ path: 'dailyRentalRate', label: 'Rate' },
	];

	const raiseSort = (path) => {
		const sortColum = sortColumn;
		if (sortColum.path === path) {
			sortColum.order = sortColum.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortColum.path = path;
			sortColum.order = 'asc';
		}
		handleSort(sortColum);
	};

	const renderSortIcon = (path) => {
		if (sortColumn.path !== path) return null;
		return sortColumn.order === 'asc' ? <FaSortUp /> : <FaSortDown />;
	};

	return (
		<thead>
			<tr>
				{columns.map((col) => (
					<th
						key={col.path}
						onClick={() => raiseSort(col.path)}
						className='title'>
						{col.label} {renderSortIcon(col.path)}
					</th>
				))}
			</tr>
		</thead>
	);
}

export default TableHeader;
