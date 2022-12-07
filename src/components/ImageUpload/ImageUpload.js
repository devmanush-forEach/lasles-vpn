import "./ImageUpload.css";
import { IoMdCloudUpload } from "@react-icons/all-files/io/IoMdCloudUpload";
import { useState } from "react";

import { GiCancel } from "@react-icons/all-files/gi/GiCancel";

const ImageUpload = ({ onSelected, onRemove }) => {
  const handleFormClick = () => {
    document.getElementById("image_input").click();
  };

  const [file, setFile] = useState(null);

  const set_File = ({ target }) => {
    const img = target.files[0];
    setFile(img);
    onSelected(img);
  };

  const handleDrop = () => {};

  const handleRemoveFile = () => {
    setFile(null);
    onRemove();
  };

  return (
    <>
      <div className="image_upload_box" onDrop={handleDrop}>
        <header>Drag And Drop Images Here</header>
        <form action="#" onClick={handleFormClick}>
          <input
            type="file"
            name="file"
            hidden
            className="file_input_ele"
            id="image_input"
            onChange={set_File}
          />
          <IoMdCloudUpload className="upload_icon" />
          <span>Select File</span>
        </form>
        {file && (
          <div className="selected_filename">
            <p>{file.name}</p>
            <span onClick={handleRemoveFile}>
              <GiCancel />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
