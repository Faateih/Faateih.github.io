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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
