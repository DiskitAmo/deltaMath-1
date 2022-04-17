import React from "react";
import "./App.css";
import Banner from "./Components/BannerSection/Banner";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
