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
      <DeleteIcon sx={{ color: '#BDCDD6'}} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <DeleteOutlineIcon  sx={{ fontSize: 150 , color: '#FF0032',mx:16 }} />
          <DialogContentText id="alert-dialog-description"sx={{color: '#000',ml:10 }} >
    <h4>คุณแน่ใจหรือไม่ว่าคุณต้องการลบรายชื่อนี้?</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  variant="outlined"   sx={{color:'black',width:135,ml:10,mb:2,borderColor:'black',"&:hover":{borderColor:'black'}}}onClick={handleClose}><h4>ยกเลิก</h4></Button>
          <Button  variant="contained"   sx={{backgroundColor:'#FF0032',color:'#FFFFFF',width:135,mr:10,mb:2,"&:hover":{backgroundColor:'#FF0032'}}} 
           onClick={()=>{
            handleDeleteUser(id);
            handleClose();
           }} >
            <h5>ยืนยัน</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}