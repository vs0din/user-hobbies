import {
	UsersState,
	SEND_USER,
	DELETE_USER,
	ChatActionTypes
} from './types';

const initialState: UsersState = {
	users: []
};

export function userReducer(
	state = initialState,
	action: ChatActionTypes
): UsersState {
	switch (action.type) {
		case SEND_USER:
			return {
				users: [...state.users, action.payload]
			};
		case DELETE_USER:
			return {
				users: state.users.filter(
					e => e.key !== action.meta.key
				)
			};
		default:
			return state;
	}
}
