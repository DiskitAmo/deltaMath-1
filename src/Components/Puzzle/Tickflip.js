import React, { useState, useEffect } from "react";
//import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import "./tick.css";
import { Container, Typography } from "@mui/material";
import Flip from "./Flip";

const Tickflip = () => {
  const [count, setCount] = useState(110);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 2);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const num = [2, 7, 3];
  return (
    <>
      <div className="Puzzle">
        <Container>
          <div className="boxes">
            <div className="cards">
              <div className="flip-card1">
                <Flip value={3} />
              </div>
              {num.map((value, index) => {
                return (
                  <div className="flip-cards" key={index}>
                    <p className="p">,</p>
                    <Flip value={index !== 2 ? value : ""} />
                    <Flip value={index !== 2 ? value - 2 : ""} />

                    <Flip value={index === 2 ? count : value++} />
                  </div>
                );
              })}
            </div>
            <Typography variant="body" sx={{ color: "white" }}>
              Problem solved with DeltaMath
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Tickflip;
