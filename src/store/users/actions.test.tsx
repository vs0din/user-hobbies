import * as actions from './actions'
import * as types from './types'


describe('actions', () => {
	it('should create an action to add a user', () => {
		const newUser = {
			key: 'asdas21-123456-dfhjniuasgy876',
			user: "User",
		};

		const expectedAction = {
			type: types.SEND_USER,
			payload: newUser
		};
		expect(actions.sendUser(newUser)).toEqual(expectedAction)
	})
});