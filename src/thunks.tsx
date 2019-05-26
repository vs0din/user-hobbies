import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { sendUser } from './store/users/actions';
import { AppState } from './store';
import uuid from "uuid";
import {sendHobbie} from "./store/hobbies/actions";

const key = uuid.v4();

export const thunkSendUser = (
	user: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
	const asyncResp = await exampleAPI();
	dispatch(
		sendUser({
			key: key,
			user: asyncResp,
		})
	);
};

export const thunkSendHobbie = (
	hobbie: []
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
	const asyncResp = await secondExampleAPI();
	dispatch(
		sendHobbie({
			key: uuid.v4(),
			userKey: key,
			hobbie: asyncResp,
		})
	);
};

function exampleAPI() {
	return Promise.resolve('This User has come from thunk!');
}

function secondExampleAPI() {
	return Promise.resolve([{ passion: 'Low', hobbieName: 'Basketball', sinceTime:'2016' }]);
}
