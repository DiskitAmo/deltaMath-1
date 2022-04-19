import { Typography } from "@mui/material";
import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import profile1 from "../Assets/Ellipse 3.png";
import profile2 from "../Assets/Ellipse 4.png";
import profile3 from "../Assets/Ellipse 5.png";
import quote from "../Assets/quote.png";

const SectionCarousel = () => {
  const title = "Why do millions of people choose to learn on DeltaMath?";
  const cardData = [
    {
      Quote: quote,
      detail:
        "At vero ero accurate at iuyt odio dishjjn sdcifd qui bandfg dishjjn sdcifd  pre adfgvb dishjjn sdcifd qui  volumnbb delenti arque corruit quos.",
      image: profile1,
      occupation: "Teacher",
    },
    {
      Quote: quote,
      detail:
        "At vero ero accurate at iuyt odio dishjjn sdcifd qui bandfg dishjjn sdcifd  pre adfgvb dishjjn sdcifd qui  volumnbb delenti arque corruit quos.",
      image: profile2,
      occupation: "Parent",
    },
    {
      Quote: quote,
      detail:
        "At vero ero accurate at iuyt odio dishjjn sdcifd qui bandfg dishjjn sdcifd  pre adfgvb dishjjn sdcifd qui  volumnbb delenti arque corruit quos.",
      image: profile3,
      occupation: "Student",
    },
  ];
  return (
    <div className="carouselsection">
      <Typography variant="h5" className="title">
        {title}
      </Typography>
      <div className="cardCarousel">
        <Carousel className="carousel" indicators={false} id="carouselExample">
          <Carousel.Item className="item">
            {cardData.map((item, index) => {
              return (
                <div className="Card" key={index}>
                  <img src={item.Quote} alt="quote" className="quote"></img>
                  <Typography variant="body2" className="detail">
                    {item.detail}
                  </Typography>
                  <img
                    src={item.image}
                    alt="profile picture"
                    className="profile"
                  ></img>
                  <Typography>Name Here</Typography>
                  <Typography variant="body2" className="occupation">
                    {item.occupation}
                  </Typography>
                </div>
              );
            })}
          </Carousel.Item>
          <Carousel.Item className="item">
            {cardData.map((item, index) => {
              return (
                <div className="Card" key={index}>
                  <img src={item.Quote} alt="quote" className="quote"></img>
                  <Typography variant="body2" className="detail">
                    {item.detail}
                  </Typography>
                  <img
                    src={item.image}
                    alt="profile picture"
                    className="profile"
                  ></img>
                  <Typography>Name Here</Typography>
                  <Typography variant="body2" className="occupation">
                    {item.occupation}
                  </Typography>
                </div>
              );
            })}
          </Carousel.Item>
          <Carousel.Item className="item">
            {cardData.map((item, index) => {
              return (
                <div className="Card" key={index}>
                  <img src={item.Quote} alt="quote" className="quote"></img>
                  <Typography variant="body2" className="detail">
                    {item.detail}
                  </Typography>
                  <img
                    src={item.image}
                    alt="profile picture"
                    className="profile"
                  ></img>
                  <Typography>Name Here</Typography>
                  <Typography variant="body2" className="occupation">
                    {item.occupation}
                  </Typography>
                </div>
              );
            })}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mobileCarousel">
        <Carousel className="carousel" indicators={false} id="carouselExample">
          {cardData.map((item, index) => {
            return (
              <Carousel.Item className="item">
                <div className="mobileCard" key={index}>
                  <img src={item.Quote} alt="quote" className="quote"></img>
                  <Typography variant="body2" className="detail">
                    {item.detail}
                  </Typography>
                  <img
                    src={item.image}
                    alt="profile picture"
                    className="profile"
                  ></img>
                  <Typography>Name Here</Typography>
                  <Typography variant="body2" className="occupation">
                    {item.occupation}
                  </Typography>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SectionCarousel;
