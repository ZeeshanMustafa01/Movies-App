import React, { useContext } from 'react';
import UserContext from '../../utils/userContext';
import { pageCalc } from '../../utils/paginate';
import { PAGE_SIZE } from '../../utils/config';

function MoviesPages(props) {
	const {
		filterMovies,
		currentPage,
		handleNext,
		handlePrev,
		handlePageChange,
		allMovies,
	} = useContext(UserContext);

	const handleClasses = (page) => {
		return currentPage === page
			? 'btn btn-outline-secondary active'
			: 'btn btn-outline-secondary ';
	};

	const totalPages = pageCalc(filterMovies, PAGE_SIZE);
	return (
		totalPages && (
			<div className='btn-group pages'>
				<button
					disabled={currentPage === 1}
					onClick={() => handlePrev()}
					className='btn btn-outline-secondary '>
					prev
				</button>

				{totalPages &&
					totalPages.map((page) => (
						<button
							onClick={() => handlePageChange(page)}
							key={page}
							type='button'
							className={handleClasses(page)}>
							{page}
						</button>
					))}

				<button
					disabled={currentPage === Math.ceil(allMovies.length / PAGE_SIZE)}
					onClick={() => handleNext()}
					className='btn btn-outline-secondary'>
					Next
				</button>
			</div>
		)
	);
}

export default MoviesPages;
