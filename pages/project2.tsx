import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Popup  from './Popup';



export default function SelectLabels() {


   
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

    <div>
           
        </div>
    </div>

   
   
  );
}