
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Navigation from './components/shared/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
