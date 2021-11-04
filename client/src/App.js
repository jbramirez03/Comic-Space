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
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import Listings from "./components/pages/Listings";

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
          <div>
            {/* <Provider store={store}> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={SignInSide} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/listings" component={Listings} />
            </Switch>
            {/* </Provider> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
