import React from "react";
import "./homePhotoHover.css";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";

export default function HomePhotoHover(props) {
  // console.log(props.img);
  return (
    <div>
      <div
        className="homePhotoHover"
        style={{ backgroundImage: `url(${props.img})` }}
        onMouseLeave={() => {
          props.setIsHover([false, false, false, false, false]);
        }}
        onMouseEnter={() => {
          let isHover = [false, false, false, false, false];
          isHover[props.id] = true;
          props.setIsHover(isHover);
        }}
      >
        <div className="homePhotoHoverOverlay"></div>

        <EastIcon className="homePhotoHover-arrow"></EastIcon>
        <div className="homePhotoHover-content">
          <div className="homePhotoHover-title">
            <div className="homePhotoHover-dash">
              <RemoveIcon></RemoveIcon>
            </div>
            {props.title}
          </div>
          <div className="homePhotoHover-paragraph">Learn More</div>
        </div>
      </div>
    </div>
  );
}
