import { Navigate, useRoutes } from 'react-router-dom';

import { Home } from './pages';

export const RoutesList = [
    {
        element: <Home />,
        exact: true,
        path: '/',
    }, {
        element: <Navigate to="/" />,
        path: '/*'
    },
];

export default () => {
    const routes = useRoutes(RoutesList);

    return routes;
};
