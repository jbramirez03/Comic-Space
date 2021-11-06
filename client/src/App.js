<<<<<<< HEAD
<<<<<<< Updated upstream
import React from 'react'
import './App.css';
import { Button } from '@mui/material';
=======
=======
>>>>>>> main
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResults";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import Listings from "./components/pages/Listings";
import Tester from "./components/pages/Tester";
import SignUpTest from './components/pages/SignUpTest';
<<<<<<< HEAD
import Cards from './components/Cards'
>>>>>>> Stashed changes


function App() {
  return (
<<<<<<< Updated upstream
  <>
<div className="App">
    <Button onClick={()=>alert("Just Kidding")} variant="outlined" >
  Click me to see your completed COMIC SPACE project 
    </Button>
    </div>
  </>
=======
=======

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
>>>>>>> main
    <>
      <ApolloProvider client={client}>
        <Router>
          <div>
            {/* <Provider store={store}> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={Tester} />
              <Route exact path="/signin" component={SignInSide} />
<<<<<<< HEAD
              <Route exact path="/signup" component={SignUp} />
=======
              <Route exact path="/signup" component={SignUpTest} />
>>>>>>> main
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/listings" component={Listings} />
              <Route exact path="/results" component={SearchResults} />
            </Switch>
            {/* </Provider> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> main
  );
}

export default App;
