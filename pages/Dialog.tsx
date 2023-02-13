import * as React  from 'react';
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

export default function CustomizedDialogs(props : any) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { addUserInfo,
          setAddUserInfo,
          handleAddUser } =  props;
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
          <TextField className='b-0' id="outlined-basic" label="รหัสพนักงาน" variant="outlined" type="text" value={ addUserInfo.username } onChange={(e) => setAddUserInfo({ ...addUserInfo, username: e.target.value })} />
          <Button   variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} ><h5>ค้นหา</h5></Button>
        </Box>
        {/* ----------------------------------------------- ชื่อ ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '193px' ,},}}>
          <TextField  className='b-0' id="outlined-basic" label="ชื่อ" variant="outlined"type="text" value={ addUserInfo.firstname } onChange={(e) => setAddUserInfo({ ...addUserInfo, firstname : e.target.value })}  />
        {/* ----------------------------------------------- นามสกุล ----------------------------------------------- */}
          <TextField  className='b-0' id="outlined-basic" label="นามสุกล" variant="outlined" type="text" value={ addUserInfo.lastname } onChange={(e) => setAddUserInfo({ ...addUserInfo, lastname: e.target.value })}  />
          </Box>
          </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="ตำแหน่ง" variant="outlined" type="text" value={ addUserInfo.position } onChange={(e) => setAddUserInfo({ ...addUserInfo, position: e.target.value })}  />
          </Box>
        </Typography>
        {/* ----------------------------------------------- สังกัด ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="สังกัด" variant="outlined" type="text" value={ addUserInfo.affiliation } onChange={(e) => setAddUserInfo({ ...addUserInfo, affiliation: e.target.value })}  />
          </Box>
        </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ihub -----------------------------------------------
        <Typography gutterBottom>
          <PositionBox addUserInfo = { addUserInfo } setAddUserInfo = { setAddUserInfo } />
        </Typography>
        {/* ----------------------------------------------- การปฏิบัติงาน ----------------------------------------------- */}
        <Typography gutterBottom>
          <Performance addUserInfo = { addUserInfo } setAddUserInfo = { setAddUserInfo }/>
        </Typography>
        </DialogContent>
        {/* ----------------------------------------------- ปุ่มยกเลิก ----------------------------------------------- */}
        <DialogActions>
          <Button autoFocus onClick={handleClose} className='bt-1' sx={{color:'black',m: 1,width:200,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
        {/* ----------------------------------------------- ปุ่มบันทึก ----------------------------------------------- */}
          <Button autoFocus 
          onClick={()=>{
             handleAddUser();
             handleClose();
            }} 
          className='bt-2' 
          sx={{backgroundColor:'#7F669D',color:'#FFFFFF',m: 1,width:200,"&:hover":{backgroundColor:'#b499d3'}}} 
          variant="contained" >
            <h5>บันทึก</h5>
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};