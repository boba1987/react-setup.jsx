import routes from '../../constants/routes';
import RouteGuard from '../../components/routeGuard';
import Home from '../Home';
import UserProfile from '../UserProfile';
import NotFound from '../NotFound';
import Login from '../Login';

export default [
    {
        path: routes.home,
        component: Home,
        config: {
            exact: true
        }
    },
    {
        path: routes.login,
        component: Login
    },
    {
        path: routes.profile,
        tag: RouteGuard,
        component: UserProfile
    },
    {
        path: "*",
        component: NotFound
    }
];