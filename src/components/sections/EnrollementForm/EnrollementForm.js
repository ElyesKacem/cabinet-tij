import React, { useState } from "react";
import "./EnrollementForm.css";
import Grid from "@mui/material/Grid";
import FormRequestQuoteInput from "../../buttons/FormRequestQuoteInput/FormRequestQuoteInput";
import EnrollementAttachFiles from "../../EnrollementAttachFiles/EnrollementAttachFiles";
import Media from "react-media";
import { FormValidator } from "./validation";
import { toast } from "react-hot-toast";

import { RQ_service } from "../../../services/services";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 999px)",
  // medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1000px)",
};

const initial_form = {
  full_name: "",
  phone: "",
  city: "",
  email: "",
  adress: "",
  postal_code: "",

  spoken_lang: "",
  diploma1: "",
  exp1: "",
  diploma2: "",
  exp2: "",

  files: [],
};

export default function EnrollementForm() {
  const [form, setForm] = useState({ ...initial_form });
  const [sending, set_sending] = useState(false);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_image = (event) => {
    const files = [...form.files];
    Object.values(event.target.files).map((file) => {
      files.push(file);
    });
    setForm({ ...form, files: files });
  };

  const Handle_submit = () => {
    let result = FormValidator(form);
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
    <div className="flexalignjustify white-background">
      <div className="flexalignjustify EnrollementForm-content">
        <br />
        <br />
        <br />
        <div className="EnrollementForm-paragraph">
          On average, it takes our services <b>2</b> to <b>4</b> weeks to
          process your application.
        </div>
        <div className="EnrollementForm-paragraph">
          Additional requests may be sent to you via email. Once your
          application is approve
        </div>
        <div className="EnrollementForm-paragraph">
          a repsresentative will contact you to provide you with further
          information
        </div>

        <b className="EnrollementForm-blackTitle">Apply For Affiliation</b>
        <b className="EnrollementForm-title">Identity</b>
        <br />
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Full name"
              required
              name="full_name"
              value={form.full_name}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Phone"
              name="phone"
              value={form.phone}
              onChange={handle_change}
              required
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="City"
              name="city"
              value={form.city}
              onChange={handle_change}
              required
            />
            <br />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title="E-mail"
              name="email"
              value={form.email}
              onChange={handle_change}
              required
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Adress"
              required
              name="adress"
              value={form.adress}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Postal Code"
              required
              name="postal_code"
              value={form.postal_code}
              onChange={handle_change}
            />
            <br />
          </Grid>
        </Grid>
        <b
          className="EnrollementForm-title"
          style={{ width: 120, textAlign: "center" }}
        >
          Expertise And Experience
        </b>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Spoken Languages ( with priority )"
              required
              name="spoken_lang"
              value={form.spoken_lang}
              onChange={handle_change}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Diploma 1"
              required
              name="diploma1"
              value={form.diploma1}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Experience 1"
              required
              name="exp1"
              value={form.exp1}
              onChange={handle_change}
            />
            <br />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Diploma 2"
              required
              name="diploma2"
              value={form.diploma2}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title="Experience 2"
              required
              name="exp2"
              value={form.exp2}
              onChange={handle_change}
            />
            <br />
          </Grid>
        </Grid>
        <b className="EnrollementForm-title">Attach Files</b>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              {matches.large && (
                <>
                  <div className="Enrollement-attach-files">
                    <div>
                      <EnrollementAttachFiles
                        onChange={handle_image}
                        title="Attestation insee or Kbis"
                      />
                      <EnrollementAttachFiles
                        onChange={handle_image}
                        title="Identity document"
                      />
                    </div>
                    <div>
                      <EnrollementAttachFiles
                        onChange={handle_image}
                        title="Criminal record extract"
                      />
                      <EnrollementAttachFiles
                        onChange={handle_image}
                        title="Professional Photo"
                      />
                    </div>
                  </div>
                  <label>
                    <input className="displaynone" type="file" multiple />
                    <div
                      className="EnrollementForm-multiple-files"
                      style={{ transform: "translateX(10px)" }}
                    >
                      <b style={{ fontFamily: "sans-serif" }}>+</b> Add More
                      Files
                    </div>
                  </label>
                </>
              )}

              {matches.small && (
                <>
                  <div
                    className="Enrollement-attach-files"
                    style={{
                      flexDirection: "column",
                      transform: "translateX(-30px)",
                      gap: 0,
                    }}
                  >
                    <br />
                    <EnrollementAttachFiles
                      onChange={handle_image}
                      title="Attestation insee or Kbis"
                    />
                    <EnrollementAttachFiles
                      onChange={handle_image}
                      title="Identity document"
                    />
                    <EnrollementAttachFiles
                      onChange={handle_image}
                      title="Criminal record extract"
                    />
                    <EnrollementAttachFiles
                      onChange={handle_image}
                      title="Professional Photo"
                    />
                  </div>
                  <label>
                    <input className="displaynone" type="file" multiple />
                    <div
                      className="EnrollementForm-multiple-files"
                      style={{
                        padding: "10px 40px 10px 40px",
                        transform: "translateX(10px)",
                      }}
                    >
                      <b style={{ fontFamily: "sans-serif" }}>+</b>
                      <span>Add More Files</span>
                    </div>
                  </label>
                </>
              )}
            </React.Fragment>
          )}
        </Media>

        <br />
        <br />
        <div className="EnrollementForm-submit">
          <div className="EnrollementForm-submit-title" onClick={Handle_submit}>
            Submit
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
