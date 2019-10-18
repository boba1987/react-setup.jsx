import React from 'react';
import './App.scss';
import { renderRoutes } from '../routes';
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
					{renderRoutes.map(route => <route.component key={route.config.path} render={() => route.render} {...route.config}/>)}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
