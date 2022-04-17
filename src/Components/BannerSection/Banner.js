import { Button, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Banner = () => {
  const category = [
    "For Teachers/ Schools",
    "For Families/ Individuals",
    "For Students",
  ];
  const title = "Math done right.";
  const title1 = "Depth, clarity, and rigor.";
  const para = "Built by teachers. Used by millions.";

  return (
    <div className="bannerContainer">
      <div className="headings">
        <Typography className="title" variant="h2">
          {title}
          <br></br>
          {title1}
        </Typography>
        <Typography variant="h5" className="para">
          {para}
        </Typography>
      </div>
      <div className="boxes">
        {category.map((text, index) => {
          return (
            <Button className="bttn" key={index}>
              <span className="text">{text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
