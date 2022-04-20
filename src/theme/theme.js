import { createTheme } from "@mui/material";
import { minWidth } from "@mui/system";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary and secondary will appear when component use color prop
    primary: {
      main: '#004f96',
    },
    secondary: {
      main: '#51b4ec',
    },
    error: {
      main: '#f04461',
    },
    warning:{
      main: '#ff9800',
    },
    info: {
      main: '#ffffff'
    },
    success:{
      main: '#4caf50'
    },
    background: {
        default: "#f2f2f2",
        paper: "#f2f2f2",
    },
  },
  typography: {
    fontSize: 15,
    h1: {
      fontSize: 40,
    },
    h2:  {
      fontSize: 30,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 15,
        },
      },
    }
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: '#242f39',
    },
    secondary: {
        main: "#51b4ec",
    },
    error: {
      main: '#f04461',
    },
    warning:{
      main: '#ff9800',
    },
    info: {
      main: '#242f39'
    },
    success:{
      main: '#4caf50'
    },
    background: {
        default: "#000A15",
        paper: "#000A15",
    },
  },
  typography: {
    fontSize: 15,
    h1: {
      fontSize: 40,
    },
    h2:  {
      fontSize: 30,
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 15,
        },
      },
    }
  },

});