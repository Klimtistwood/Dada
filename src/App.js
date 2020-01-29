import React from 'react';
import './App.css';
import HomePage from './HomePage'
import Tale from './Tale';
import Music from './Musique';
import Recipe from './Recipe';
import Sport from './Sport';
import Science from './Science';
import Animals from './Animals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/animaux" component={Animals} />
            <Route path="/histoire" component={Tale} />
            <Route path="/recette" component={Recipe} />
            <Route path="/sport" component={Sport} />
            <Route path="/musique" component={Music} />
            <Route path="/science" component={Science} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
