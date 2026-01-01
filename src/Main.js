import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Chess from './pages/chess';

const ROUTES = [
  { path: '/', component: Home, exact: true },
  { path: '/chess', component: Chess, exact: true },
];

const Main = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Main;
