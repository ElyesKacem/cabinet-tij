import axios from "../axios/axios";
import { parser } from "../Functions/obj_gen_html";

export const RQ_service = (data, succ, fail) => {
  axios
    .post("/sendmail", { text: parser(data) })
    .then((res) => {
      console.log(res);
      succ();
    })
    .catch((error) => {
      console.log(error);
      fail();
    });
};
