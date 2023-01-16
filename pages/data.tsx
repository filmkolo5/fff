import React, { useEffect } from 'react'
import { FiUsers } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { TbDatabase } from "react-icons/Tb";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react';
import usersJson from "../json/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"




interface IUsers {
  "number": number;
  "employee_id": number;
  "fname_lname": string;
  "position": string;
  "affiliation": string;
  "ihub_position": string;
  "performance": string;
}
export default function () {
  const [users, setUsers] = useState<IUsers[]>([]);
  useEffect(() => {
    setUsers([...usersJson.users]); 
  }, [])
  const [value4, setValue4] = useState('');



  
  return (
      <div>
        <div className='DATA_TEXT'>
          <h3>ข้อมูลบุคลากร</h3>
        </div>
        <div className='DATA_SEARCH'>
          <h6>ตารางข้อมูลพนักงาน</h6>
          <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={value4} onChange={(e) => setValue4(e.target.value)}placeholder="Search" />
                </span>
        </div>
        <table className='MAT_TABLE'>
        <tbody>
          <tr>
            <th className='HEAD_BOX_NUMBER'>ลำดับ</th>
            <th className='HEAD_BOX_EMPLOYEE_ID'>รหัสพนักงาน</th>
            <th className='HEAD_BOX_FNAME_LNAME'>ชื่อ - นามสกุล</th>
            <th className='HEAD_BOX_POSITION'>ตำแหน่งย่อ</th>
            <th className='HEAD_BOX_AFFILIATION'>สังกัด</th>
            <th className='HEAD_BOX_IHUB_POSITION'>ต่ำแหน่ง IHub</th>
            <th className='HEAD_BOX_PERFORMANCE'>การปฏิบัติงาน</th>
            <td className='HEAD_BOX_DELETE_EDIT'></td>
          </tr>
          {users.map((user) => {
            return (<tr key={user.employee_id}>
              <td className='BOX_NUMBER'>{user.number}</td>
              <td className='BOX_EMPLOYEE_ID'>{user.employee_id}</td>
              <td className='BOX_FNAME_LNAME'>{user.fname_lname}</td>
              <td className='BOX_POSITION'>{user.position}</td>
              <td className='BOX_AFFILIATION'>{user.affiliation}</td>
              <td className='BOX_IHUB_POSITION'>{user.ihub_position}</td>
              <td className='BOX_PERFORMANCE'>None</td>
              <td className='BOX_DELETE_EDIT'><FiEdit size="1rem" />   <RiDeleteBin6Line size="1rem" /></td>
            </tr>);
          
          })}
          
        </tbody>
      </table>
      </div>
     
   
  )
}
