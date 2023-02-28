import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
// Material
//npm install @mui/x-date-pickers
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Autocomplete from '@mui/material/Autocomplete';
import  Box  from '@mui/material/Box';
import Stack from '@mui/material/Stack';
//npm install dayjs --save
import dayjs, { Dayjs } from 'dayjs';
import FileUpload  from './FileUpload';
import { TextField, Button } from '@mui/material';

export default function SelectLabels(props : any) {
  const [error, setError] = React.useState(false);
  const [isDateSelected, setIsDateSelected] = React.useState(false);
  const [isDateSelected1, setIsDateSelected1] = React.useState(false);
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const handleSubmit = (event: any) => {
    
    event.preventDefault();
   
    if (!name1) {
      setName1Error('** กรุณาเลือกโครงการ');
    } else {
      setName1Error('');
    }
    if (!name) {
      setNameError('** กรุณากรอก GEN/BATCH');
    } else {
      setNameError('');
    }
    if (!isDateSelected) {
      setDateError('** กรุณาเลือกวันเริ่มต้น');
    } else {
      setDateError('');
    }
    if (!isDateSelected1) {
      setDateError1('** กรุณาเลือกวันสิ้นสุด');
    } else {
      setDateError1('');
    }
    if (name1 && name && isDateSelected && isDateSelected1 ) {
      console.log('Form submitted with name:', name1, name , isDateSelected,isDateSelected1 );
      router.push('/project2');
    }
  };
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [name1, setName1] = useState('');
    const [name1Error, setName1Error] = useState('');
    const [dateError, setDateError] = useState('');
    const [dateError1, setDateError1] = useState('');
    const [inputValue, setInputValue] = useState('');


      const handleNameChange = (event:any) => {
      const value = event.target.value.trim();
      
      setName(value);
      if (!value) {
        setNameError('');
      } else {
        setNameError('');
      }
    };
    
    const handleName1Change = (event: any, value: string | null) => {
      if (!value) {
        setName1Error('');
      } else {
        setName1Error('');
      }
      setName1(value || '');
    };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    const [value, setValue] = React.useState<Dayjs | null>(
      dayjs(''),
    );
    const [value2, setValue2] = React.useState<Dayjs | null>(
      dayjs(''),
    );
  
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
      if (!newValue) {
        setDateError('');
      } else {
        setDateError('');
        setIsDateSelected(true);
      }
    };
    const handleChange2 = (newValue2: Dayjs | null) => {
      setValue2(newValue2);
      if (!newValue2) {
        setDateError1('');
      } else {
        setDateError1('');
        setIsDateSelected1(true);
      }
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
        <Autocomplete sx={{  width: 600}}   id="name" options={['GEMs', 'AdHoc', 'DevPool',]}
        onChange={handleName1Change}renderInput={(params) => (
          <TextField {...params} sx={{'& label': { fontFamily: 'Kanit'}}} label="โครงการหลัก"  variant="outlined" error={!!name1Error} helperText={name1Error}
          /> )}/>
      </div>
      <div className='PROJECT-2' >
      <h3>GEN/BATCH :</h3>
      <form onSubmit={handleSubmit} >
      <TextField  sx={{  width: 600 , '& label': { fontFamily: 'Kanit'}}} label="GEN/BATCH" variant="outlined" 
        value={name} onChange={handleNameChange}error={!!nameError} helperText={nameError}/>
        </form>
      </div>
      <div className='PROJECT-3' >
      <h3>วันเริ่มต้น :</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
        className='PROJECT-3.1'
          label=" วัน / เดือน / ปี"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} sx={{'& label': { fontFamily: 'Kanit'}}} error={!!dateError} helperText={dateError}/>}
        />
      </Stack>
    <h3>วันสิ้นสุด :</h3>
      <Stack spacing={3}>
        <DesktopDatePicker
                className='PROJECT-3.1'
          label=" วัน / เดือน / ปี"
          inputFormat="DD/MM/YYYY"
          value={value2}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} sx={{'& label': { fontFamily: 'Kanit'}}}error={!!dateError1} helperText={dateError1}/>}
        />
      </Stack>
    </LocalizationProvider>
      </div>
      <div className='PROJECT-4' >
      <h3>รายละเอียด :</h3>
      <Box component="form"
      sx={{'& > :not(style)': { width: '75ch' }, height:100,}} noValidate autoComplete="off">
         <TextField
          id="outlined-multiline-static"
          sx={{'& label': { fontFamily: 'Kanit'}}}
          label="กรุณากรอกรายละเอียด" multiline rows={4} />
    </Box>
    </div>
          <div className='PROJECT-5'>
          <h3>อนุมัติให้จัดโครงการ :</h3>
          <FileUpload/>
          </div>
          <div className='PROJECT-6'>
          <form onSubmit={handleSubmit} >
          <Button  type="submit"  className='bt-1'  sx={{backgroundColor:'#4C3364',color:'#FFFFFF',width:200,"&:hover":{backgroundColor:'#4C3364'}}} variant="contained" ><h5>บันทึก</h5></Button>
  </form>
    </div>  
        </div>
    </div>
  );
}