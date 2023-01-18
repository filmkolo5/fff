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
      <Button className='outlined' onClick={handleClickOpen}>
        <h5>+ เพิ่มข้อมูลพนักงาน</h5>
      </Button >
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          เพิ่มข้อมูลพนักงาน
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box sx={{'& > :not(style)': { m: 1, width: '25' },}}>
      <TextField className='S-1' id="outlined-basic" label="รหัสพนักงาน" variant="outlined" />
      <Button className='bt-0' variant="contained">ค้นหา</Button>
    </Box>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' ,},}}>
      <TextField className='S-2' id="outlined-basic" label="ชื่อ-นามสุกล" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='S-3' id="outlined-basic" label="ตำแหน่ง" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
      <TextField className='S-4' id="outlined-basic" label="สังกัด" variant="outlined" />
    </Box>
          </Typography>
          <Typography gutterBottom>
          <Autocomplete
      disablePortal
      id="position-ihub"
      options={positionIHUB}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ตำแหน่ง IHUB" />}
    />
          </Typography>
          <Typography gutterBottom>
          <Autocomplete
      disablePortal
      id="performance"
      options={positionIHUB}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="การปฏิบัติงาน" />}
    />
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={handleClose}className='bt-1'>ยกเลิก</Button>
        <Button autoFocus onClick={handleClose}className='bt-2'>บันทึก</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
function PosisionBox() {
  return (
    <Autocomplete
      disablePortal
      id="posision-ihub"
      options={positionIHUB}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ตำแหน่ง IHUB" />}
    />
  );
}
const positionIHUB = [
  { label: 'Subcommittee' },
  { label: 'PMOs' },
  { label: 'Mentor'},
  { label: 'GEMs' },
  { label: 'Ad Hoc'},
];
function Performance() {
  return (
    <Autocomplete
      disablePortal
      id="performance"
      options={performance}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="การปฏิบัติงาน" />}
    />
  );
}
const performance = [
  { label: 'None' },
];
