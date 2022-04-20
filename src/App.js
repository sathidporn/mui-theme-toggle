import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from './theme/theme';
import { useState } from 'react';
import { FormGroup, FormControlLabel, Switch, Paper} from '@mui/material';

import Demo from './components/Demo'
import DataGridDemo from './components/DataGridDemo';

function App() {
   let [darkThemeState, setDarkThemeState] = useState(true)
   let [theme, setTheme] = useState(darkTheme)

   // 
   const toggleTheme = () => {
     if(darkThemeState===true){
       setDarkThemeState(false)
       setTheme(lightTheme)
     }else{
       setDarkThemeState(true)
       setTheme(darkTheme)
     }
   }

  // ToggleSwitch component
   const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={darkThemeState}
                onChange={toggleTheme}
              />
            }
            label={darkThemeState ? 'Dark Theme' : 'Light Theme'}
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
        <Demo></Demo>
        <DataGridDemo></DataGridDemo>

      </Paper>
    </ThemeProvider>
  );
}

export default App;
