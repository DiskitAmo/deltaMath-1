import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from "@mui/material";
import "./slick.css";
import profile1 from "../Assets/Ellipse 3.png";
import profile2 from "../Assets/Ellipse 4.png";
import profile3 from "../Assets/Ellipse 5.png";
import quote from "../Assets/quote.png";

const SlickCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
    <div>
      <Container className="slickcarousel">
        <Typography variant="h5" className="title">
          {title}
        </Typography>
        <Slider {...settings}>
          <div className="item">
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
          </div>
          <div className="item">
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
          </div>
          <div className="item">
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
          </div>
        </Slider>
        <div className="mobileCarousel">
          <Slider {...settings}>
            {cardData.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="mobileCard">
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
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default SlickCarousel;
