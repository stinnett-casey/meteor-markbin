import React from 'react';
import Header from './Header';
import BinsList from './bins/BinsList';
import BinsMain from './bins/BinsMain';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

const App = (props) => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BinsList}></Route>
          <Route path="/bins/:binId" component={BinsMain}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
