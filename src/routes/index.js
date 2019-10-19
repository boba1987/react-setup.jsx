import React from 'react';
import { Route } from "react-router-dom";
import uniqid from 'uniqid';
import routes from '../constants/routes';
import RouteGuard from '../components/routeGuard';
import Home from './Home';
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import Login from './Login';

export const renderRoutes = [
    <Route key={uniqid()} render={() => <Home />} path={routes.home} exact={true} />,
    <Route key={uniqid()} render={() => <Login />} path={routes.login} />,
    <RouteGuard key={uniqid()} render={() => <UserProfile />}  path={routes.profile} />,
    <Route key={uniqid()} render={() => <NotFound />} path="*" />
];
