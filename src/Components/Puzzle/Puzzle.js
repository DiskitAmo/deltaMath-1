//import { Key } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Puzzle = () => {
  const num = [
    { n1: "6", n2: "2", n3: "0" },
    { n1: "8", n2: "3", n3: "8" },
    { n1: "7", n2: "3", n3: "8" },
  ];

  return (
    <div className="Puzzle">
      <div className="boxes">
        <div className="firstBox">
          <div className="box1">
            <div className="a"></div>
            <div className="b"></div>
            <Typography variant="h3" className="number">
              2
            </Typography>
          </div>
        </div>
        <div className="boxContainer">
          {num.map((item, index) => {
            return (
              <div className="box2" key={index}>
                <p className="p"> ,</p>
                <div className="box1">
                  <div className="a"></div>
                  <div className="b"></div>
                  <Typography variant="h3" className="number">
                    {item.n1}
                  </Typography>
                </div>
                <div className="box1">
                  <div className="a"></div>
                  <div className="b"></div>
                  <Typography variant="h3" className="number">
                    {item.n2}
                  </Typography>
                </div>
                <div className="box1">
                  <div className="a"></div>
                  <div className="b"></div>
                  <Typography variant="h3" className="number">
                    {item.n3}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Typography variant="body" sx={{ color: "white" }}>
        Problem solved with DeltaMath
      </Typography>
    </div>
  );
};

export default Puzzle;
