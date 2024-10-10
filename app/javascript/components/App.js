import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from './AdminPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={AdminPage} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
