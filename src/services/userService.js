import { http } from './httpService';
import { API_END_POINT } from '../utils/config';

const apiEndpoint = API_END_POINT + '/users';

export async function register(user) {
	return http.post(apiEndpoint, {
		email: user.username,
		password: user.password,
		name: user.name,
	});
}
