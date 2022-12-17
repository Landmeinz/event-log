
// Styles for the whole app
// import _sxStyles in your file as pick out what you need.

import { red } from "@mui/material/colors";


// *** APP.JSX *** //

export const sxSite = {
    // border: '1px solid red',
    // bgcolor: 'info.dark',
    height: '100vh',
    width: '100%',
    mx: 'auto',
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'colum',
    justifyContent: 'center',

}; // sxSite

export const sxSiteContent = {
    // border: '1px solid blue',
    borderRadius: 6,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    margin: '2.5% 0 2.5% 0',
    boxShadow: 6,

    // color: 'info.light',

}; // sxSiteContent





// *** NAV.JSX *** //

export const sxNavContainer = {
    // border: '5px solid green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '125px',
    gap: 8,

}; // sxNavContainer

export const sxNavLink = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'info.dark',

    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)',
    }

}; // sxNavLink





// *** HOME.JSX *** //

export const sxHomeContent = {
    // border: '5px solid blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mx: 4,

}; // sxHomeContent

export const sxFormControl ={
    width: '100%',
    gap: 3,
}

export const sxTextInput = {
    // width: '100%',
    // color: 'info.light',
    borderRadius: 4,
    // bgcolor: 'info.main',
}






// *** ABOUT.JSX *** //

export const sxAboutContent = {
    // border: '5px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mx: 4,

}; // sxAboutContent

export const sxPostedItem = {
    // border: '5px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mx: 4,

}; // sxPostedItem

