import {User, SEND_USER, DELETE_USER } from './types';

export function sendUser(newUser: User) {
	return {
		type: SEND_USER,
		payload: newUser
	};
}

export function deleteUser(key: string) {
	return {
		type: DELETE_USER,
		meta: {
			key
		}
	}
}