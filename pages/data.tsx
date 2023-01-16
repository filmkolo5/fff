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
      </div>
    </div>
  )
}


