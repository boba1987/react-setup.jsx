import React from "react";
import {
	Route,
	Redirect
} from "react-router-dom";
import routes from '../../constants/routes';
import localstore from '../../services/localstore';

const RouteGuard = ({ children, ...rest }) => {
	const isAuthenticated = !!localstore.getItem('token');
    return (
		<Route
        	{...rest}
        	render={({ location }) =>
          	isAuthenticated ? (
            	children
          	) : (
            	<Redirect
              		to={{
						pathname: routes.login,
						state: { from: location }
              		}}
            	/>
          	)}
      	/>
    );
};

export default RouteGuard;