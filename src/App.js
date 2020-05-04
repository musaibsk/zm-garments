import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => (
  <h1>
    Hello
  </h1>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hatspage' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
