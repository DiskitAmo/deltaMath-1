import { Button, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Banner = () => {
  const category = [
    "For Teachers/ Schools",
    "For Families/ Individuals",
    "For Students",
  ];

  const title1 = "Depth, clarity, and rigor.";
  const para = "Built by teachers. Used by millions.";

  return (
    <div className="bannerContainer">
      <div className="headings">
        <Typography className="title" variant="h2">
          Math done <span className="right">right.</span>
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
            <Button className={index === 1 ? "btnHide" : "bttn"} key={index}>
              <span className="text">{text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
