import React, { useEffect } from 'react'
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


    setUsers([...usersJson.data.users]);

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
    <div className='grid'>
      <div className='col'>
 
          <DataTable value={[...users]} className='shadow'>  
              <Column header='ลำดับ' field='number'/>
              <Column header='รหัสพนักงาน' field='employee_id'/>
              <Column header='ชื่อ - นามสกุล' field='fname_lname'/>
              <Column header='ตำแหน่งย่อ'field='position'/>
              <Column header='สังกัด'field='affiliation'/>
              <Column header='ต่ำแหน่ง IHub'field='ihub_position'/>
              <Column header='การปฏิบัติงาน'field=''/>
              <Column header=''/>
          </DataTable>
  
      </div>
      </div>
     </div>
   
  )
}


