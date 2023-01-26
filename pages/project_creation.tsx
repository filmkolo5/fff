import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
//npm install @mui/x-date-pickers
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//npm install dayjs --save
import dayjs, { Dayjs } from 'dayjs';


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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    const [value, setValue] = React.useState<Dayjs | null>(
      dayjs('2023-01-01'),
    );
  
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    };
  return (
    <div>
      <div className='HEAD-PROJECT'>
        <h3>โครงการ</h3>
        </div>
        <div className='BG-PROJECT'>
          <h3>สร้างโครงการ</h3>
        <div className='PROJECT-1' >
        <h3>โครงการหลัก :</h3>
        <Autocomplete   disablePortal id="combo-box-demo"options={PROJECT}
    sx={{  width: 600}}renderInput={(params) => <TextField {...params} label="กรุณาเลือกโครงการ" />}/>
      </div>
      <div className='PROJECT-2' >
      <h3>GEN/BATCH :</h3>
      <Box component="form"
      sx={{'& > :not(style)': { width: '75ch' }, }} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="กรุณากรอก Gen/Batch  " variant="outlined" />
    </Box>
      </div>
      <div className='PROJECT-3' >
      <h3>วันเริ่มต้น :</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label=" วัน / เดือน / ปี"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    <h3>วันสิ้นสุด :</h3>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label=" วัน / เดือน / ปี"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
      </div>
      <div className='PROJECT-4' >
      <h3>รายละเอียด :</h3>
      <Box component="form"
      sx={{'& > :not(style)': { width: '75ch' }, height:100}} noValidate autoComplete="off">
         <TextField
          id="outlined-multiline-static"
          label="กรุณากรอกรายละเอียด" multiline rows={4}/>
    </Box>
    </div>

          <div className='PROJECT-5'>
          <h3>อนุมัติให้จัดโครงการ :</h3>
          <Box component="span" sx={{ width:600, height: 140,p: 2, border: '1px dashed grey' }}>
          <Button  variant="contained" component="label">
          เลือกไฟล์เพื่ออัปโหลด
        <input hidden accept="file" multiple type="file" />
      </Button>
    </Box>
          </div>



          <div className='PROJECT-6'>
    <DialogActions >
          <Button autoFocus onClick={handleClose} className='bt-1' sx={{color:'black',width:200,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
          <Button autoFocus onClick={handleClose} className='bt-1'  sx={{backgroundColor:'#7F669D',color:'#FFFFFF',width:200,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" ><h5>บันทึก</h5></Button>
          </DialogActions>
    </div>  
        </div>

    <div>
           
        </div>
    </div>
    
   
   
   
  );
}