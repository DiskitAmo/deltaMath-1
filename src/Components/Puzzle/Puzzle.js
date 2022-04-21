import { Typography } from "@mui/material";

import "./style.css";
import FlipCountdown from "@rumess/react-flip-countdown";

const Puzzle = () => {
  return (
    <div className="Puzzle">
      <div className="boxes">
        <FlipCountdown
          hideYear
          hideMonth
          //hideDay
          // hideHour
          // hideMinute
          // hideSecond
          endAt={"2022-12-12 01:26:58"} // Date/Time
        />
      </div>
      <Typography variant="body" sx={{ color: "white" }}>
        Problem solved with DeltaMath
      </Typography>
    </div>
  );
};

export default Puzzle;
