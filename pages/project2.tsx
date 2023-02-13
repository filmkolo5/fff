import React, { useEffect } from 'react'
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Popup  from './Popup';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
/* PRIME REACT */
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
/* Components */
import { template2 } from '../components/template2';

export default function () {
  return (
  
    <div>
      <div className='HEAD-PROJECT1'>
        <h3>โครงการ</h3>
        </div>
        <div className='BG-PROJECT1'>
          <h3>ข้อมูลโครงการ</h3>
        <div className='PROJECT1' >
        
        <Box  className='BOX1'  sx={{ m:0.5, display: 'flex' ,justifyContent: 'center' }}>
          <h3>โครงการหลัก :</h3>
          <TextField sx={{ width:250}} id="outlined-basic" disabled label=" โครงการหลัก "variant="filled"/>
          <h3>Gen/Batch :</h3>
          <TextField  sx={{ width:250}}   id="outlined-basic" disabled label=" Gen/Batch "variant="filled"/>
          <h3>จำนวน (คน) :</h3>
          <TextField  sx={{ width:250}}  id="outlined-basic" disabled label=" จำนวน (คน) "variant="filled"/>
          </Box>
    </div>     
    <div className='BOX2'>
      <h3>Member</h3>
      <div className='POPUP'>
      <Popup/>
      </div>
    </div>
        </div>
        <div className='grid'>
        <div className='col'>

          <DataTable   paginator paginatorTemplate={template2}  first={0} rows={10}  paginatorClassName="justify-content-end" responsiveLayout="scroll" className='shadow'>

            <Column sortable header='ลำดับ' field='number' className='ui-column-data' />
            <Column sortable header='รหัสพนักงาน' field='userName' className='ui-column-data' />
            <Column sortable header='ชื่อ - นามสกุล' field='fname_lname' className='ui-column-data' />
            <Column sortable header='ตำแหน่งย่อ' field='position' className='ui-column-data' />
            <Column sortable header='สังกัด' field='affiliation' className='ui-column-data' />
            <Column sortable header='ตำแหน่ง IHub' field='positionIhub' className='ui-column-data' />
            <Column header='Action' field='positionIhub' className='ui-column-data' />
            
          </DataTable>
        </div>
      </div>
   

        </div>
  )
}