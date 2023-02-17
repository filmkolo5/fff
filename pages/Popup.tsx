import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PopupInCreate from '../components/PopupInCreate';


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button  
      sx={{ borderColor: '#ffff',"&:hover":{borderColor:'#Ffff',backgroundColor:'#ffff' }}}  
      variant="outlined" 
      onClick={handleClickOpen}>
      <PersonAddAlt1Icon 
      sx={{ color: '#4C3364',fontSize: 32}}  />
      </Button>
      <PopupInCreate/>
    </div>
  );
}
