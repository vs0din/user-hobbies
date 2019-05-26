export interface Hobbie {
	hobbie: object[];
	key: string;
	userKey: string;
}

export interface HobbieState {
	hobbies: Hobbie[];
}

export const SEND_HOBBIE = 'SEND_HOBBIE';
export const DELETE_HOBBIE = 'DELETE_HOBBIE';

interface SendHobbieAction {
	type: typeof SEND_HOBBIE;
	payload: Hobbie;
}

interface DeleteHobbieAction {
	type: typeof DELETE_HOBBIE;
	meta: {
		key: string;
	};
}

export type ChatActionTypes = SendHobbieAction | DeleteHobbieAction;
