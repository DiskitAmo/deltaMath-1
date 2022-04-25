import React, { useState } from "react";
//import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import "./tick.css";
import { Container, Typography } from "@mui/material";
import Flip from "./Flip";

const Tickflip = () => {
  const [count, setCount] = useState(110);

  setInterval(() => {
    setCount(count + 1);
  }, 2000);

  return (
    <>
      <div className="Puzzle">
        <Container>
          <div className="boxes">
            <div className="flip-card1">
              <Flip value={3} />
            </div>
            {[2, 7, 3].map((value, index) => {
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
        </Container>
      </div>
    </>
  );
};
export default Tickflip;
