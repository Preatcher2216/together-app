import {Switch, Route} from 'wouter';
import Login from 'modules/Login';
import Register from 'modules/Register';
import Admin from 'modules/Admin';

const MainRoutes = () => {
  //  TODO: Запилить редирект для первого входа
  return (
    <Switch>
      <Route path="/" component={Admin} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default MainRoutes;
