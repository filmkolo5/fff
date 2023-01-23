import React, { useEffect } from 'react'
import { useState } from 'react';
import usersJson from "../json/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Dialog  from './Dialog';

/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import { Dropdown } from 'primereact/dropdown';

/* Components */
import { template2 } from '../components/template2';

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

  const [addusername,setAddusername] = useState('');
  const [addfristname,setAddfristname] = useState('');
  const [addlastname,setAddlastname] = useState('');
  const [addposition,setAddposition] = useState('');
  const [addaffiliation,setAddaffiliation] = useState('');
  const [addpositionihub,setAddpositionihub] = useState('');
  const [newuser, setNewuser]= useState('');

  return (
    <div>
      <div className='DATA_TEXT'>
        <h3>ข้อมูลบุคลากร</h3>
      </div>
      <div className='DATA_SEARCH'>
        <h6>ตารางข้อมูลพนักงาน</h6>
        <span className="p-input-icon-right">
          <i className="pi pi-search" />
          <InputText value={value4} onChange={(e) => setValue4(e.target.value)} placeholder="Search" />
      </span>
        <div className='Dialog'>
          <Dialog
           addusername = { addusername }
           setAddusername = { setAddusername }
           addfristname = { addfristname }
           setAddfristname = { setAddfristname }
           addlastname = { addlastname }
           setAddlastname = { setAddlastname }
           addposition = { addposition }
           setAddposition = { setAddposition }
           addaffiliation = { addaffiliation }
           setAddaffiliation = { setAddaffiliation }
           addpositionihub = { addpositionihub }
           setAddpositionihub = { setAddpositionihub }
           newuser = { newuser }
           setNewuser = { setNewuser }
           users = { users }
           setUsers = { setUsers }
          />
        </div>
      </div>

      <div className='grid'>
        <div className='col'>
          <DataTable value={[...users]} paginator paginatorTemplate={template2}  first={0} rows={3}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow '>
            <Column sortable header='ลำดับ' field='number' className='ui-column-data' />
            <Column sortable header='รหัสพนักงาน' field='employee_id' className='ui-column-data' />
            <Column sortable header='ชื่อ - นามสกุล' field='fname_lname' className='ui-column-data' />
            <Column sortable header='ตำแหน่งย่อ' field='position' className='ui-column-data' />
            <Column sortable header='สังกัด' field='affiliation' className='ui-column-data' />
            <Column sortable header='ตำแหน่ง IHub' field='ihub_position' className='ui-column-data' />
            <Column header='การปฏิบัติงาน' field='' className='ui-column-data' />
            <Column header= 'ICON DELETE/EDIT' className='ui-column-data' />
          </DataTable>
        </div>
      </div>
      
    </div>

  )
}


