import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
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
     
      <Button variant="text"onClick={handleClickOpen}>  
      <DeleteIcon sx={{ color: '#9898CA' }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <DeleteOutlineIcon  sx={{ fontSize: 100 , color: '#9898CA',ml:18 }} />
          <DialogContentText id="alert-dialog-description"sx={{color: '#000' }} >
    <h3>คุณแน่ใจหรือไม่ว่าคุณต้องการลบรายชื่อนี้</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  variant="outlined"   sx={{color:'black',m: 1,width:150,ml:18,borderColor:'black',"&:hover":{borderColor:'black'}}}     onClick={handleClose}><h4>ยกเลิก</h4></Button>
          <Button  variant="contained"   sx={{backgroundColor:'#4C3364',color:'#FFFFFF',m: 1,width:150,"&:hover":{backgroundColor:'#b499d3'}}} 
           onClick={handleClose} autoFocus>
            <h5>ตกลง</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}





