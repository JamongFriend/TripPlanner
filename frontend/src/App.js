import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Plans from './pages/Plans';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" component={Plans} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
