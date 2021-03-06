import React from "react";
import laptop1 from "../Assets/laptop copy.png";
import callout1 from "../Assets/callout copy.png";
import { Button, Container, Typography } from "@mui/material";
import "./style.css";

const Parents = () => {
  return (
    <div className="Parents">
      {/* <Container className="parentContainer"> */}
      <div className="photos">
        <img src={laptop1} alt="laptop" className="laptop"></img>
        <img src={callout1} alt="person" className="callout1"></img>
      </div>
      {/* <div className="bela"></div> */}
      <div className="forParents">
        <Typography className="head" variant="h3">
          For parents
        </Typography>
        <Typography className="description">
          Use DeltaMath's modules to create high-leverage assignments and track
          student learning. With DeltaMath PLUS, students also get access to
          help videos. Create and assign tests, assign specific problem-types,
          even create your own problem.
        </Typography>
        <Button className="button" variant="contained">
          Learn More
        </Button>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Parents;
