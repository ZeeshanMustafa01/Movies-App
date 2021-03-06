import { http } from './httpService';
import { API_END_POINT } from '../utils/config';

const apiEndPoint = API_END_POINT + '/movies';

export const movieUrl = (id) => {
	return `${apiEndPoint}/${id}`;
};

export const getMovies = () => {
	return http.get(apiEndPoint);
};

export const getMovie = (movieId) => {
	return http.get(movieUrl(movieId));
};

export const saveMovie = (movie) => {
	if (movie._id) {
		const body = { ...movie };
		delete body._id;
		return http.put(movieUrl(movie._id), body);
	}
	return http.post(apiEndPoint, movie);
};

export const deleteMovie = (movieId) => {
	return http.delete(movieUrl(movieId));
};
