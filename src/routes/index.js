import React from 'react';
import { Route } from "react-router-dom";
import routes from '../constants/routes';
import RouteGuard from '../components/routeGuard';
import Home from './Home';
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import Login from './Login';

export const renderRoutes = [
	{
		component: Route,
		render: <Home />,
		config: {
			exact: true,
			path: routes.home
		}
	},
	{
		component: Route,
		render: <Login />,
		config: {
			path: routes.login
		}
	},
	{
		component: RouteGuard,
		render: <UserProfile />,
		config: {
			path: routes.profile
		}
	},
	{
		component: Route,
		render: <NotFound />,
		config: {
			path: "*"
		}
	}
]