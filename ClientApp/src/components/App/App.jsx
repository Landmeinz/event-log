import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useLocation } from "react-router";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import LoginPage from '../LoginPage/LoginPage.jsx';
// import RegisterPage from '../RegisterPage/RegisterPage.jsx';
// import Collection from '../Collection/Collection.jsx';
// import Dashboard from '../Dashboard/Dashboard.jsx';
// import PlantForm from '../PlantForm/PlantForm.jsx';
// import Profile from '../Profile/Profile.jsx';
// import PlantDetails from '../PlantDetails/PlantDetails.jsx';
// import AdminPage from '../AdminPage/AdminPage.jsx';
// import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx';

// import './App.css';

// --- MUI --- //
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  //   dispatch({ type: 'FETCH_PLANTS' });
  //   // dispatch({ type: 'FETCH_PHOTOS' });
  //   dispatch({ type: 'FETCH_CURRENT_DATE' })
  // }, [dispatch]);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);



  // let's set up a theme for our project
  const theme = createTheme({
    palette: {
      primary: {
        main: 'hsla(220, 80%, 50%, 1)',
        dark: 'hsla(220, 80%, 30%, 1)',
        light: 'hsla(220, 80%, 70%, 1)',
      },
      secondary: {
        main: 'hsla(45, 95%, 50%, 1.0)',
        dark: 'hsla(45, 80%, 30%, 1)',
        light: 'hsla(45, 80%, 70%, 1)',
      },
      error: {
        main: 'hsla(350, 80%, 50%, 1)',
      },
      info: {
        main: 'hsla(0, 5%, 20%, 1)',
        dark: 'hsla(0, 5%, 20%, 1)',
        light: 'hsla(0, 5%, 90%, 1)',
      }
    },
  });

  // container so that we can center our sxAppContent on the screen
  const sxApp = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }; // sxApp

  // constrain all content down to mobile sizing
  const sxAppContent = {
    border: '2px solid lightgray',
    width: 355,
    // width: 800,
    height: 725,
    // borderRadius: 4,
    overflow: 'auto',
  }; // sxAppContent


  return (

    <ThemeProvider theme={theme}>
      <Typography>

        <Router>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/dashboard */}
            {/* <Redirect exact from="/" to="/dashboard" /> */}

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/user will show the UserPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:3000/user */}

            {/* Visiting localhost:3000/dashboard will show the user their dashboard & water schedule. */}
            {/* <Nav /> */}
            <Route
              // logged in shows Dashboard else shows LoginPage
              exact
              path="/"
            >
              in the / root
              <Footer />
            </Route>

            {/* ELSE IF no other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>

          </Switch>
        </Router>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
