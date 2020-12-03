import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // firestore submit;
    console.log(file);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>

      <button>Submit</button>
    </form>
  );
};

export default UploadForm;
