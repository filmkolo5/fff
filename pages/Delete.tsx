import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export default function AlertDialog(props:any) {
  const { handleDeleteUser, id } = props;
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
        <DeleteOutlineIcon  sx={{ fontSize: 100 , color: '#9898CA',ml:11 }} />
          <DialogContentText id="alert-dialog-description"sx={{color: '#000' }} >
    คุณแน่ใจหรือไม่ว่าคุณต้องการลบรายชื่อนี้
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  variant="outlined"   sx={{color:'black',m: 1,width:135,borderColor:'black',"&:hover":{borderColor:'black'}}}     onClick={handleClose}>ยกเลิก</Button>
          <Button  variant="contained"   sx={{backgroundColor:'#4C3364',color:'#FFFFFF',m: 1,width:135,"&:hover":{backgroundColor:'#b499d3'}}} 
           onClick={()=>{
            handleDeleteUser(id);
            handleClose();
           }} >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}