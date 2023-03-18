import React from "react";
import "./doYouNeedMoreAssistance.css";
import Grid from "@mui/material/Grid";
import Image from "../../../assets/images/dynma.jpg";
import GetQuoteButton from "../../buttons/getQuoteButton/getQuoteButton";
import Media from "react-media";

export default function DoYouNeedMoreAssistance(props) {
  const GLOBAL_MEDIA_QUERIES = {
    medium: "(max-width: 1080px)",
    small: "(max-width: 600px)",
    large: "(min-width: 1080px)",
  };
  return (
    <div style={props.style}>
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {(matches.medium || matches.small) && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 30,
                  padding: 30,
                  flexDirection: "column",
                }}
              >
                {matches.small && (
                  <img
                    className="shortImage"
                    style={{ width: 390 }}
                    src={Image}
                  />
                )}
                {!matches.small && (
                  <img
                    className="shortImage"
                    style={{ width: 500 }}
                    src={Image}
                  />
                )}

                <div>
                  <p className="firstClass">Do You Need More Assistance?</p>
                  <p
                    style={{
                      fontSize: " 20px",
                      color: "grey",
                    }}
                  >
                    As per customer request, we can provide a suitable quote
                    based on the nature of the document that needs to be
                    translated. We offer the translation of different types of
                    documents including technical and official ones. Our main
                    goal is to provide our clients with all the help and
                    assistance that they need, so feel free to contact us in
                    order to receive a suitable quote.
                  </p>
                </div>

                <div>
                  <div className="RequestAQuoteButton">Request a Quote</div>
                </div>
              </div>
            )}
            {matches.large && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 30,
                    padding: 30,
                  }}
                >
                  <img
                    className="shortImage"
                    style={{ width: 390 }}
                    src={Image}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <p className="firstClass ">
                        Do You Need More Assistance?
                      </p>
                      <p
                        style={{
                          fontSize: " 21.5px",
                          color: "#4a4a4a",
                          lineHeight: "1.5",
                        }}
                      >
                        As per customer request, we can provide a suitable quote
                        based on the nature of the document that needs to be
                        translated. We offer the translation of different types
                        of documents including technical and official ones. Our
                        main goal is to provide our clients with all the help
                        and assistance that they need, so feel free to contact
                        us in order to receive a suitable quote.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="RequestAQuoteButton">Request a Quote</div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
