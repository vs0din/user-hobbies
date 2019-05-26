import React from "react";
import UserHobbiesView from "./UserHobbiesView/UserHobbiesView";

interface AppProps {

}

class App extends React.PureComponent<AppProps> {
	render() {
		return (
			<UserHobbiesView />
		);
	}
}

export default App
