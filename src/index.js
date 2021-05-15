import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import ErrorBoundary from "./Core/ErrorBoundary";
import "./index.css";
import Core from "./Core/Core";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#205FE0", light: "#76A2F9", dark: "#1745A1" },
    black: { main: "#031926", light: "#A9A9A9" },
    white: { main: "#F8F9FB", light: "#FFFFFF" },
    secondary: { main: "#FFB800", light: "#F7D777", dark: "#B88400" },
    grey: { main: "#F7F8FA", light: "#8080801a" },
  },
  spacing: 8,
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: '"Montserrat", sans-serif',
    body1: { fontFamily: '"Montserrat", sans-serif' },
    caption: {
      fontFamily: '"Roboto", sans',
    },
  },
});
const resFtheme = responsiveFontSizes(theme);

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={resFtheme}>
      <Core />
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
// window.store = rootStore;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
