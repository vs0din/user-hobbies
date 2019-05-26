import React from 'react';
import { UpdateUserParam } from '../UserHobbiesView/UserHobbiesView';
import './UserInterface.scss'

interface UserInterfaceProps {
	userName: string;
	sendUser: (user: string) => void;
	updateUser: (event: UpdateUserParam) => void;
}

const UserInterface: React.SFC<UserInterfaceProps> = ({
																												userName,
																												updateUser,
																												sendUser
																											}) => {
	function keyPress(e: React.KeyboardEvent<any>) {
		if (e.key === 'Enter') {
			send();
		}
	}

	function send() {
		if (userName) {
			sendUser(userName);
		}
	}

	return (
		<div className='user-interface'>
			<input
				value={userName}
				onChange={updateUser}
				onKeyPress={keyPress}
				className='user-input'
				placeholder='Type a username...'
			/>
			<button onClick={send}>Send</button>
		</div>
	);
};

export default UserInterface;
