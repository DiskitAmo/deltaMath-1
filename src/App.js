import React from "react";
import "./App.css";
import Banner from "./Components/BannerSection/Banner";
import Navbar from "./Components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h2: {
      ["@media (max-width:600px)"]: {
        fontSize: "35px !important",
      },
    },
    h5: {
      ["@media (max-width:600px)"]: {
        fontSize: "18px !important",
      },
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Banner />
      </ThemeProvider>
    </div>
  );
};

export default App;
