import React from "react";
import "./App.css";
import Banner from "./Components/BannerSection/Banner";
import Navbar from "./Components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Feedback from "./Components/Feedbacks/Feedback";
import Teacher from "./Components/Teacher/Teacher";
import Parents from "./Components/Parents/Parents";

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
    h4: {
      ["@media (max-width:600px)"]: {
        fontSize: "22px !important",
      },
    },
    h3: {
      ["@media (max-width:600px)"]: {
        fontSize: "25px !important",
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
        <Teacher />
        <Parents />
      </ThemeProvider>
    </div>
  );
};

export default App;
