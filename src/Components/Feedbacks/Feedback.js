import { Container, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import practise from "../Assets/Vector Smart Object-2.png";
import feed from "../Assets/Vector Smart Object-1.png";
import fine from "../Assets/Vector Smart Object.png";
const Feedback = () => {
  const types = [
    {
      img: practise,
      heading: "Unlimited practise",
      para: "Lorem ipsum dolor sit amet, comnstrt adispinbtin  weki, sed do weuijd tempor incideny uy labiuy et diolomagnn aliqua.",
    },
    {
      img: feed,
      heading: "Instant feedback",
      para: "Lorem ipsum dolor sit amet, comnstrt adispinbtin  weki, sed do weuijd tempor incideny uy labiuy et diolomagnn aliqua.",
    },
    {
      img: fine,
      heading: "Fine-tune controls",
      para: "Lorem ipsum dolor sit amet, comnstrt adispinbtin  weki, sed do weuijd tempor incideny uy labiuy et diolomagnn aliqua.",
    },
  ];
  return (
    <div className="category">
      <Container className="categotyContainer">
        {types.map((item, index) => {
          return (
            <div className={index === 0 ? "practise" : "services"} key={index}>
              <img src={item.img}></img>
              <Typography className="heading" variant="h4">
                {item.heading}
              </Typography>
              <Typography className="lorem">{item.para}</Typography>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Feedback;
