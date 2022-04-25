import React, { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Components/BannerSection/Banner";
import Navbar from "./Components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Feedback from "./Components/Feedbacks/Feedback";
import Teacher from "./Components/Teacher/Teacher";
import Parents from "./Components/Parents/Parents";
//import Puzzle from "./Components/Puzzle/Puzzle";
import Footer from "./Components/Footer/Footer";
import SlickCarousel from "./Components/Carousel/SlickCarousel";
import Tickflip from "./Components/Puzzle/Tickflip";

const theme = createTheme({
  typography: {
    h2: {
      ["@media (max-width:900px)"]: {
        fontSize: "44px !important",
      },
      ["@media (max-width:600px)"]: {
        fontSize: "38px !important",
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
      ["@media (max-width:900px)"]: {
        fontSize: "28px !important",
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
        <SlickCarousel />
        {/* <Puzzle /> */}
        <Tickflip />

        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
