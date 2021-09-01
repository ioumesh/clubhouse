
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const isAuth =false;
const user = {
  activated:false,
};
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path="/authenticate">
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
        <ProtectedRoute path="/rooms">
          <Rooms />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route   {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect to={
            {
              pathname: '/rooms',
              state: { from: location }
            }
          } />
        )
          : (
            children
          )
      }}
    >
    </Route>
  )
}
const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}
      render={({ location }) => {

        return !isAuth ? (
          <Redirect to={
            {
              pathname: '/',
              state: { from: location }
            }
          } />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={
              {
                pathname: '/rooms',
                state: { from: location }
              }
            }
          />
        )

      }}
    >

    </Route>
  )
}
const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}
      render={({ location }) => {

        return !isAuth ? (
          <Redirect to={
            {
              pathname: '/',
              state: { from: location }
            }
          } />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={
              {
                pathname: '/activate',
                state: { from: location }
              }
            }
          />
        ) : (
          children
        )

      }}
    >

    </Route>
  )
}

export default App;
