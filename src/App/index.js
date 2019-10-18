import React from 'react';
import './App.scss';
import Navigation from '../components/navigation';
import Home from '../routes/Home';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<Router>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
