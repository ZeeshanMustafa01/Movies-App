import { http } from './httpService';
import { API_END_POINT } from '../utils/config';
import jwtDecode from 'jwt-decode';

const apiEndpoint = API_END_POINT + '/auth';
const tokenKey = 'token';

export async function login(email, password) {
	const { data: jwt } = await http.post(apiEndpoint, { email, password });
	localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
	localStorage.setItem(tokenKey, jwt);
}

export function logout() {
	localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem(tokenKey);
		return jwtDecode(jwt);
	} catch (error) {
		return null;
	}
}

export function getJwt() {
	return localStorage.getItem(tokenKey);
}

http.setJwt(getJwt());
