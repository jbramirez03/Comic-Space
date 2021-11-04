import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import "./App.css";
import Search from "./components/pages/Search"
// import SignInSide from "./components/SignInSide";
// import Profile from "./components/pages/Profile"
// import SignUp from "./components/SignUp";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      {/* <SignInSide /> */}
      <Search />
      {/* <Profile /> */}
    </ApolloProvider>
  );
}

export default App;
