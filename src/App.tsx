import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  Paper,
  responsiveFontSizes,
} from "@material-ui/core";
import { amber, lightGreen } from "@material-ui/core/colors";
import React, { FC, useEffect, useState } from "react";
import ActiveReviewHeader from "./components/ActiveReviewHeader";
import Body from "./components/Body";
import TopAppBar from "./components/TopAppBar";

const THEME_TOGGLED_KEY = "THEME_TOGGLED";

const App: FC = () => {
  const [themeToggled, setThemeToggled] = useState(false);

  // Switches to dark theme if user has it saved in their localstorage
  const initializeTheme = () => {
    setThemeToggled(
      Boolean(JSON.parse(localStorage.getItem(THEME_TOGGLED_KEY) ?? "false"))
    );
  };

  const onThemeToggle = () => {
    localStorage.setItem(THEME_TOGGLED_KEY, `${!themeToggled}`);
    setThemeToggled(!themeToggled);
  };

  // Calls the initializeTheme method on first render
  useEffect(() => initializeTheme(), []);

  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: lightGreen,
        secondary: amber,
        type: themeToggled ? "dark" : "light",
      },
    })
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        style={{ height: "100vh", overflow: "auto" }}
        square={true}
        elevation={0}
      >
        <TopAppBar onThemeToggle={onThemeToggle} themeToggled={themeToggled} />
        <ActiveReviewHeader />
        <Body />
      </Paper>
    </MuiThemeProvider>
  );
};

export default App;
