import React from "react";
import "./HoverImage.css";

export default function HoverImage(props) {
  const [isHover, setIsHover] = React.useState(false);
  const myStyle = {
    ...props.style,
  };
  return (
    <div className="flexalignjustify" style={{ myStyle }}>
      <div
        className={
          isHover
            ? "HoverImage-shader HoverImage-moveLeft"
            : "HoverImage-shader"
        }
      ></div>
      <img
        style={{ borderRadius: 5 }}
        onMouseLeave={() => {
          setIsHover(!isHover);
        }}
        onMouseEnter={() => {
          setIsHover(!isHover);
        }}
        src={props.img}
        className={
          isHover ? "HoverImage-image HoverImage-moveRight" : "HoverImage-image"
        }
        alt=""
      />
    </div>
  );
}
