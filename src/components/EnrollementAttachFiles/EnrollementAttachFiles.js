import React from 'react'
import "./EnrollementAttachFiles.css"
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

export default function EnrollementAttachFiles(props) {
    const [fileName, setFileName] = React.useState();
    const [file, setFile] = React.useState();
    const handlePutFile=(e)=>{
        let file = e.target.value;
        setFile(file);
        const fileNameArray = file.split('\\')
        setFileName(fileNameArray[fileNameArray.length - 1])
        
    }
    const handleRemoveFile=()=>{
        setFile(null);
        setFileName(null);
    }
    return (
        <div className='EnrollementAttachFiles-container'>
            <div className='EnrollementAttachFiles-title'><AddIcon></AddIcon> <div>{props.title}</div></div>
            <div>
                <label htmlFor={props.id} className='EnrollementAttachFiles-label' onChange={event=>handlePutFile(event)}>
                    <input type="file" className='EnrollementAttachFiles-file-input' id={props.id} />
                    <div className="EnrollementAttachFiles-button">
                        <div className='EnrollementAttachFiles-button-title'>
                            Choose Files
                        </div>
                    </div>
                    <div className='EnrollementAttachFiles-fileName'>
                        {!fileName&&"No Chosen File"}
                        {fileName&&fileName}
                        
                    </div>
                    {fileName&&<ClearIcon sx={{ fill: "url(#linearColors)" }} style={{transform:"translateY(2px)"}} onClick={handleRemoveFile} ></ClearIcon>}

                </label>
            </div>
        </div>
    )
}
