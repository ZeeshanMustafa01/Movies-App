import { http } from './httpService';
import { API_END_POINT } from '../utils/config';

export const getGenres = () => {
	return http.get(API_END_POINT + '/genres');
};
