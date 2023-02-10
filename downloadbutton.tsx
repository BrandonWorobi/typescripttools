import React, { useState } from "react";

const FileDownload = () => {
  const [downloadFile, setDownloadFile] = useState(false);

  const handleDownload = () => {
    setDownloadFile(true);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
      {downloadFile && (
        <a
          href="path/to/file"
          download
          onClick={() => setDownloadFile(false)}
        >
          Click to download
        </a>
      )}
    </div>
  );
};

export default FileDownload;
