import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectLabels() {

  const PROJECT = [
    { label: 'โครงการ1'},
    { label: 'โครงการ2'},
    { label: 'โครงการ3' },
    { label: 'โครงการ4'},
    { label: 'โครงการ5'},
    { label: 'โครงการ6' },
    { label: 'โครงการ7'},
   
  ];
  
  return (
    <div>
      <div className='HEAD-POJECT'>
        <h3>โครงการ</h3>
        </div>
        <div className='BG-POJECT'>
          <h3>สร้างโครงการ</h3>
        <div className='POJECT-1' >
    
        <div className='select-project'>
        <h3>โครงการหลัก :</h3>
        <Autocomplete   disablePortal id="combo-box-demo"options={PROJECT}
      sx={{ width: 600}}renderInput={(params) => <TextField {...params} label="กรุณาเลือกโครงการ" />}/>
      </div>
      </div>
    </div>
    </div>
   
  );
}
