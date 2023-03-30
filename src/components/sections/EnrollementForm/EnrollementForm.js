import React, { useState } from "react";
import "./EnrollementForm.css";
import Grid from "@mui/material/Grid";
import FormRequestQuoteInput from "../../buttons/FormRequestQuoteInput/FormRequestQuoteInput";
import EnrollementAttachFiles from "../../EnrollementAttachFiles/EnrollementAttachFiles";
import Media from "react-media";
import { FormValidator } from "./validation";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

import { RQ_service } from "../../../services/services";
import GetText from "./EnrollementForm.lang";
// import { useNavigate } from "react-router-dom";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 1056px)",
  // medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1056px)",
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
  // const navigate = useNavigate();
  const [form, setForm] = useState({ ...initial_form });
  const [sending, set_sending] = useState(false);
  const [inseeKbis, setInseeKbis] = useState(false);
  const [identityDoc, setIdentityDoc] = useState(false);
  const [criminalRecord, setCriminalRecord] = useState(false);
  const [proPhoto, setProPhoto] = useState(false);
  const t = GetText();

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
    let result = FormValidator(t, {
      ...form,
      inseeKbis: inseeKbis,
      identityDoc: identityDoc,
      criminalRecord: criminalRecord,
      proPhoto: proPhoto,
    });
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
          set_sending(false);
          setInseeKbis(false);
          setIdentityDoc(false);
          setCriminalRecord(false);
          setProPhoto(false);
          // navigate("/");
          // use the navigation
          window.location.reload(false);
        },
        () => {
          toast.error(t.error);
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
        <div style={{ padding: 13 }}>
          <div className="EnrollementForm-paragraph">
            {t.h1} <b>2</b> {t.h2} <b>4</b> {t.h3}
          </div>
          <div className="EnrollementForm-paragraph">{t.l2}</div>
          <div className="EnrollementForm-paragraph">{t.l3}</div>
        </div>

        <b className="EnrollementForm-blackTitle">{t.applyFor}</b>
        <b className="EnrollementForm-title">{t.identity}</b>
        <br />
        <Grid
          style={{ paddingLeft: 20, paddingRight: 20 }}
          container
          spacing={4}
        >
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.name}
              required
              name="full_name"
              value={form.full_name}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.phone}
              name="phone"
              value={form.phone}
              onChange={handle_change}
              required
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.city}
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
              title={t.mail}
              name="email"
              value={form.email}
              onChange={handle_change}
              required
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.adress}
              required
              name="adress"
              value={form.adress}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.codePostal}
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
          {t.exandex1}
          <br />
          {t.exandex2}
          <br />
          {t.exandex3}
        </b>
        <br />
        <Grid
          style={{ paddingLeft: 20, paddingRight: 20 }}
          container
          spacing={4}
        >
          <Grid item xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.sokenLang}
              required
              name="spoken_lang"
              value={form.spoken_lang}
              onChange={handle_change}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.dip1}
              required
              name="diploma1"
              value={form.diploma1}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.exp1}
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
              title={t.dip2}
              required
              name="diploma2"
              value={form.diploma2}
              onChange={handle_change}
            />
            <br />
            <FormRequestQuoteInput
              borderRadius="5px"
              title={t.exp2}
              required
              name="exp2"
              value={form.exp2}
              onChange={handle_change}
            />
            <br />
          </Grid>
        </Grid>
        <b className="EnrollementForm-title">{t.attach}</b>
        <Media queries={GLOBAL_MEDIA_QUERIES}>
          {(matches) => (
            <React.Fragment>
              {matches.large && (
                <>
                  <div className="Enrollement-attach-files">
                    <div>
                      <EnrollementAttachFiles
                        setState={setInseeKbis}
                        title={t.attestation}
                      />
                      <EnrollementAttachFiles
                        setState={setIdentityDoc}
                        title={t.identity}
                      />
                    </div>
                    <div>
                      <EnrollementAttachFiles
                        setState={setCriminalRecord}
                        title={t.criminal}
                      />
                      <EnrollementAttachFiles
                        setState={setProPhoto}
                        title={t.prof}
                      />
                    </div>
                  </div>
                  <label>
                    <input
                      className="displaynone"
                      onChange={(e) => {
                        handle_image(e);

                        form.files.push([e.target.files]);
                      }}
                      type="file"
                      multiple
                    />
                    <div
                      className="EnrollementForm-multiple-files"
                      style={{ transform: "translateX(10px)" }}
                    >
                      <b style={{ fontFamily: "sans-serif" }}>+</b>{" "}
                      {t.addMoreFile}
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
                      transform: "translateX(-25px)",
                      gap: 0,
                    }}
                  >
                    <br />
                    <EnrollementAttachFiles
                      setState={setInseeKbis}
                      onChange={handle_image}
                      title={t.attestation}
                    />
                    <EnrollementAttachFiles
                      setState={setIdentityDoc}
                      onChange={handle_image}
                      title={t.identity}
                    />
                    <EnrollementAttachFiles
                      setState={setCriminalRecord}
                      onChange={handle_image}
                      title={t.criminal}
                    />
                    <EnrollementAttachFiles
                      setState={setProPhoto}
                      onChange={handle_image}
                      title={t.prof}
                    />
                  </div>
                  <label>
                    <input
                      className="displaynone"
                      onChange={(e) => {
                        handle_image(e);

                        form.files.push([e.target.files]);
                      }}
                      type="file"
                      multiple
                    />
                    <div
                      className="EnrollementForm-multiple-files"
                      style={{
                        padding: "10px 45px 10px 40px",
                        transform: "translateX(10px)",
                      }}
                    >
                      <b style={{ fontFamily: "sans-serif" }}>+&nbsp;</b>
                      <span>{t.addMoreFile}</span>
                    </div>
                  </label>
                </>
              )}
            </React.Fragment>
          )}
        </Media>

        <br />
        <br />
        <div className="EnrollementForm-submit" onClick={Handle_submit}>
          <div className="EnrollementForm-submit-title"> {t.submit}</div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
