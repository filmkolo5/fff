import React from 'react'
// Material
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function PopupInCreate(props:any) {
  const { handleClose, open } = props;

  const [employee, setEmployee] = React.useState('');

  return (
    <div>
        <Dialog open = { open } onClose={handleClose}  aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogContent>
          <DialogContentText >
            <Box
      component="form" sx={{'& .MuiTextField-root': { m: 1, width: '45ch' },}} noValidate autoComplete="off" >
        <TextField id="outlined-multiline-static" label="กรอกรหัสพนักงงาน"multiline rows={4} value={ employee } onChange={ (e) => setEmployee(e.target.value)} />
        <Button autoFocus onClick={handleClose}  sx={{ m:1, backgroundColor:'#3A1062',color:'#FFFFFF',width:100,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" ><h5>ยืนยัน</h5></Button>
            </Box>
          </DialogContentText>
      <h4>*กรุณาใส่ , ( Comma ) หรือ เว้นวรรค </h4>
      <h4>(ตัวอย่าง : 508112,510437,510492,505139 หรือ 508112 510437 510492 505139 )</h4>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PopupInCreate