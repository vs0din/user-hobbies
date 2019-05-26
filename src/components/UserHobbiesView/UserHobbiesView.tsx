import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store";
import "./UserHobbiesView.scss";
import { UsersState } from "../../store/users/types";
import { sendUser } from "../../store/users/actions";
import { sendHobbie } from "../../store/hobbies/actions";
import UserHistory from "../../components/UserHistory";
import UserInterface from "../../components/UserInterface";
import { thunkSendUser, thunkSendHobbie } from "../../thunks";
import HobbiesInterface from "../../components/HobbiesInterface";
import HobbiesHistory from "../../components/HobbiesHistory";
import uuid from "uuid";
import {HobbieState} from "../../store/hobbies/types";

interface UserHobbiesViewProps {
	sendUser: typeof sendUser;
	sendHobbie: typeof sendHobbie;
	hobbies: HobbieState;
	user: UsersState;
	thunkSendUser: any;
	thunkSendHobbie: any;
}

export type UpdateCurrUserKey = React.MouseEvent<any>;
export type UpdateHobbieParam = React.SyntheticEvent<{ value: string }>;
export type UpdateUserParam = React.SyntheticEvent<{ value: string }>;

class App extends React.PureComponent<UserHobbiesViewProps> {
	state = {
		userName: '',
		hobbieName: '',
		passion: '',
		sinceTime: '',
		currentUserKey: '',
		currentHobbieKey: '',
		isOpen: false
	};

	componentDidMount() {
		this.props.sendUser({
			key: uuid.v4(),
			user: "Stab From React in componentDidMount",
		});
		this.props.thunkSendHobbie('Hobbies from a thunk');
		this.props.thunkSendUser("This User has come from thunk!");
	}

	updateUser = (event: UpdateUserParam) => {
		this.setState({ userName: event.currentTarget.value });
	};

	changeCurrUser = (event: UpdateCurrUserKey) => {
		this.setState({ currentUserKey: event.currentTarget.id});
	};

	updateHobbiePassion = (event: UpdateHobbieParam) => {
		this.setState({ passion: event.currentTarget.value });
	};

	updateHobbieName = (event: UpdateHobbieParam) => {
		this.setState({ hobbieName: event.currentTarget.value });
	};

	updateHobbieDate = (event: UpdateHobbieParam) => {
		this.setState({ sinceTime: event.currentTarget.value });
	};

	sendUser = (user: string) => {
		this.props.sendUser({
			key: uuid.v4(),
			user: user,
		});
		this.setState({ userName: '' });
	};

	sendHobbie = (hobbie: any) => {
		this.props.sendHobbie({
			userKey: this.state.currentUserKey,
			key: uuid.v4(),
			hobbie: hobbie
		});
		this.setState({ hobbieName: '' });
	};

	render() {

		return (
			<div className="parent">
				<div className='user-wrapper'>
					<UserInterface
						userName={this.state.userName}
						updateUser={this.updateUser}
						sendUser={this.sendUser}
					/>
					<UserHistory
						users={this.props.user.users}
						changeCurrUser={this.changeCurrUser}
						currentUserKey={this.state.currentUserKey}
					/>
				</div>

				{this.state.currentUserKey ?
				<div className='hobbies-wrapper'>
					<HobbiesInterface
						hobbieName={this.state.hobbieName}
						passion={this.state.passion}
						sinceTime={this.state.sinceTime}
						updateHobbiePassion={this.updateHobbiePassion}
						updateHobbieName={this.updateHobbieName}
						updateHobbieDate={this.updateHobbieDate}
						sendHobbie={this.sendHobbie}
					/>
					<HobbiesHistory
						hobbies={this.props.hobbies.hobbies}
						sendCurrHobbieId={this.state.currentUserKey}
					/>
				</div> : null}
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	user: state.user,
	hobbies: state.hobbie
});

export default connect(
	mapStateToProps,
	{ sendUser, sendHobbie, thunkSendUser, thunkSendHobbie }
)(App);
