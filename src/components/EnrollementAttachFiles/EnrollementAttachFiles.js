import React from "react";
import "./EnrollementAttachFiles.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { LangContext } from "../../context/Lang.context";

export default function EnrollementAttachFiles(props) {
  const { lang } = React.useContext(LangContext);

  const [fileName, setFileName] = React.useState();
  const [file, setFile] = React.useState();
  const handlePutFile = (e) => {
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      props.setState(file);
      const fileNameArray = file?.name.split("\\");
      setFileName(fileNameArray[fileNameArray.length - 1]);
    }
  };
  const handleRemoveFile = () => {
    props.setState(false);
    setFileName(null);
  };
  return (
    <div className="EnrollementAttachFiles-container">
      <div className="EnrollementAttachFiles-title">
        <AddIcon></AddIcon> <div>{props.title}</div>
      </div>
      <div>
        <label htmlFor={props.id} className="EnrollementAttachFiles-label">
          <input
            type="file"
            className="EnrollementAttachFiles-file-input"
            id={props.id}
            onChange={(event) => handlePutFile(event)}
          />
          <div className="EnrollementAttachFiles-button">
            <div className="EnrollementAttachFiles-button-title">
              {lang == "en" ? "Choose Files" : "Ajouter un fichie"}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="EnrollementAttachFiles-fileName">
              {!fileName && (lang == "en" ? "No Chosen File" : "Aucun fichier")}
              {fileName && fileName}
            </div>
            {fileName && (
              <ClearIcon
                sx={{ fill: "url(#linearColors)" }}
                onClick={handleRemoveFile}
              />
            )}
          </div>
        </label>
      </div>
    </div>
  );
}
