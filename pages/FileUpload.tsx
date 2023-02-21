import React from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload(props: any) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>ลากไฟล์มาไว้ที่นี่ หรือ เลือกไฟล์เพื่ออัปโหลด</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
export default FileUpload;
