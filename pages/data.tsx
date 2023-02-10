import React, { useEffect } from 'react'
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Dialog  from './Dialog';
import Edit  from './Edit';
import Delete  from './Delete';
/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
/* Components */
import { template2 } from '../components/template2';
/* Axios */
var axios = require('axios'); 


export default function () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ดึงค่าเริ่มต้นของ user มาแสดงในตาราง
    fetchUsers();
  }, []);

  const [value4, setValue4] = useState('');

  const [addusername,setAddusername] = useState('');
  const [addfirstname,setAddfirstname] = useState('');
  const [addlastname,setAddlastname] = useState('');
  const [addposition,setAddposition] = useState('');
  const [addaffiliation,setAddaffiliation] = useState('');
  const [addpositionihub,setAddpositionihub] = useState('');
  const [addperformance,setAddperformance] = useState('');
  // const [newuser, setNewuser]= useState('');
  const [editusername, setEditusername]= useState('');
  const [editfirstname,setEditfirstname] = useState('');
  const [editlastname,setEditlastname] = useState('');
  const [editposition,setEditposition] = useState('');
  const [editaffiliation,setEditaffiliation] = useState('');
  const [editpositionihub,setEditpositionihub] = useState('');
  const [editperformance,setEditperformance] = useState('');
{/* ----------------------------------------------- ยิง API ข้อมูลทั้งหมด ----------------------------------------------- */}
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
{/* ----------------------------------------------- ยิง API ให้เพิ่มข้อมูล ----------------------------------------------- */}
  // ฟังก์ชั่นในการยิง request ไป nestjs เพื่อเพิ่ม user ในฐานข้อมูล
  const handleAddUser = () => {
    const data = JSON.stringify({
      "userName": addusername,
      "firstName": addfirstname,
      "lastName": addlastname,
      "position": addposition,
      "affiliation": addaffiliation,
      "positionIhub": addpositionihub,
      "performance": addperformance
    });

    const config = {
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
  {/* ----------------------------------------------- ยิง API ให้ลบข้อมูล ----------------------------------------------- */}
  const handleDeleteUser = (id: string) => {
    // console.log('id',id);
    const config = {
      method: 'delete',
      url: `http://localhost:8080/user/remove/${id}`
    };
  
    axios(config)
      .then((response:any) => {
        console.log(JSON.stringify(response.data));
        fetchUsers();
      })
      .catch((error:any) => {
        console.error(error);
      });
  };  
  {/* ----------------------------------------------- ยิง API ให้ลบข้อมูล ----------------------------------------------- */}
  const handleEditUser = (id: string) => {
    // console.log('id',id);
    // console.log('editusername',editusername);
    const data = JSON.stringify({
      "userName": editusername,
      "firstName": editfirstname,
      "lastName": editlastname,
      "position": editposition,
      "affiliation": editaffiliation,
      "positionIhub": editpositionihub,
      "performance": editperformance
    });
    const config = {
      method: 'patch',
      url: `http://localhost:8080/user/update/${id}`,
      headers: { 
        'Content-Type': 'application/json'
       },
      data : data
    };
  
    axios(config)
      .then((response:any) => {
        console.log(JSON.stringify(response.data));
        fetchUsers();
      })
      .catch((error:any) => {
        console.error(error);
      });
  };  
  {/* --------------------------------------------------------------------------------------------------------------- */}
  const action = (rowData:any) => {
    return (
            <div className='ED-POPUP'>
            <Edit 
            setEditusername={setEditusername}
            userName = {rowData.userName}
            setEditfirstname={setEditfirstname}
            firstName = {rowData.firstName}
            setEditlastname={setEditlastname}
            lastName = {rowData.lastName}
            setEditposition={setEditposition}
            position = {rowData.position}
            setEditaffiliation={setEditaffiliation}
            affiliation = {rowData.affiliation}
            setEditpositionihub={setEditpositionihub}
            positionIhub = {rowData.positionIhub}
            setEditperformance={setEditperformance}
            performance = {rowData.performance}
            id = { rowData.id }
            handleEditUser = {handleEditUser}
            />
             <Delete
              handleDeleteUser = { handleDeleteUser }
              id = {rowData.id}
             />
             </div>
    );
  }
{/* --------------------------------------------SEARCH--------------------------------------------------- */}
    const [globalFilter, setGlobalFilter] = useState("");
    const onGlobalFilter = (e: any) => {
    setGlobalFilter(e.target.value);
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
          <InputText type="search"placeholder="Search"onInput={onGlobalFilter}/>
        </span>
        <div className='Dialog'>
          <Dialog
            /* รหัสพนักงาน */
           addusername = { addusername }
           setAddusername = { setAddusername }
            /* ชื่อ */
           addfirstname = { addfirstname }
           setAddfirstname = { setAddfirstname }
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
           /* การปฏิบัติงาน */
           addperformance = { addperformance }
           setAddperformance = { setAddperformance }
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

          <DataTable value={[...users]} globalFilter={globalFilter} paginator paginatorTemplate={template2}  first={0} rows={10}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow'>

            <Column sortable header='ลำดับ' field='number' className='ui-column-data' />
            <Column sortable header='รหัสพนักงาน' field='userName' className='ui-column-data' />
            <Column sortable header='ชื่อ - นามสกุล' field='fname_lname' className='ui-column-data' />
            <Column sortable header='ตำแหน่งย่อ' field='position' className='ui-column-data' />
            <Column sortable header='สังกัด' field='affiliation' className='ui-column-data' />
            {/* {<Column sortable header='ตำแหน่ง IHub' field='positionIhub' className='ui-column-data' />} */}
            {/* <Column sortable header='ตำแหน่ง IHub'field='positionIhub'  body={(rowData) =><div className="positionIhub-body" >{ rowData.positionihub } </div>}className='ui-column-data' /> */}
            <Column sortable header='การปฏิบัติงาน'field='performance'  body={(rowData) =><div className="full-time-body" >{ rowData.performance } </div>}className='ui-column-data' />
            <Column body={action}></Column>

          </DataTable>
        </div>
      </div>
    </div>

  )
}