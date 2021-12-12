import React from "react";
import Dictaphone from "./components/pages/Dictaphone";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Contributors from "./components/pages/Contributors";
import "./App.css";
import SignInSide from "./components/SignInSide";
import UpdateProfile from "./components/UpdateProfile";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResults";
import Profile from "./components/pages/Profile";
import Listings from "./components/pages/Listings";
import Tester from "./components/pages/Tester";
import Forum from "./components/pages/Forum";
import Auth from "./utils/auth";
import { Provider as AlertProvider } from 'react-alert';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Main from './components/pages/main'
import TestChat from './components/pages/TestChat';



const AlertTemplate = ({ style, options, message, close }) => (
  <Alert style={style} severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
    <IconButton size='small' aria-label="close"
      onClick={close}><CloseIcon /></IconButton>
  </Alert>
)


function App() {
  return (
    <>
      <Router>
        <AlertProvider template={AlertTemplate}>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/tester">
                {Auth.loggedIn() ? <Tester /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/login">
                {Auth.loggedIn() ? <Redirect to="/" /> : <SignInSide />}
              </Route>
              <Route exact path="/signup">
                {Auth.loggedIn() ? <Redirect to="/" /> : <SignUp />}
              </Route>
              <Route exact path="/profile">
                {Auth.loggedIn() ? <Profile /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/update">
                {Auth.loggedIn() ? <UpdateProfile /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/search">
                {Auth.loggedIn() ? <SearchResults /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/listings">
                {Auth.loggedIn() ? <Listings /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/">
                {Auth.loggedIn() ? <Main /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/contributors" component={Contributors} />
              <Route exact path="/dictaphone" component={TestChat} />
              {/* <Route exact path="/forum" component={Forum} /> */}
            </Switch>
          </div>
        </AlertProvider>
      </Router>
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
