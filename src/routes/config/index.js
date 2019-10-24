import routes from '../../constants/routes';
import RouteGuard from '../../components/routeGuard';
import Home from '../Home';
import UserProfile from '../UserProfile';
import NotFound from '../NotFound';
import Login from '../Login';

export const pageLinks = [
    {
        label: 'home',
        to: routes.home,
        exact: true,
        path: routes.home,
        component: Home,
    },
    {
        label: 'profile',
        to: routes.profile,
        path: routes.profile,
        tag: RouteGuard,
        component: UserProfile
    },
]

export default [
    ...pageLinks,
    {
        path: routes.login,
        component: Login
    },
    {
        path: "*",
        component: NotFound
    }
];