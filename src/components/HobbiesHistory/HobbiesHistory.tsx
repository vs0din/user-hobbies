import React, {Fragment} from 'react';
import uuid from "uuid";
import {Hobbie} from "../../store/hobbies/types";
import './HobbiesHistory.scss'
import ModalWindow from "../ModalWindow/ModalWindow";

interface HobbieHistoryProps {
	hobbies: Hobbie[];
	sendCurrHobbieId: string;
}

export type UpdateCurrPostId = React.MouseEvent<any>;


class UserHistory extends React.PureComponent<HobbieHistoryProps> {
	state = {
		isOpen: false,
		currHobbieId: ''
	};

	toggleModal(e: UpdateCurrPostId){
		this.setState({
			isOpen: !this.state.isOpen,
			currHobbieId: e.currentTarget.id
		});
	}


	render() {
		return (
			<div className='hobbies-history'>
				{this.props.hobbies.map(hobbie => (hobbie.userKey === this.props.sendCurrHobbieId ?
						hobbie.hobbie.map(e => (
							<div className='table' key={uuid.v4()}>
								{Object.values(e).map((ev) => <Fragment key={uuid.v4()}>
									<div className='hobbies-history-table' key={uuid.v4()}>{ev}</div>
								</Fragment>)}
								<button onClick={this.toggleModal.bind(this)} id={hobbie.key} key={uuid.v4()}>Delete</button>
							</div>)) : null
				))}
				<ModalWindow
					show={this.state.isOpen}
					currId={this.state.currHobbieId}
				/>
			</div>
		);
	};
}

export default UserHistory;
