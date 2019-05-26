import React from 'react';
import './ModalWindow.scss';
import {deleteHobbie} from "../../store/hobbies/actions";
import {connect} from "react-redux";
import {AppState} from "../../store";

interface ModalWindowProps {
	show: boolean;
	currId: string;
	deleteHobbie: typeof deleteHobbie;
}

class ModalWindow extends React.PureComponent<ModalWindowProps> {
	state = {
		isOpen: '',
	};

	onSubmit(){
		this.props.deleteHobbie(this.props.currId);
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	onCancel(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {

		if((this.props.show || !this.state.isOpen) && (!this.props.show || this.state.isOpen)) {
			return null;
		}

		return	<div className="user-modal-overlay">
							<div className="modal">
								<div className='modal-header'>Are u sure?</div>
								<div className='modal-button-wrapper'>
									<button className="modal-button" type="button" onClick={this.onSubmit.bind(this)}>Yes</button>
									<button className="modal-button" type="button" onClick={this.onCancel.bind(this)}>No</button>
								</div>
							</div>
						</div>
	}
}

const mapStateToProps = (state: AppState) => ({ });

export default connect(
	mapStateToProps,
	{ deleteHobbie })(ModalWindow);