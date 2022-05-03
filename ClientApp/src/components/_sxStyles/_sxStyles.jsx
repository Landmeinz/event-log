
// Styles for the whole app
// import _sxStyles in your file as pick out what you need.


// *** APP.JSX *** //

export const sxSite = {
    border: '1px solid red',
    bgcolor: 'info.dark',
    height: '100vh',
    width: '100%',
    p: 0,
    m: 0,

  }; // sxNavContent





  // *** NAV.JSX *** //

  export const sxNavContainer = {
    border: '5px solid blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mx: 'auto',
    width: 355,
    height: 55,
    bottom: 10,
    borderRadius: 1,
    // bgcolor: 'info.main',
    pt: 1.5,

    gap: 10,

    '&:link': {
        // transform: 'scale(1.1)',
        color: 'blue'
    }

  }; // sxNavContainer

  export const sxNavLink = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'primary.main',

    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)'
    }

  }; // sxNavContainer