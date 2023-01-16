import React, { useEffect } from 'react'
import { useState } from 'react';
import usersJson from "../json/data.json";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UsersService } from '../services/UsersService';

/* PRIME REACT IMPORT */
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
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

  // const usersService = new UsersService();
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState();

  // useEffect(() => {
  //     let a = usersService.getUser()
  //     getUser(a)
  //     setLoading(false);
  // }, []); // eslint-disab
  // const getUser = (data:any) => {
  //   return 
  //   console.log(data)
  //   return [...data || []].map(d => {
  //       d.date = new Date(d.date);
  //       return d;
  //   });
  return (
    
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
      {/* <div>
        <div className='DATA_TEXT'>
          <h3>ข้อมูลบุคลากร</h3>
        </div>
        <div className='DATA_SEARCH'>
          <h6>ตารางข้อมูลพนักงาน</h6>
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
      </div> */}
      </div>
      </div>
     
   
  )
}


