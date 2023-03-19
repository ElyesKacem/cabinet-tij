import axios from "../axios/axios";
import { parser } from "../Functions/obj_gen_html";
import { make_form_data } from "../Functions/MakeFormData";

export const RQ_service = (data, succ, fail) => {
  let formdata = make_form_data(data.files);
  formdata.append("text", parser(data));

  axios
    .post("http://localhost:4000/sendmail", formdata, { text: parser(data) })
    .then((res) => {
      console.log(res);
      succ();
    })
    .catch((error) => {
      console.log(error);
      fail();
    });
};
