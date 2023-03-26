import axios from "../axios/axios";
import { parser } from "../Functions/obj_gen_html";
import { make_form_data } from "../Functions/MakeFormData";
import { toast } from "react-hot-toast";
// import CircularProgress from "@mui/material/CircularProgress";

export const RQ_service = (data, succ, fail) => {
  let formdata = new FormData();
  if (data.files) {
    formdata = make_form_data(data.files);
  }
  formdata.append("text", parser(data));
  // console.log("data : ", data);
  // toast.loading("Sending Data...", {
  //   icon: <CircularProgress sx={{ color: "blue" }} />,
  // });

  axios
    .post("http://localhost:4000/sendmail", formdata, { text: parser(data) })
    .then((res) => {
      // console.log(res);
      toast.dismiss();
      succ();
    })
    .catch((error) => {
      // console.log(error);
      toast.dismiss();
      fail();
    });
};
