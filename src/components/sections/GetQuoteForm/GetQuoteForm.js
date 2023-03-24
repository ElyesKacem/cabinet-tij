import React, { useEffect, useRef, useState } from "react";
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
import { FormValidator } from "./validation";
import { toast } from "react-hot-toast";
import { RQ_service } from "../../../services/services";
import GetText from "./GetQuoteForm.lang";

const initial_form = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  location: "",
  languages: "",
  source_lang: "",
  target_lang: "",
  notes: "",
  date: new Date(),
  files: [],
  FORM_TYPE: "translation",
  from: "Request a quote",
};

export default function GetQuoteForm() {
  const t = GetText();
  const menuData = [
    {
      title: t.translation,
      whiteIcon: whiteTranslation,
      blueIcon: blueTranslation,
    },
    {
      title: t.interpreting,
      whiteIcon: whiteInterpreting,
      blueIcon: blueInterpreting,
    },
    {
      title: t.transcription,
      whiteIcon: whiteTranscription,
      blueIcon: blueTranscription,
    },
    {
      title: t.vipServ,
      whiteIcon: whiteVIP,
      blueIcon: blueVIP,
    },
  ];

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
  const [allowedToOpen, setAllowedToOpen] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [form, setForm] = useState({ ...initial_form });
  const [sending, set_sending] = useState(false);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_image = (event) => {
    const files = [...form.files];

    Object.values(event.target.files).map((file) => files.push(file));

    setForm({ ...form, files: files });
  };

  useEffect(() => {
    let selected = menuData.filter((item, index) => {
      return menuSelected[index];
    })[0].title;
    // console.log(selected);
    setForm({ ...form, FORM_TYPE: selected });
  }, [menuSelected]);
  // console.log(form);
  const Handle_submit = () => {
    let result = FormValidator(form);

    let mFiles = [];
    if (singleFile) mFiles.push(singleFile);
    if (form.files?.length > 0) mFiles.push(...form.files);
    // console.log(mFiles);
    /*
    if (sending) {
      toast.error("we are sending please wait");
      return;
    }
    if (result) {
      set_sending(true);
      RQ_service(
        result,
        () => {
          toast.success("data sent successfully");
          setForm({ ...initial_form });
          // delete file from state
          set_sending(false);
          // use the navigation
        },
        () => {
          toast.error("there was an error while sending data");
          set_sending(false);
        }
      );
    }*/
  };

  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 800px)",
    medium: "(max-width: 1150px)",
    large: "(min-width: 1150px)",
  };

  return (
    <div className="getQuoteForm-main" id="getquote">
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
          <div className="getQuoteForm-content-title">{t.title}</div>
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
                        style={{
                          display: "flex",
                          gap: 10,
                        }}
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

          <div
            className="getQuoteForm-margin white-text"
            style={{ marginTop: 10 }}
          >
            {t.required}{" "}
            <i style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              (<b style={{ color: "red" }}>*</b>)
            </i>
          </div>
          <br />
          <br />
          <div>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12} style={{ marginBottom: 10 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput
                      onChange={handle_change}
                      name="full_name"
                      value={form?.full_name}
                      required
                      title={t.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput
                      onChange={handle_change}
                      name="company_name"
                      value={form?.company_name}
                      title={t.company}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput
                      onChange={handle_change}
                      name="email"
                      value={form?.email}
                      required
                      title={t.mail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput
                      onChange={handle_change}
                      name="phone"
                      value={form?.phone}
                      title={t.phone}
                    />
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
                          onChange={handle_change}
                          name={t.Location}
                          value={form?.location}
                        />
                        <FormRequestQuoteInput
                          required
                          title={t.sl}
                          onChange={handle_change}
                          name="source_lang"
                          value={form?.source_lang}
                          style={{ marginTop: 1 }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormRequestQuoteInput
                      onChange={handle_change}
                      name="target_lang"
                      value={form?.target_lang}
                      required
                      title={t.tl}
                    />
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
                            value={form?.date}
                          />
                          <FormRequestQuoteInput
                            required
                            title="Languages "
                            style={{ marginTop: 86 }}
                            onChange={handle_change}
                            name="languages"
                            value={form.languages}
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
                        <Calendar
                          setShowCalendar={setShowCalendar}
                          name="date"
                          onChange={handle_change}
                        />
                      </div>
                    </div>
                    <FormRequestQuoteInputMultiline
                      multiline
                      title={t.notes}
                      required
                      onChange={handle_change}
                      name="notes"
                      value={form.notes}
                    />
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
                            if (e.target.files.length > 0) {
                              // console.log("333", e.target.files[0]);
                              setSingleFile(e.target.files[0]);
                              setSingleFileName(e.target.files[0].name);
                            }
                          }}
                        />
                        <div className="getQuoteForm-input-file-button">
                          {t.SaF}
                        </div>

                        {singleFileName ? (
                          <>
                            <div className="getQuoteForm-input-file-label-text">
                              &nbsp;&nbsp;{singleFileName}{" "}
                            </div>
                          </>
                        ) : (
                          <span className="getQuoteForm-input-file-label-text">
                            &nbsp;&nbsp;{t.nofile}
                          </span>
                        )}
                      </label>
                      {singleFile && (
                        <div
                          className="getQuoteForm-input-file-label-X"
                          onClick={() => {
                            setSingleFile(null);
                            setSingleFileName(false);
                            //const { others, files } = form;
                            //setForm({...form});
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
                            handle_image(e);

                            form.files.push([e.target.files]);
                          }}
                          multiple
                        />
                        <div className="getQuoteForm-input-multipleFile-button">
                          <b style={{ fontFamily: "sans-serif", fontSize: 20 }}>
                            + &nbsp;&nbsp;{" "}
                          </b>{" "}
                          {t.AMF}
                        </div>
                        {form.files ? (
                          <>
                            {form.files.map((file, i) => (
                              <div
                                className="getQuoteForm-input-file-label-text"
                                key={i}
                              >
                                &nbsp;&nbsp;{file.name}{" "}
                              </div>
                            ))}
                          </>
                        ) : (
                          <span className="getQuoteForm-input-file-label-text">
                            &nbsp;&nbsp;{t.nofile}
                          </span>
                        )}
                      </label>
                      {form.files.length > 0 && (
                        <div
                          className="getQuoteForm-input-file-label-X"
                          onClick={() => {
                            setForm({ ...form, files: [] });
                            //const { others, files } = form;
                            //setForm({...form});
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
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <br />
                <br />

                <div className="flexalignjustify">
                  <div
                    onClick={Handle_submit}
                    className="getQuoteForm-submit-button"
                  >
                    {t.submit}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
