import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoutes";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          {isLoggedIn ? <Redirect from="/signin" to="/" /> : <LoginPage />}
        </Route>
        <Redirect from="/" to="/dashboard" exact />
        <PrivateRoute path="/">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
