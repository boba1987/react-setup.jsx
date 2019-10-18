import React from 'react';
import './App.scss';
import Navigation from '../components/navigation';
import Home from '../routes/Home';
import UserProfile from '../routes/UserProfile';
import NotFound from '../routes/NotFound';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import routes from '../constants/routes';
import RouteGuard from '../components/routeGuard';
import Login from '../routes/Login';

function App() {
	return (
		<div className="App">
			<header>
				<Navigation />
			</header>
			<Router>
				<Switch>
					<Route path={routes.home} exact={true}>
						<Home />
					</Route>
					<Route path={routes.login}>
						<Login />
					</Route>
					<RouteGuard path={routes.profile}>
						<UserProfile />
					</RouteGuard>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
