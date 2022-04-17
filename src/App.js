import React from "react";
import "./App.css";
import Banner from "./Components/BannerSection/Banner";
import Navbar from "./Components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Feedback from "./Components/Feedbacks/Feedback";

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
        <Feedback />
      </ThemeProvider>
    </div>
  );
};

export default App;
