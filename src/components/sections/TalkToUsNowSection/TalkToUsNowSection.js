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

export default function TalkToUsNowSection() {
  const t = GetText();
  const [fileName, setFileName] = React.useState();
  const [file, setFile] = React.useState();
  const [sending, set_sending] = useState(false);
  const initial_form = {
    full_name: "",
    email: "",
    subject: "",
    notes: "",
    files: [],
    from: "Request a quote",
  };

  const [form, setForm] = useState({ ...initial_form });

  const handlePutFile = (e) => {
    let file = e.target.value;
    setFile(file);
    const fileNameArray = file.split("\\");
    setFileName(fileNameArray[fileNameArray.length - 1]);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileName(null);
  };

  const handle_image = (event) => {
    const files = [...form.files];
    Object.values(event.target.files).map((file) => {
      files.push(file);
    });
    setForm({ ...form, files: files });
  };

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const Handle_submit = () => {
    let result = FormValidatorTalkToUs(form);

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
    }
  };

  const GLOBAL_MEDIA_QUERIES = {
    large: "(min-width: 1200px)",
    medium: "(max-width: 1200px)",
    small: " (max-width: 640px)",
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
                    <div style={{ transform: "scale(0.6)" }}>
                      <HoverImage img={Image1} />
                    </div>
                  )}
                  {!matches.small && (
                    <>
                      <br />
                      <br />
                      <br />
                      <div>
                        <HoverImage img={Image1} />
                        <br />
                        <br />
                        <br />
                      </div>
                    </>
                  )}

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
                  </Grid>
                  <Grid item xs={6} style={{ transform: "translateY(20px)" }}>
                    <HoverImage img={Image1} />
                    <br />
                    <br />
                    <br />
                    <div className="TalkToUsNowSection-container">
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">{t.bt1}</div>
                        <div>contact@cabinet-tij.com</div>
                        <div>06 99 08 64 91</div>
                      </div>
                      <div className="TalkToUsNowSection-subContainer">
                        <div className="TalkToUsNowSection-pinkb">{t.bt2}</div>
                        <div>3 rue Boccador, 75008 Paris.</div>
                      </div>
                    </div>
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
