import React from 'react';
import './App.scss';
import routes from '../routes';
import Navigation from '../components/navigation';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";


function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<Router>
				<Switch>
					{ routes }
				</Switch>
			</Router>
		</div>
	);
}

export default App;
