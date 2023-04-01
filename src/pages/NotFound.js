import React from "react";
import NF from "../assets/images/NotFound.png";
import Media from "react-media";

export default function NotFound() {
  const GLOBAL_MEDIA_QUERIES = {
    // medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 999px)",
    medium: "(max-width: 999px) and (min-width: 450px)",
    small: "(max-width: 450px)",
  };
  return (
    <div
      className="TalkToUsNowSection-background flexalignjustify"
      style={{ height: "800px" }}
    >
      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {matches.large && (
              <>
                <div
                  className="flexalignjustify"
                  style={{ flexDirection: "column" }}
                >
                  <img style={{ width: 600 }} src={NF} />
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <div
                  className="flexalignjustify"
                  style={{ flexDirection: "column" }}
                >
                  <img style={{ width: 430 }} src={NF} />
                </div>
              </>
            )}
            {matches.small && (
              <>
                <div
                  className="flexalignjustify"
                  style={{ flexDirection: "column" }}
                >
                  <img style={{ width: 330 }} src={NF} />
                </div>
              </>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
}
