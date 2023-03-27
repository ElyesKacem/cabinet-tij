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
  // console.log("from : ", data.from);
  // toast.loading("Sending Data...", {
  //   icon: <CircularProgress sx={{ color: "blue" }} />,
  // });

  axios
    .post("http://cabinet-tij.com/api/sendmail", formdata, {
      text: { text: parser(data) },
      params: { from: data.from },
    })
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
