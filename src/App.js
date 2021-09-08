import React from 'react';
import "./App.scss";

// packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase
import db from "./firebase";

// Files
import Home from "./Pages/Home/Home";
import Services from './Pages/Services/Services';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='/services'>
            <Services />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
