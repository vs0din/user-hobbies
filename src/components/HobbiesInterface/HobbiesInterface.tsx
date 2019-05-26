import React from 'react';
import {UpdateHobbieParam} from '../UserHobbiesView/UserHobbiesView';
import './HobbiesInterface.scss'

interface UserInterfaceProps {
	passion: string,
	hobbieName: string,
	sinceTime: string,
	sendHobbie: (hobbie: Array<object>) => void;
	updateHobbiePassion: (event: UpdateHobbieParam) => void;
	updateHobbieName: (event: UpdateHobbieParam) => void;
	updateHobbieDate: (event: UpdateHobbieParam) => void;
}

const HobbiesInterface: React.SFC<UserInterfaceProps> = ({
																													 updateHobbiePassion,
																													 updateHobbieName,
																													 updateHobbieDate,
																													 sinceTime,
																													 hobbieName,
																													 passion,
																													 sendHobbie
																												 }) => {
	function arr() {
		let arr = [];
		let date = new Date().getFullYear();
		for (let i = date; i > date - 100; i--) {
			arr.push(<option value={i} key={i}>{i}</option>);
		}
		return arr
	}

	function send() {
		if (passion && hobbieName && sinceTime ) {
			sendHobbie([{passion, hobbieName, sinceTime}]);
		}
	}

	const optionArr = arr();

		return (
			<div className='hobbies-interface'>
				<select onChange={updateHobbiePassion} defaultValue='Passion'>
					<option disabled value='Passion'>Passion</option>
					<option value={'Low'}>Low</option>
					<option value={'Medium'}>Medium</option>
					<option value={'High'}>High</option>
					<option value={'Very-High'}>Very-High</option>
				</select>
				<input
					value={hobbieName}
					onChange={updateHobbieName}
					placeholder='Type a hobby...'
				/>
				<select onChange={updateHobbieDate} defaultValue='Since...'>
					<option disabled value='Since...'>Since</option>
					{optionArr.map(e => e)}
				</select>
				<button onClick={send}>Send</button>
			</div>
		);
	};


export default HobbiesInterface;
