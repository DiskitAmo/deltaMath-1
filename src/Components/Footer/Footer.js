import { Typography } from "@mui/material";
import React from "react";
import "./style.css";
import logo from "../Assets/dm-Logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const pages = [
    "Teachers/Schools",
    "Families/Individuals",
    "Students",
    "About",
    "FAQs",
    "Contact",
  ];
  return (
    <div className="footer">
      <div className="info">
        <img src={logo} alt="logo" className="logo"></img>
        <div className="pages">
          {pages.map((item, index) => {
            return (
              <Typography key={index} variant="caption">
                {item}
              </Typography>
            );
          })}
        </div>
        <hr sx={{ paddingLeft: "30px", paddingRight: "30px" }}></hr>
      </div>
      <div className="social">
        <div className="copyright">
          <Typography>&copy;2020 DeltaMath</Typography>
          <Typography className="term">Terms of use</Typography>
          <Typography className="term">Privacy policy</Typography>
        </div>

        <div className="media">
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="copyrightMobile">
        <div className="media">
          <FacebookIcon />
          <TwitterIcon />
        </div>
        <div className="copy">
          <Typography className="term">Site Status</Typography>
          <Typography className="term">Terms of use</Typography>
          <Typography className="term">Privacy policy</Typography>
          <Typography>&copy;2020 DeltaMath Solutins Inc.</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
