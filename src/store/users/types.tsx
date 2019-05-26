export interface User {
	user: string;
	key: string;
}

export interface UsersState {
	users: User[];
}

export const SEND_USER = 'SEND_USER';
export const DELETE_USER = 'DELETE_USER';

interface SendUserAction {
	type: typeof SEND_USER;
	payload: User;
}


interface DeleteUserAction {
	type: typeof DELETE_USER;
	meta: {
		key: string;
	};
}

export type ChatActionTypes = SendUserAction | DeleteUserAction;
