import React from "react";
import "./homePhotoHover.css";
import RemoveIcon from "@mui/icons-material/Remove";
import EastIcon from "@mui/icons-material/East";
import { HashLink } from "react-router-hash-link";
import { LangContext } from "../../context/Lang.context";

export default function HomePhotoHover(props) {
  const [gradient, setGradient] = React.useState(true);
  const { lang } = React.useContext(LangContext);
  // console.log(props.img);
  return (
    <div style={{ marginTop: 10 }}>
      <HashLink className="resetcss" smooth to="/requestquote#getquote">
        <div
          className="homePhotoHover"
          style={{
            borderRadius: 6,
            // backgroundImage: !gradient && `url(${props.img})`,
            backgroundImage: gradient
              ? `linear-gradient(0deg, rgba(36, 45, 101, 0),rgba(207, 32, 50, 0), rgba(255,255,255, 0.0),rgba(255,255,255, 0.0)),url(${props.img})`
              : `linear-gradient(0deg,rgba(207, 32, 50, 0.8), rgba(36, 45, 101, 0.8), rgba(255,255,255, 0.0),rgba(255,255,255, 0.0)),url(${props.img})`,
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
              <div>{lang == "en" ? "Learn More" : "En savoir plus"}</div>
            </div>
          </div>
        </div>
      </HashLink>
    </div>
  );
}
