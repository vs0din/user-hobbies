import {
	HobbieState,
	SEND_HOBBIE,
	DELETE_HOBBIE,
	ChatActionTypes
} from './types';

const initialState: HobbieState = {
	hobbies: []
};

export function hobbieReducer(
	state = initialState,
	action: ChatActionTypes
): HobbieState {
	switch (action.type) {
		case SEND_HOBBIE:
			return {
				hobbies: [...state.hobbies, action.payload]
			};
		case DELETE_HOBBIE:
			return {
				hobbies: state.hobbies.filter(
					e => e.key !== action.meta.key
				)
			};
		default:
			return state;
	}
}
