import React, { useState } from "react";
import "./getInTouchWithUs.css";
import Grid from "@mui/material/Grid";
import Media from "react-media";
import { FormValidator } from "./validation";
import { toast } from "react-hot-toast";

import { RQ_service } from "../../../services/services";
import LeftRightButton from "../../buttons/leftRightButton/leftRightButton";
import GetText from "./getInTouchWithUs.lang";
import { LangContext } from "../../../context/Lang.context";
import CircularProgress from "@mui/material/CircularProgress";
const GLOBAL_MEDIA_QUERIES = {
  large: "(min-width: 700px)",
  medium: "(max-width: 700px)",
  small: "(max-width: 600px)",
  verySmall: "(max-width: 406px)",
  mobile: "(max-width: 900px)",
};

const initial_form = {
  full_name: "",
  company: "",
  email: "",
  subject: "",
  content: "",
  files: [],
  from: "Home contact form",
};

export default function GetInTouchWithUs() {
  const { lang } = React.useContext(LangContext);
  const texts = GetText();
  const [form, setForm] = useState({ ...initial_form });
  const [sending, set_sending] = useState(false);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const Handle_submit = () => {
    let result = FormValidator(texts, form);

    if (sending) {
      toast.error(texts.sending);
    }
    if (result) {
      set_sending(true);
      toast.loading(texts.sending, {
        icon: <CircularProgress sx={{ color: "blue" }} />,
      });
      RQ_service(
        result,
        () => {
          toast.success(texts.success);
          setForm({ ...initial_form });
          set_sending(false);
          // use the navigation
        },
        () => {
          toast.error(texts.error);
          set_sending(false);
        }
      );
    }
  };

  return (
    <Media queries={GLOBAL_MEDIA_QUERIES}>
      {(matches) => (
        <React.Fragment>
          {matches.large && (
            <div className="getInTouchWithUs">
              <br />
              <br />
              <br />
              <br />
              <div className="getInTouchWithUsFrom">
                <div className="getInTouchWithUsFrom-title">{texts.title}</div>
                <br />
                <br />
                <Grid container spacing={5}>
                  <Grid item xs={12} md={6}>
                    <input
                      required
                      type="text"
                      placeholder={texts.name + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="full_name"
                      value={form.full_name}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder={texts.company + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="company"
                      value={form.company}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder={texts.mail + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="email"
                      value={form.email}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder={texts.subject + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="subject"
                      value={form.subject}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <textarea
                      placeholder={texts.content + " *"}
                      style={{ width: "99%", resize: "none" }}
                      className="getInTouchWithUsFrom-input"
                      name="content"
                      value={form.content}
                      onChange={handle_change}
                    />
                  </Grid>
                </Grid>
                <br />
                <br />
                <div onClick={Handle_submit}>
                  <LeftRightButton
                    iconStyle={{ transform: "scale(0.9) translateY(-3px)" }}
                    isWhite
                    title={texts.sub}
                    style={{
                      transform: "translateX(15px)",
                      fontSize: 16,
                      padding: "14px 0px 6px 10px",
                      width: 160,
                    }}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
          {(matches.medium || matches.small) && (
            <div
              className="getInTouchWithUs"
              style={{ padding: matches.small ? 20 : 40 }}
            >
              <br />
              <br />
              <br />
              <br />
              <div
                className="getInTouchWithUsFrom"
                style={{
                  width: "auto",
                  padding: matches.small
                    ? "36px 50px 44px 26px"
                    : "60px 125px 60px 100px",
                }}
              >
                <div className="getInTouchWithUsFrom-title">
                  {lang == "en" ? (
                    <>Get In Touch {matches.verySmall && <br />} With Us</>
                  ) : (
                    "Nous contacter"
                  )}
                </div>
                <br />
                <br />
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <input
                      required
                      type="text"
                      placeholder={texts.name + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="full_name"
                      value={form.full_name}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder={texts.company + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="company"
                      value={form.company}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder={texts.mail + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="email"
                      value={form.email}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder={texts.subject + " *"}
                      className="getInTouchWithUsFrom-input"
                      name="subject"
                      value={form.subject}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      placeholder={texts.content + " *"}
                      style={{ width: "99%", resize: "none" }}
                      className="getInTouchWithUsFrom-input"
                      name="content"
                      value={form.content}
                      onChange={handle_change}
                    />
                  </Grid>
                </Grid>
                <br />
                <br />

                <LeftRightButton
                  onClick={Handle_submit}
                  iconStyle={{ transform: "scale(0.9)" }}
                  isWhite
                  title={texts.sub}
                  style={{
                    transform: "translateX(15px)",
                    fontSize: 18,
                    padding: "14px 0px 6px 10px",
                    width: 160,
                  }}
                />
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
        </React.Fragment>
      )}
    </Media>
  );
}
