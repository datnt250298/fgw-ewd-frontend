import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Student from "./components/Students/Student";
import SubmitArticles from "./pages/SubmitArticles/SubmitArticles";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/submitarticles">
          <SubmitArticles />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
