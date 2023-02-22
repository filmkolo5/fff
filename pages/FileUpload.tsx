import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function FileUpload(props: any) {
  const toast = React.useRef<Toast>(null); // specify type of ref

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 100000000, // 100MB in bytes
    onDropRejected: () => {
      if (toast.current) {
        toast.current.show({
          severity: 'warn',
          summary: 'ไฟล์ขนาดใหญ่เกินไป !',
          life: 5000
        });
      }
    }
  });

  const files = acceptedFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>ลากไฟล์มาไว้ที่นี่ หรือ เลือกไฟล์เพื่ออัปโหลด</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
      <Toast ref={toast} className="custom-toast" />
    </section>
  );
}
export default FileUpload;