import { Button, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import laptop from "../Assets/laptop.png";
import callout from "../Assets/callout.png";

const Teacher = () => {
  return (
    <div className="Teachers">
      <div className="wrapper">
        <div className="forTeachers">
          <Typography className="head" variant="h3">
            For Teachers
          </Typography>
          <Typography className="description">
            Use DeltaMath's modules to create high-leverage assignments and
            track student learning. With DeltaMath PLUS, students also get
            access to help videos. Create and assign tests, assign specific
            problem-types, even create your own problem.
          </Typography>
          <Button className="button" variant="contained">
            Learn More
          </Button>
        </div>
        <div className="images">
          <img src={callout} alt="person" className="persinImg"></img>
          <img src={laptop} alt="laptop" className="laptop"></img>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
