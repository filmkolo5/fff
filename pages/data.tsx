import React, { useEffect } from 'react'
import { useState } from 'react';
import usersJson from "../json/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Dialog  from './Dialog';
var axios = require('axios');

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
    // ดึงค่าเริ่มต้นของ user มาแสดงในตาราง
    fetchUsers();
  }, []);

  const [value4, setValue4] = useState('');

  const [addusername,setAddusername] = useState('');
  const [addfristname,setAddfristname] = useState('');
  const [addlastname,setAddlastname] = useState('');
  const [addposition,setAddposition] = useState('');
  const [addaffiliation,setAddaffiliation] = useState('');
  const [addpositionihub,setAddpositionihub] = useState({ title: '' });
  const [newuser, setNewuser]= useState('');

  const fetchUsers = () => {
    // 1. ยิง api ไป nestjs เพื่อขอข้อมูล user
    const config = {
      method: 'get',  // get, post, patch(update บางค่า), put(update ทุกค่า), delete
      url: 'http://localhost:8080/user/get-user'
    };

    axios(config)
    .then((response: any) => {
      // 2. นำค่าที่ได้จากข้อ 1. มาเก็บ state users 
      console.log('fetch success:', response.data);

      const newUsers = response.data.map((user: any, index: number) => {
        return ({
          ...user,
          'number': index + 1,
          'fname_lname': `${user.firstName} ${user.lastName}`
        })
      });

      setUsers(newUsers);
    })
    .catch((error:any) => {
      console.log(error);
    });
  };

  // ฟังก์ชั่นในการยิง request ไป nestjs เพื่อเพิ่ม user ในฐานข้อมูล
  const handleAddUser = () => {
    var data = JSON.stringify({
      "userName": addusername,
      "firstName": addfristname,
      "lastName": addlastname,
      "position": addposition,
      "affiliation": addaffiliation,
      "positionIhub": addpositionihub.title
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8080/user/create-user',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    axios(config)
    .then(function (response:any) {
      console.log(JSON.stringify(response.data));
      fetchUsers();
    })
    .catch(function (error:any) {
      console.log(error);
    });

  };

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
            /* รหัสพนักงาน */
           addusername = { addusername }
           setAddusername = { setAddusername }
            /* ชื่อ */
           addfristname = { addfristname }
           setAddfristname = { setAddfristname }
            /* นามสกุล */
           addlastname = { addlastname }
           setAddlastname = { setAddlastname }
            /* ตำแหน่งย่อ */
           addposition = { addposition }
           setAddposition = { setAddposition }
            /* สังกัด */
           addaffiliation = { addaffiliation }
           setAddaffiliation = { setAddaffiliation }
            /* ตำแหน่งใน ihub */
           addpositionihub = { addpositionihub }
           setAddpositionihub = { setAddpositionihub }
            /* ข้อมูลพนักงาน */
           users = { users }
           setUsers = { setUsers }
            /* ใช้เพิ่มข้อมูล */
           handleAddUser = { handleAddUser }
          />
        </div>
      </div>

      <div className='grid'>
        <div className='col'>
          <DataTable value={[...users]} paginator paginatorTemplate={template2}  first={0} rows={3}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow'>
            <Column sortable header='ลำดับ' field='number' className='ui-column-data' />
            <Column sortable header='รหัสพนักงาน' field='userName' className='ui-column-data' />
            <Column sortable header='ชื่อ - นามสกุล' field='fname_lname' className='ui-column-data' />
            <Column sortable header='ตำแหน่งย่อ' field='position' className='ui-column-data' />
            <Column sortable header='สังกัด' field='affiliation' className='ui-column-data' />
            <Column sortable header='ตำแหน่ง IHub' field='positionIhub' className='ui-column-data' />
            <Column header='การปฏิบัติงาน' field='' className='ui-column-data' />
            <Column header= 'ICON DELETE/EDIT' className='ui-column-data' />
          </DataTable>
        </div>
      </div>
    </div>

  )
}


