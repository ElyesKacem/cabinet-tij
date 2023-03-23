import React, { useState } from "react";
import "./getInTouchWithUs.css";
import Grid from "@mui/material/Grid";
import Media from "react-media";
import { FormValidator } from "./validation";
import { toast } from "react-hot-toast";

import { RQ_service } from "../../../services/services";
import LeftRightButton from "../../buttons/leftRightButton/leftRightButton";

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
  from: "Get in touch with us",
};

export default function GetInTouchWithUs() {
  const [form, setForm] = useState({ ...initial_form });
  const [sending, set_sending] = useState(false);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const Handle_submit = () => {
    let result = FormValidator(form);
    if (sending) {
      toast.error("we are sending please wait");
    }
    if (result) {
      set_sending(true);
      RQ_service(
        result,
        () => {
          toast.success("data sent successfully");
          setForm({ ...initial_form });
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
                <div className="getInTouchWithUsFrom-title">
                  Get In Touch With Us
                </div>
                <br />
                <br />
                <Grid container spacing={5}>
                  <Grid item xs={12} md={6}>
                    <input
                      required
                      type="text"
                      placeholder="Your Name *"
                      className="getInTouchWithUsFrom-input"
                      name="full_name"
                      value={form.full_name}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder="Company *"
                      className="getInTouchWithUsFrom-input"
                      name="company"
                      value={form.company}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder="Your Email *"
                      className="getInTouchWithUsFrom-input"
                      name="email"
                      value={form.email}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input
                      type="text"
                      placeholder="Subject *"
                      className="getInTouchWithUsFrom-input"
                      name="subject"
                      value={form.subject}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <textarea
                      placeholder="Your Subject  *"
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
                  isWhite
                  title="Submit"
                  style={{
                    transform: "translateX(15px)",
                    padding: "10px 0px 6px 10px",
                  }}
                />
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
                  Get In Touch {matches.verySmall && <br />} With Us
                </div>
                <br />
                <br />
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <input
                      required
                      type="text"
                      placeholder="Your Name *"
                      className="getInTouchWithUsFrom-input"
                      name="full_name"
                      value={form.full_name}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder="Company *"
                      className="getInTouchWithUsFrom-input"
                      name="company"
                      value={form.company}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder="Your Email *"
                      className="getInTouchWithUsFrom-input"
                      name="email"
                      value={form.email}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      placeholder="Subject *"
                      className="getInTouchWithUsFrom-input"
                      name="subject"
                      value={form.subject}
                      onChange={handle_change}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <textarea
                      placeholder="Your Subject  *"
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
                  isWhite
                  title="Submit"
                  style={{
                    transform: "translateX(15px)",
                    padding: "10px 0px 6px 10px",
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
