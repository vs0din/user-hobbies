import {Hobbie, SEND_HOBBIE, DELETE_HOBBIE} from './types';

export function sendHobbie(newHobbie: Hobbie) {
	return {
		type: SEND_HOBBIE,
		payload: newHobbie
	};
}

export function deleteHobbie(key: string) {
	return {
		type: DELETE_HOBBIE,
		meta: {
			key
		}
	};
}
