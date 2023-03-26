import React, { useState } from "react";
import "./TalkToUsNowSection.css";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import FormRequestQuoteInput, {
  FormRequestQuoteInputMultiline,
} from "../../buttons/FormRequestQuoteInput/FormRequestQuoteInput";
import Image1 from "../../../assets/images/TalkToUs/TalkToUs1.jpg";
import HoverImage from "../../HoverImage/HoverImage";
import VerticalBar from "../../verticalBar/verticalBar";
import Media from "react-media";
import { RQ_service } from "../../../services/services";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FormValidatorTalkToUs } from "../GetQuoteForm/validation";
import GetText from "./TalkToUsNowSection.lang";
import CircularProgress from "@mui/material/CircularProgress";
import { FadeLeft, FadeRight, FadeUp } from "../../../assets/Animations/Fade";

export default function TalkToUsNowSection() {
  const t = GetText();
  const [fileName, setFileName] = React.useState(false);
  const [file, setFile] = React.useState(false);
  const [sending, set_sending] = useState(false);
  const initial_form = {
    full_name: "",
    email: "",
    subject: "",
    notes: "",
    files: [],
    from: "Contact page form",
  };

  const [form, setForm] = useState({ ...initial_form });

  const handlePutFile = (e) => {
    if (e.target.files.length > 0) {
      // console.log("333", e.target.files[0]);

      let files = e.target.files[0];
      setFile(files);

      const fileNameArray = files.name.split("\\");
      setFileName(fileNameArray[fileNameArray.length - 1]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName(null);
    // setForm({ ...form, files: [] });
    // console.log("removed");
  };

  // const handle_image = (event) => {
  //   const files = [...form.files];
  //   Object.values(event.target.files).map((file) => {
  //     files.push(file);
  //   });
  //   setForm({ ...form, files: files });
  // };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const Handle_submit = () => {
    setForm({ ...form, files: [file] });

    const result = FormValidatorTalkToUs(t, { ...form, files: [file] });
    // console.log("prepared data ", { ...form, files: [file] });
    // console.log("Result : ", result);

    if (sending) {
      toast.error(t.sending);
      return;
    }
    if (result) {
      set_sending(true);
      toast.loading(t.sending, {
        icon: <CircularProgress sx={{ color: "blue" }} />,
      });
      RQ_service(
        result,
        () => {
          toast.success(t.success);
          setForm({ ...initial_form });
          // delete file from state
          set_sending(false);
          setFileName(false);
          setFile(false);
          // use the navigation
        },
        () => {
          toast.error(t.error);
          set_sending(false);
        }
      );
    }
  };

  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1200px)",
    medium: "(max-width: 1200px)",
    small: " (max-width: 640px)",
    vsmall: " (max-width: 471px)",
  };
  return (
    <div className="TalkToUsNowSection-background">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Media queries={GLOBAL_MEDIA_QUERIES}>
        {(matches) => (
          <React.Fragment>
            {(matches.medium || matches.small) && (
              <div style={{ width: "90%", maxWidth: 1500, margin: "auto" }}>
                <div
                  className="TalkToUsNowSection-title"
                  style={{ textAlign: "center" }}
                >
                  {t.h1}
                </div>
                <br />
                <div style={{ transform: "translateY(-20px)" }}>
                  {matches.small && (
                    <FadeUp>
                      <div style={{ transform: "scale(0.6)" }}>
                        <HoverImage img={Image1} />
                      </div>
                    </FadeUp>
                  )}
                  {!matches.small && (
                    <>
                      <br />
                      <br />
                      <br />
                      <FadeUp>
                        {" "}
                        <div>
                          <HoverImage img={Image1} />
                          <br />
                          <br />
                          <br />
                        </div>
                      </FadeUp>
                    </>
                  )}

                  <FadeUp>
                    <div className="TalkToUsNowSection-container">
                      <div
                        className="TalkToUsNowSection-subContainer"
                        style={{ paddingLeft: 8, paddingRight: 8 }}
                      >
                        <div className="TalkToUsNowSection-pinkb">{t.bt1}</div>
                        <div>contact@cabinet-tij.com</div>

                        <div>06 99 08 64 91</div>
                      </div>
                      <div
                        className="TalkToUsNowSection-subContainer"
                        style={{ paddingLeft: 8, paddingRight: 8 }}
                      >
                        <div className="TalkToUsNowSection-pinkb">{t.bt2}</div>

                        <div>3 rue Boccador, 75008 Paris.</div>
                      </div>
                    </div>
                  </FadeUp>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                  <div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div className="TalkToUsNowSection-paragraph">
                          {t.parag} &nbsp;
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/enrollement"
                          >
                            <b>{t.app}</b>
                          </Link>
                        </div>
                        <br />
                        <br />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 15,
                          }}
                        >
                          <div>
                            <FormRequestQuoteInput
                              onChange={handle_change}
                              name="full_name"
                              value={form.full_name}
                              required
                              title={t.name}
                            />
                          </div>
                          <div>
                            <FormRequestQuoteInput
                              onChange={handle_change}
                              name="email"
                              value={form.email}
                              required
                              title={t.mail}
                            />
                          </div>
                          <div>
                            <FormRequestQuoteInput
                              onChange={handle_change}
                              name="subject"
                              value={form.subject}
                              required
                              title={t.subject}
                            />
                          </div>
                          <div>
                            <FormRequestQuoteInputMultiline
                              multiline
                              required
                              title={t.notes}
                              onChange={handle_change}
                              name="notes"
                              value={form.notes}
                            />
                          </div>
                          <div>
                            {!matches.vsmall && (
                              <label
                                htmlFor="file"
                                className="TalkToUsNowSection-selectFile"
                              >
                                <input
                                  type="file"
                                  className="displaynone"
                                  id="file"
                                  onChange={(event) => handlePutFile(event)}
                                />
                                <div className="TalkToUsNowSection-selectFile-button">
                                  <div>{t.selectFile}</div>
                                </div>
                                <div className="EnrollementAttachFiles-fileName">
                                  {!fileName && t.nofile}
                                  {fileName && fileName}
                                </div>
                                {fileName && (
                                  <ClearIcon
                                    sx={{ fill: "url(#linearColors)" }}
                                    style={{
                                      transform: "translateY(2px)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleRemoveFile}
                                  ></ClearIcon>
                                )}
                              </label>
                            )}
                            {matches.vsmall && (
                              <label
                                htmlFor="file"
                                className="TalkToUsNowSection-selectFile"
                                style={{
                                  flexDirection: "column",
                                  alignItems: "start",
                                }}
                              >
                                <input
                                  type="file"
                                  className="displaynone"
                                  id="file"
                                  onChange={(event) => handlePutFile(event)}
                                />

                                <div className="TalkToUsNowSection-selectFile-button">
                                  <div>{t.selectFile}</div>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    className="EnrollementAttachFiles-fileName"
                                    style={{
                                      maxWidth: 200,
                                      display: "flex",
                                      gap: 20,
                                    }}
                                  >
                                    <div>
                                      {!fileName && t.nofile}
                                      {fileName && fileName}
                                    </div>
                                  </div>
                                  <div>
                                    {fileName && (
                                      <ClearIcon
                                        sx={{ fill: "url(#linearColors)" }}
                                        style={{
                                          transform: "translateY(2px)",
                                          cursor: "pointer",
                                        }}
                                        onClick={handleRemoveFile}
                                      ></ClearIcon>
                                    )}
                                  </div>
                                </div>
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div
                        onClick={Handle_submit}
                        className="getQuoteForm-submit-button"
                        style={{ transform: "translateY(0px)" }}
                      >
                        {t.submit}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {matches.large && (
              <div style={{ width: "90%", maxWidth: 1500, margin: "auto" }}>
                <VerticalBar top="55%" left="50px" />
                <VerticalBar top="17%" left="47%" />
                <VerticalBar top="90%" left="90%" />
                <Grid container>
                  <Grid item xs={6}>
                    <FadeRight>
                      <div
                        style={{
                          width: "90%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div className="TalkToUsNowSection-title">{t.h1}</div>
                          <br />
                          <div className="TalkToUsNowSection-paragraph">
                            {t.parag} &nbsp;
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/enrollement"
                            >
                              <b>{t.app}</b>
                            </Link>
                          </div>
                          <br />
                          <br />

                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <FormRequestQuoteInput
                                onChange={handle_change}
                                name="full_name"
                                value={form.full_name}
                                required
                                title={t.name}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormRequestQuoteInput
                                onChange={handle_change}
                                name="email"
                                value={form.email}
                                required
                                title={t.mail}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormRequestQuoteInput
                                onChange={handle_change}
                                name="subject"
                                value={form.subject}
                                required
                                title={t.subject}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormRequestQuoteInputMultiline
                                multiline
                                required
                                title={t.notes}
                                onChange={handle_change}
                                name="notes"
                                value={form.notes}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <label
                                htmlFor="file"
                                className="TalkToUsNowSection-selectFile"
                              >
                                <input
                                  type="file"
                                  className="displaynone"
                                  id="file"
                                  onChange={(event) => handlePutFile(event)}
                                />
                                <div className="TalkToUsNowSection-selectFile-button">
                                  <div>{t.selectFile}</div>
                                </div>
                                <div className="EnrollementAttachFiles-fileName">
                                  {!fileName && t.nofile}
                                  {fileName && fileName}
                                </div>
                                {fileName && (
                                  <ClearIcon
                                    sx={{ fill: "url(#linearColors)" }}
                                    style={{
                                      transform: "translateY(2px)",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleRemoveFile}
                                  ></ClearIcon>
                                )}
                              </label>
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <br />
                        <div
                          onClick={Handle_submit}
                          className="getQuoteForm-submit-button"
                        >
                          {t.submit}
                        </div>
                      </div>
                    </FadeRight>
                  </Grid>
                  <Grid item xs={6} style={{ transform: "translateY(20px)" }}>
                    <FadeLeft>
                      <HoverImage img={Image1} />
                      <br />
                      <br />
                      <br />
                      <div className="TalkToUsNowSection-container">
                        <div className="TalkToUsNowSection-subContainer">
                          <div className="TalkToUsNowSection-pinkb">
                            {t.bt1}
                          </div>
                          <div>contact@cabinet-tij.com</div>
                          <div>06 99 08 64 91</div>
                        </div>
                        <div className="TalkToUsNowSection-subContainer">
                          <div className="TalkToUsNowSection-pinkb">
                            {t.bt2}
                          </div>
                          <div>3 rue Boccador, 75008 Paris.</div>
                        </div>
                      </div>
                    </FadeLeft>
                  </Grid>
                </Grid>
              </div>
            )}
          </React.Fragment>
        )}
      </Media>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
