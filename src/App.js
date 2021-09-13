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
// import Services from './Pages/Services/Services';
// import Tech from './Pages/Technolgies/Tech';
// import Niches from './Pages/Niches/Niches';

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
            {/* <Route exact path='/technology'>
            <Tech />
            </Route>
            <Route exact path='/Niches'>
            <Niches />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
