import "./style.css";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
const PuzzleNew = () => {
  const num = [1, 2, 3];

  const [hour1, setHour1] = useState();
  const [hour2, setHour2] = useState();
  const [min1, setMin1] = useState();
  const [min2, setMin2] = useState();
  const [seconds1, setSeconds1] = useState();
  const [seconds2, setSeconds2] = useState();

  const runclock = () => {
    const date = new Date();
    const now = {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    };
    now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
    now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
    now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;
    setHour1(now.h[0]);
    setHour2(now.h[1]);
    setMin1(now.m[0]);
    setMin2(now.m[1]);
    setSeconds1(now.s[0]);
    setSeconds2(now.s[1]);
  };

  setInterval(runclock, 1000);
  //flipdown
  return (
    <div className="Puzzle">
      <div className="boxes">
        <div className="firstBox ">
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
                  <Typography variant="h3" className={"number"}>
                    0
                  </Typography>
                </div>
                <div className="box1">
                  <div className="a"></div>
                  <div className="b"></div>
                  <Typography variant="h3" className="number">
                    {index === 0
                      ? `${hour1}`
                      : index === 1
                      ? `${min1}`
                      : `${seconds1}`}
                  </Typography>
                </div>
                <div className="box1">
                  <div className="a"></div>
                  <div className="b"></div>
                  <Typography variant="h3" className={"number"}>
                    {index === 0
                      ? `${hour2}`
                      : index === 1
                      ? `${min2}`
                      : `${seconds2}`}
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

export default PuzzleNew;
