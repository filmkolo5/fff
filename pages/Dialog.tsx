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
import { Performance } from '../components/performance';
import { PositionBox } from '../components/positionBox';


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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
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
      <Button className="contained" variant="contained"onClick={handleClickOpen} sx={{backgroundColor:'#F7CD8E',"&:hover":{backgroundColor:'#e29521'}}}> <h5>+ เพิ่มข้อมูลพนักงาน</h5></Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle  id="customized-dialog-title " onClose={handleClose} >
          <h4>เพิ่มข้อมูลพนักงาน</h4>
        </BootstrapDialogTitle >
        <DialogContent dividers>
        {/* ----------------------------------------------- รหัสพนักงาน ----------------------------------------------- */}
        <Box sx={{'& > :not(style )': {  m: 1, width: '50' },}}>
          <TextField className='b-0' id="outlined-basic" label="รหัสพนักงาน" variant="outlined" />
          <Button   variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} ><h5>ค้นหา</h5></Button>
        </Box>
        {/* ----------------------------------------------- ชื่อ - นามสกุล ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' ,},}}>
            <TextField  className='b-0' id="outlined-basic" label="ชื่อ-นามสุกล" variant="outlined" />
          </Box>
        </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="ตำแหน่ง" variant="outlined" />
          </Box>
        </Typography>
        {/* ----------------------------------------------- สังกัด ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="สังกัด" variant="outlined" />
          </Box>
        </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ihub ----------------------------------------------- */}
        <Typography gutterBottom>
          <PositionBox/>
        </Typography>
        {/* ----------------------------------------------- การปฏิบัติงาน ----------------------------------------------- */}
        <Typography gutterBottom>
          <Performance/>
        </Typography>
        </DialogContent>
        {/* ----------------------------------------------- ปุ่มยกเลิก ----------------------------------------------- */}
        <DialogActions>
          <Button autoFocus onClick={handleClose}className='bt-1' sx={{color:'black',m: 1,width:200,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
        {/* ----------------------------------------------- ปุ่มบันทึก ----------------------------------------------- */}
          <Button autoFocus onClick={handleClose}className='bt-2' sx={{backgroundColor:'#7F669D',color:'#FFFFFF',m: 1,width:200,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" ><h5>บันทึก</h5></Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
