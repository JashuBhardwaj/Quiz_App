import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Category from './components/Category';
import Scorecard from './components/Scorecard';

function App() {

  const [start, setStart] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Start props={setStart}/>
              </>
            )
          }}>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/quiz" render={() => {
            return (
              <>
                <Quiz/>
              </>
            )
          }}>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/category" render={() => {
            return (
              <>
                <Category/>
              </>
            )
          }}>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/scorecard" render={() => {
            return (
              <>
                <Scorecard/>
              </>
            )
          }}>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
