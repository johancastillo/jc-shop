import {Router, Route, Switch} from 'wouter';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import MegaMenu from './widgets/MegaMenu';

const App = () => {
  return (
    <Router>

      <MegaMenu />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
