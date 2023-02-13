import React, { useState } from 'react';
interface Props {}
const FileUploadButton: React.FC<Props> = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  };
  return (
    <div className="UPLOAD">
      <input type="file"  id="fileInput" onChange={handleFileChange} />
      <label className="UPLOAD1" htmlFor="เลือกไฟล์เพื่ออัปโหลด"  >
      </label>
    </div>
  );
};

export default FileUploadButton;