import routes from '../../constants/routes';
import RouteGuard from '../../components/routeGuard';
import UserProfile from '../UserProfile';
import NotFound from '../NotFound';
import Login from '../Login';
import Home from '../Home';

export const navigationLinks = [
    {
        label: 'home',
        to: routes.home,
        exact: true,
        path: routes.home,
        component: Home,
    }
]

export default [
    ...navigationLinks,
    {
        path: routes.profile,
        tag: RouteGuard,
        component: UserProfile
    },
    {
        path: routes.login,
        component: Login
    },
    {
        path: "*",
        component: NotFound
    }
];