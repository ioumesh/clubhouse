
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
