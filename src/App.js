import React from "react";
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
import NewPage from "./Pages/Home/Newpage";
import AboutUs from "./Pages/Home/aboutus";
import Blogs from "./Pages/Home/blogs";
import Technologies from "./Pages/Home/technologies";

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
            <Route exact path="/newpage">
              <NewPage />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/Technologies">
              <Technologies />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
