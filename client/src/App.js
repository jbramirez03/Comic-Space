import React from "react";
import Dictaphone from "./components/pages/Dictaphone";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Contributors from "./components/pages/Contributors";
import { setContext } from "@apollo/client/link/context";
// import { Provider } from "react-redux";
import "./App.css";
// import store from "./utils/store";
import SignInSide from "./components/SignInSide";
import UpdateProfile from "./components/UpdateProfile";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResults";
import Profile from "./components/pages/Profile";
// import Search from "./components/pages/Search";
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



const AlertTemplate = ({ style, options, message, close }) => (
  <Alert style={style} severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
    <IconButton size='small' aria-label="close"
      onClick={close}><CloseIcon /></IconButton>
  </Alert>
)


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
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
                {/* <Route exact path="/results" component={SearchResults} /> */}
                <Route exact path="/contributors" component={Contributors} />
                <Route exact path="/dictaphone" component={Dictaphone} />
                {/* <Route exact path="/" component={Main} /> */}
                <Route exact path="/forum" component={Forum} />
              </Switch>
            </div>
          </AlertProvider>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
