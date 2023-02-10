import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}> {children} {onClose ? (<IconButton aria-label="close" onClick={onClose}
        sx={{  position: 'absolute', right: 10, top: 10, color: (theme) => theme.palette.grey[500], }}> <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs(props:any) {
  const { 
          /* รหัสพนักงาน */
          setEditusername,
          userName,
          /* ชื่อ */
          setEditfirstname,
          firstName,
          /* นามสกุล */
          setEditlastname,
          lastName,
          /* ตำแหน่ง */
          setEditposition,
          position,
          /* สังกัด */
          setEditaffiliation,
          affiliation,
          /* ตำแหน่งihub */
          setEditpositionihub,
          positionIhub,
          /* การปฏิบัติงาน */
          setEditperformance,
          performance,
          handleEditUser,
          id
                    } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="text"onClick={handleClickOpen} > 
      <EditIcon  sx={{ color: '#BDCDD6'}}   />
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title"open={open}>
        <BootstrapDialogTitle  id="customized-dialog-title " onClose={handleClose} >
        <h4>แก้ไขข้อมูลพนักงาน</h4>
        </BootstrapDialogTitle >
        
        <DialogContent dividers>
        <Box sx={{'& > :not(style )': {  m: 1, width: '50' },}}>
      <TextField className='b-0' label="รหัสพนักงาน" defaultValue = { userName } onChange={ (e) => setEditusername(e.target.value) } />
      <Button  variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} >ค้นหา</Button>
    </Box>
          <Typography gutterBottom>
          <Box  sx={{'& > :not(style)': { m: 1, width: '193px' ,},}}>
      <TextField  className='b-0' label="ชื่อ" defaultValue={ firstName } onChange={ (e) => setEditfirstname(e.target.value) } />
      <TextField  className='b-0' label="นามสกุล"  defaultValue={ lastName } onChange={ (e) => setEditlastname(e.target.value) } />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='b-0' label="ตำแหน่ง"  defaultValue={ position } onChange={ (e) => setEditposition(e.target.value) } />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='b-0' label="สังกัด"  defaultValue={ affiliation } onChange={ (e) => setEditaffiliation(e.target.value) } />
    </Box>
          </Typography>
          {/* <Typography gutterBottom>
          <Autocomplete
      id="position-ihub"
      options={ _positionIHUB }
      sx={{m:1, width: 400 }}
      defaultValue={ positionIhub }
      onChange={(event, newValue) => {
        // console.log('onChange', newValue);
        setEditpositionihub(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="ตำแหน่ง IHUB" />}
    />
          </Typography> */}
          <Typography gutterBottom>
          <Autocomplete
      id="performance"
      options={ _performance }
      sx={{ m:1,width: 400  }}
      defaultValue={ performance }
      onChange={(event, newValue) => {
        // console.log('onChange', newValue);
        setEditperformance(newValue);
      }}
      renderInput={(params) => <TextField {...params} className='b-1' label="การปฏิบัติงาน" />}
    />
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleClose}className='bt-1' sx={{color:'black',width:210,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
        <Button autoFocus onClick={()=>{
             handleEditUser(id);
             handleClose();
            }} className='bt-2'  sx={{backgroundColor:'#7F669D',color:'#FFFFFF',width:210,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained"><h5>บันทึก</h5></Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const _positionIHUB = [
  'Subcommittee',
  'PMOs',
  'Mentor',
  'GEMs',
  'Ad Hoc',
];
const _performance = [
  'Full-Time',
  'Part-Time',
];