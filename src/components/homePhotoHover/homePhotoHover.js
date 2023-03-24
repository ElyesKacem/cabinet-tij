import React from "react";
import "./homePhotoHover.css";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";
import { HashLink } from "react-router-hash-link";

export default function HomePhotoHover(props) {
  const [gradient, setGradient] = React.useState(false);
  // console.log(props.img);
  return (
    <div>
      <div
        className="homePhotoHover"
        style={{
          // backgroundImage: !gradient && `url(${props.img})`,
          backgroundImage: gradient
            ? `linear-gradient(0deg, rgba(39, 66, 228, 0), rgba(255,255,255, 0.0)),url(${props.img})`
            : `linear-gradient(0deg, rgba(39, 66, 228, 1), rgba(255,255,255, 0.0)),url(${props.img})`,
        }}
        onMouseLeave={() => {
          setGradient(true);
          props.setIsHover([false, false, false, false, false]);
        }}
        onMouseEnter={() => {
          let isHover = [false, false, false, false, false];
          isHover[props.id] = true;
          props.setIsHover(isHover);
          setGradient(false);
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

          <div className="homePhotoHover-paragraph">
            <HashLink className="resetcss" smooth to="/requestquote#getquote">
              <div>Learn More</div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
