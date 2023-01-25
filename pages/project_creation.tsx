import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';


import Stack from '@mui/material/Stack';


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
        <h3>โครงการหลัก :</h3>
        <Autocomplete   disablePortal id="combo-box-demo"options={PROJECT}
    sx={{  width: 600}}renderInput={(params) => <TextField {...params} label="กรุณาเลือกโครงการ" />}/>
      </div>
      <div className='POJECT-2' >
      <h3>GEN/BATCH :</h3>
      <Box component="form"
      sx={{'& > :not(style)': { width: '75ch' }, }} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="กรุณากรอก Gen/Batch  " variant="outlined" />
    </Box>
      </div>
      <div className='POJECT-3' >
      <h3>วันเริ่มต้น:</h3>
      <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 240 }}
        InputLabelProps={{ shrink: true, }}/>
    </Stack>
    <h3>วันสิ้นสุด:</h3>
      <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 240 }}
        InputLabelProps={{ shrink: true, }}/>
    </Stack>
      </div>
    </div>
    </div>
   
   
   
  );
}
