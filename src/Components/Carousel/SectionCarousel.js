import { Typography } from "@mui/material";
import React from "react";
import "./style.css";
const SectionCarousel = () => {
  const title = "Why do millions of people choose to learn on DeltaMath?";

  return (
    <div className="carousel">
      <Typography variant="h5" className="title">
        {title}
      </Typography>
      <div className="cardCarousel"></div>
    </div>
  );
};

export default SectionCarousel;
