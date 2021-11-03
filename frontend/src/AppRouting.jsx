import {Router, Route, Switch} from 'wouter';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import MegaMenu from './widgets/MegaMenu';

const App = () => {
  return (
    <Router>

      <MegaMenu />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/nosotros" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

    </Router>
  );
}

export default App;
