import React, {Fragment} from 'react';
import { User } from '../../store/users/types';
import { UpdateCurrUserKey } from '../UserHobbiesView/UserHobbiesView';
import './UserHistory.scss'
import uuid from "uuid";

interface UserHistoryProps {
	users: User[];
	changeCurrUser: (event: UpdateCurrUserKey) => void,
	currentUserKey: string
}

const UserHistory: React.SFC<UserHistoryProps> = ({ users, changeCurrUser, currentUserKey }) => {

	return (
		<div className='user-history'>
			{users.map((user) => (<Fragment key={uuid.v4()}>
				{currentUserKey !== user.key ?
					<div className='user-item' key={user.key} id={user.key} onClick={changeCurrUser}>
						<div id={user.key}>{user.user}</div>
					</div> :
					<div className='user-item-checked' key={user.key} id={user.key} onClick={changeCurrUser}>
						<div id={user.key}>{user.user}</div>
					</div>}
				</Fragment>
			))}
		</div>
	);
};

export default UserHistory;
