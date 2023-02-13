import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  sx={{ borderColor: '#ffff',"&:hover":{borderColor:'#Ffff',backgroundColor:'#ffff' }}}  variant="outlined" onClick={handleClickOpen}>
      <GroupAddIcon sx={{ color: '#4C3364',fontSize: 32}}  />
      </Button>
      <Dialog open={open} onClose={handleClose}  aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        
        </DialogTitle>

        <DialogContent>
          <DialogContentText >
    <Box
      component="form" sx={{'& .MuiTextField-root': { m: 1, width: '45ch' },}} noValidate autoComplete="off" >
        <TextField id="outlined-multiline-static" label="กรอกรหัสพนักงงาน"multiline rows={4} />
        <Button autoFocus onClick={handleClose}  sx={{ m:1, backgroundColor:'#3A1062',color:'#FFFFFF',width:100,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" ><h5>ยืนยัน</h5></Button>
    </Box>
          </DialogContentText>
          <h4>*กรุณาใส่ , ( Comma ) หรือ เว้นวรรค </h4>
       <h4>(ตัวอย่าง : 508112,510437,510492,505139 หรือ 508112 510437 510492 505139 )</h4>
        </DialogContent>
      </Dialog>
    </div>
  );
}
