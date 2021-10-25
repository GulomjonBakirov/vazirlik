import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { Link, NavLink } from "react-router-dom";

export default function AccordionInit() {
  const theme = useTheme();

  return (
    <div>
      <div className="flex my-1 p-1 border-b-2">
        <NavLink
          to="/myCourses/course/0"
          activeStyle={{ backgroundColor: "#f1f1f1" }}
          style={{ width: "100%" }}
        >
          <div className="flex flex-row p-4">
            <OndemandVideoIcon style={{ width: "30%" }} />
            <h3 style={{ width: "70%" }}>1-dars</h3>
          </div>
        </NavLink>
      </div>{" "}
      <div className="flex my-1 p-1 border-b-2 ">
        <NavLink
          to="/myCourses/course/1"
          activeStyle={{ backgroundColor: "#f2f2f2" }}
          style={{ width: "100%" }}
        >
          <div className="flex flex-row p-4">
            <OndemandVideoIcon style={{ width: "30%" }} />
            <h3 style={{ width: "70%" }}>1-dars</h3>
          </div>
        </NavLink>
      </div>{" "}
      <div className="flex my-1 p-1 border-b-2">
        <NavLink
          to="/myCourses/course/2"
          activeStyle={{ backgroundColor: "#f1f1f1" }}
          style={{ width: "100%" }}
        >
          <div className="flex flex-row p-4">
            <OndemandVideoIcon style={{ width: "30%" }} />
            <h3 style={{ width: "70%" }}>1-dars</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
