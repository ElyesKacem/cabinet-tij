import React, { useRef, useState } from "react";
import "./GetQuoteForm.css";
import RequestQuoteButton from "../../buttons/RequestQuoteButton/RequestQuoteButton";
import Grid from "@mui/material/Grid";
import FormRequestQuoteInput, {
  DateInputGetQuote,
  FormRequestQuoteInputMultiline,
} from "../../buttons/FormRequestQuoteInput/FormRequestQuoteInput";
import whiteTranslation from "../../../assets/images/request a quote icons/whiteTranslation.svg";
import whiteInterpreting from "../../../assets/images/request a quote icons/whiteInterpreting.svg";
import whiteTranscription from "../../../assets/images/request a quote icons/whiteTranscription.svg";
import whiteVIP from "../../../assets/images/request a quote icons/whiteVIP.svg";
import blueTranslation from "../../../assets/images/request a quote icons/blueTranslation.svg";
import blueInterpreting from "../../../assets/images/request a quote icons/blueInterpreting.svg";
import blueTranscription from "../../../assets/images/request a quote icons/blueTranscription.svg";
import blueVIP from "../../../assets/images/request a quote icons/blueVIP.svg";
import ClearIcon from "@mui/icons-material/Clear";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";

import Calendar from "../../calendar/calendar";

export default function GetQuoteForm() {
  function useOutsideAlerter(ref) {
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowCalendar(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const [singleFile, setSingleFile] = useState(false);
  const [singleFileName, setSingleFileName] = useState(false);
  const [menuSelected, setMenuSelected] = useState([true, false, false, false]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [allowedToOpen, setAllowedToOpen] = useState(true);
  const disabledDays = { before: new Date() };

  const [form, setForm] = useState({
    first_name: "",
    company_name: "",
    email: "",
    phone: "",
    source_lang: "",
    target_lang: "",
    notes: "",
    files: [],
    FORM_TYPE: "",
  });

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const menuData = [
    {
      title: "Translation",
      whiteIcon: whiteTranslation,
      blueIcon: blueTranslation,
    },
    {
      title: "Interpreting",
      whiteIcon: whiteInterpreting,
      blueIcon: blueInterpreting,
    },
    {
      title: "Transcription",
      whiteIcon: whiteTranscription,
      blueIcon: blueTranscription,
    },
    {
      title: "VIP Services",
      whiteIcon: whiteVIP,
      blueIcon: blueVIP,
    },
  ];
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 600px)",
    medium: "(min-width: 600px) and (max-width: 1150px)",
    large: "(min-width: 1150px)",
  };

  return (
    <div className="getQuoteForm-main">
      <VerticalBar top="55%" left="50px" />
      <VerticalBar top="17%" left="40%" />
      <VerticalBar top="90%" left="90%" />
      <div className="getQuoteForm-overlay"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="getQuoteForm-content">
        <div style={{ width: "85%", maxWidth: 1300 }}>
          <div className="getQuoteForm-content-title">Request A Quote</div>
          <br />

          <Media queries={GLOBAL_MEDIA_QUERIES}>
            {(matches) => (
              <React.Fragment>
                {(matches.medium || matches.small) && (
                  <div>
                    <div
                      className="getQuoteForm-margin"
                      style={{ width: "100%", overflowX: "scroll" }}
                    >
                      <div
                        className="getQuoteForm-margin"
                        style={{ display: "flex", gap: 30 }}
                      >
                        {menuData.map((element, index) => (
                          <div key={index} className="getQuoteForm-mobile-menu">
                            <RequestQuoteButton
                              style={{ width: 300 }}
                              setMenuSelected={setMenuSelected}
                              icon={
                                menuSelected[index]
                                  ? element.whiteIcon
                                  : element.blueIcon
                              }
                              blue={menuSelected[index]}
                              id={index}
                              title={element.title}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {matches.large && (
                  <div>
                    <div className="getQuoteForm-margin">
                      <Grid
                        className="getQuoteForm-margin"
                        container
                        spacing={1}
                      >
                        {menuData.map((element, index) => (
                          <Grid key={index} item xs={3}>
                            <RequestQuoteButton
                              setMenuSelected={setMenuSelected}
                              icon={
                                menuSelected[index]
                                  ? element.whiteIcon
                                  : element.blueIcon
                              }
                              blue={menuSelected[index]}
                              id={index}
                              title={element.title}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          </Media>

          <div className="getQuoteForm-margin white-text">
            Required fields are marked with asterisk{" "}
            <i style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              (<b style={{ color: "red" }}>&nbsp;*</b>)
            </i>
          </div>
          <br />
          <br />
          <div>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12} style={{ marginBottom: 10 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Full Name " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput title="Company name " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="E mail " />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Phone Number " />
                  </Grid>
                  <Grid item xs={12}>
                    <div className="getQuoteForm-hidden getQuoteForm-animation">
                      <div style={{ transform: "translateY(-52px)" }}>
                        <FormRequestQuoteInput
                          className={
                            menuSelected[1] || menuSelected[3]
                              ? "getQuoteForm-animation translateYdown52"
                              : "getQuoteForm-animation"
                          }
                          style={{ position: "relative", zIndex: "3" }}
                          required
                          title="Location "
                        />
                        <FormRequestQuoteInput
                          required
                          title="Source Language "
                          style={{ marginTop: 1 }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput required title="Target Language " />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="getQuoteForm-hidden getQuoteForm-animation">
                      <div
                        className={
                          menuSelected[1] || menuSelected[3]
                            ? "translateYdown getQuoteForm-animation"
                            : menuSelected[2]
                            ? "translateYup70 getQuoteForm-animation"
                            : "getQuoteForm-animation"
                        }
                      >
                        <div style={{ transform: "translateY(-67px)" }}>
                          <DateInputGetQuote
                            className={showCalendar ? "pointerNone" : ""}
                            allowedToOpen={allowedToOpen}
                            setAllowedToOpen={setAllowedToOpen}
                            showCalendar={showCalendar}
                            setShowCalendar={setShowCalendar}
                            title="Date "
                          />
                          <FormRequestQuoteInput
                            required
                            title="Languages "
                            style={{ marginTop: 86 }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ position: "relative" }}
                    className={
                      menuSelected[0]
                        ? "getQuoteForm-animation translateYup"
                        : "getQuoteForm-animation"
                    }
                  >
                    <div ref={wrapperRef} style={{ position: "relative" }}>
                      <div
                        className={
                          showCalendar
                            ? "calendar-container opacity-transition"
                            : "calendar-container opacity-transition hideCalendar"
                        }
                      >
                        <Calendar />
                      </div>
                    </div>
                    <FormRequestQuoteInputMultiline
                      multiline
                      title="Notes "
                      required
                    ></FormRequestQuoteInputMultiline>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={
                      menuSelected[0]
                        ? "getQuoteForm-animation getQuoteForm-input-label translateYup52"
                        : "getQuoteForm-animation getQuoteForm-input-label"
                    }
                  >
                    <div style={{ display: "flex" }}>
                      <label
                        className="getQuoteForm-input-file-label"
                        htmlFor="requotefile"
                      >
                        <input
                          type="file"
                          className="getQuoteForm-input-file"
                          placeholder="Full Name"
                          id="requotefile"
                          onChange={(e) => {
                            let file = e.target.value;
                            setSingleFile(file);
                            const fileNameArray = file.split("\\");
                            setSingleFileName(
                              fileNameArray[fileNameArray.length - 1]
                            );
                          }}
                        />
                        <div className="getQuoteForm-input-file-button">
                          Select a file
                        </div>

                        {singleFileName ? (
                          <>
                            <div className="getQuoteForm-input-file-label-text">
                              &nbsp;&nbsp;{singleFileName}{" "}
                            </div>
                          </>
                        ) : (
                          <>&nbsp;&nbsp;No file chosen</>
                        )}
                      </label>
                      {singleFile && (
                        <div
                          className="getQuoteForm-input-file-label-X"
                          onClick={() => {
                            setSingleFile(null);
                            setSingleFileName(false);
                          }}
                        >
                          &nbsp;&nbsp;
                          <ClearIcon
                            sx={{ fill: "url(#linearColors)" }}
                            className="getQuoteForm-input-file-label-X"
                          ></ClearIcon>{" "}
                        </div>
                      )}
                    </div>
                    {/* </Grid> */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={
                      menuSelected[0]
                        ? "getQuoteForm-animation translateYup"
                        : "getQuoteForm-animation"
                    }
                    style={{ marginTop: 42 }}
                  >
                    <div style={{ transform: "translateY(-13px)" }}>
                      <label
                        className="getQuoteForm-input-file-label"
                        htmlFor="requoteMULTIPLEfile"
                      >
                        <input
                          type="file"
                          className="getQuoteForm-input-file"
                          placeholder="Full Name"
                          id="requoteMULTIPLEfile"
                          onChange={(e) => {
                            let file = e.target.value;
                            setSingleFile(file);
                            const fileNameArray = file.split("\\");
                            setSingleFileName(
                              fileNameArray[fileNameArray.length - 1]
                            );
                          }}
                          multiple
                        />
                        <div className="getQuoteForm-input-multipleFile-button">
                          <b style={{ fontFamily: "sans-serif", fontSize: 20 }}>
                            + &nbsp;&nbsp;{" "}
                          </b>{" "}
                          Add More Files
                        </div>
                      </label>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <br />
                <br />

                <div className="flexalignjustify">
                  <div className="getQuoteForm-submit-button">Submit</div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
