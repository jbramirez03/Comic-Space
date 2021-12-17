import React from "react";
import Dictaphone from "./components/pages/Dictaphone";
import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
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
            <Routes>
              <Route path="/tester" element={<>{Auth.loggedIn() ? <TestChat /> : <Navigate to="/login" />}</>} />
              <Route path="/login" element={<>{Auth.loggedIn() ? <Navigate to="/" /> : <SignInSide />}</>} />
              <Route path="/signup" element={<> {Auth.loggedIn() ? <Navigate to="/" /> : <SignUp />}</>} />
              <Route path="/profile" element={<>{Auth.loggedIn() ? <Profile /> : <Navigate to="/login" />}</>} />
              <Route path="/update" element={<>{Auth.loggedIn() ? <UpdateProfile /> : <Navigate to="/login" />}</>} />
              <Route path="/search" element={<>{Auth.loggedIn() ? <SearchResults /> : <Navigate to="/login" />}</>} />
              <Route path="/listings" element={<>{Auth.loggedIn() ? <Listings /> : <Navigate to="/login" />}</>} />
              <Route path="/" element={<>{Auth.loggedIn() ? <Main /> : <Navigate to="/login" />}</>} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="/dictaphone" element={<TestChat />} />
              {/* <Route exact path="/forum" component={Forum} /> */}
            </Routes>
          </div>
        </AlertProvider>
      </Router>
    </>
  );
}

export default App;
