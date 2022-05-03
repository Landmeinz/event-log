import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useLocation } from "react-router";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { sxSite
} from '../_sxStyles/_sxStyles';

import './App.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About'

// --- MUI --- //
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';


function App() {

  const dispatch = useDispatch();

  // const user = useSelector(store => store.user);

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



  // // container so that we can center our sxAppContent on the screen
  // const sxApp = {
  //   // border: '1px solid red',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // }; // sxApp

  // // constrain all content down to mobile sizing
  // const sxAppContent = {
  //   border: '2px solid lightgray',
  //   width: 355,
  //   // width: 800,
  //   height: 725,
  //   // borderRadius: 4,
  //   overflow: 'auto',
  // }; // sxAppContent


  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Router>

          <Box sx={sxSite}>
            <Nav />

            <Switch>
              <Route path="/home">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

            </Switch>
          </Box>

        </Router>
      </Typography>
    </ThemeProvider>
  );
}





export default App;
