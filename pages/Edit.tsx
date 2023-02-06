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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import EditIcon from '@mui/icons-material/Edit';
import { PositionBox } from '../components/positionBox';
import { Performance } from '../components/performance';

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

export default function CustomizedDialogs() {
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
      <EditIcon  sx={{ color: '#9898CA' }}   />
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title"open={open}>
        <BootstrapDialogTitle  id="customized-dialog-title " onClose={handleClose} >
          <h4>แก้ไขข้อมูลพนักงาน</h4>
        </BootstrapDialogTitle >
        
        <DialogContent dividers>
        <Box sx={{'& > :not(style )': {  m: 1, width: '100' },}}>
      <TextField className='b-0' id="outlined-basic" label="รหัสพนักงาน" variant="outlined" />
      <Button  variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} ><h5>ค้นหา</h5></Button>
    </Box>
          <Typography gutterBottom>
          <Box  sx={{'& > :not(style)': { m: 1, width: '193px' ,},}}>
      <TextField className='b-0' id="outlined-basic" label="ชื่อ" variant="outlined" />
      <TextField className='b-0' id="outlined-basic" label="นามสุกล" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='b-0' id="outlined-basic" label="ตำแหน่ง" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='b-0' id="outlined-basic" label="สังกัด" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <PositionBox/>
          </Typography>
          <Typography gutterBottom>
          <Performance/>
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleClose}className='bt-1' sx={{color:'black',width:210,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
        <Button autoFocus onClick={handleClose}className='bt-2'  sx={{backgroundColor:'#7F669D',color:'#FFFFFF',width:210,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" ><h5>บันทึก</h5></Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}