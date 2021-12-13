import React, { useEffect, useState } from 'react';
import UserContext from '../utils/userContext';
import { PAGE_SIZE } from '../utils/config';
import { getMovies, deleteMovie } from '../services/moviesServices';
import { getGenres } from '../services/genreServices';
import MoviesTable from './MoviesTable';
import MoviesList from './common/MoviesList';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import { toast } from 'react-toastify';

function Movies(props) {
	const [allMovies, setAllMovies] = useState([]);
	const [allGenres, setallGenres] = useState([]);
	const [currentPage, setcurrentPage] = useState(1);
	const [selectedGenre, setselectedGenre] = useState('');
	const [query, setquery] = useState('');
	const [sortColumn, setsortColumn] = useState({
		path: 'title',
		order: 'asc',
	});

	const handlePageChange = (page) => {
		setcurrentPage(page);
	};

	const handleLike = (mov) => {
		const movies = [...allMovies];
		const m = movies.find((m) => m === mov);
		m.liked = !m.liked;
		setAllMovies([...movies]);
	};

	const handleDelete = async (id) => {
		const origionalMovies = allMovies;
		const movie = allMovies.filter((m) => m._id !== id);
		setAllMovies(movie);

		try {
			await deleteMovie(id);
		} catch (err) {
			if (err.response && err.response.status === 404) {
				toast.error('This movie is laready deleted');
			}
			setAllMovies(origionalMovies);
		}
	};

	const handlePrev = () => {
		setcurrentPage(currentPage - 1);
	};

	const handleNext = () => {
		setcurrentPage(currentPage + 1);
	};

	const handleGenre = (genre) => {
		setselectedGenre(genre);
		setcurrentPage(1);
	};

	const handleSort = (sortColum) => {
		setsortColumn({ ...sortColum });
	};

	const handleSearch = (input) => {
		setquery(input);
		setselectedGenre('');
		setcurrentPage(1);
	};

	useEffect(() => {
		(async () => {
			const { data: movies } = await getMovies();
			setAllMovies(movies);

			const { data: genres } = await getGenres();
			setallGenres([{ _id: '', name: 'Movies' }, ...genres]);
		})();
	}, []);

	let filterMovies = allMovies;

	if (query)
		filterMovies = allMovies.filter((movies) =>
			movies.title.toLowerCase().startsWith(query.toLowerCase())
		);
	else if (selectedGenre && selectedGenre._id)
		filterMovies = allMovies.filter(
			(movie) => movie.genre.name === selectedGenre.name
		);

	const sortMovies = _.orderBy(
		filterMovies,
		[sortColumn.path],
		[sortColumn.order]
	);
	const movies = paginate(sortMovies, currentPage, PAGE_SIZE);

	return (
		<UserContext.Provider
			value={{
				movies,
				allMovies,
				allGenres,
				currentPage,
				selectedGenre,
				sortColumn,
				filterMovies,
				handlePageChange,
				handleLike,
				handleDelete,
				handlePrev,
				handleNext,
				handleGenre,
				handleSort,
				handleSearch,
			}}>
			<div className='moviesContainer'>
				<MoviesList />
				<MoviesTable />
			</div>
		</UserContext.Provider>
	);
}
export default Movies;
