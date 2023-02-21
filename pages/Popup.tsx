import * as React from 'react';
// Material
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PopupInCreate from '../components/PopupInCreate';

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
      <Button  
      sx={{ borderColor: '#ffff',"&:hover":{borderColor:'#Ffff',backgroundColor:'#ffff' }}}  
      variant="outlined" 
      onClick={handleClickOpen}>
      <PersonAddAlt1Icon 
      sx={{ color: '#4C3364',fontSize: 32}}  />
      </Button>
      <PopupInCreate
      handleClose = { handleClose }
      open = { open }
      />
    </div>
  );
}
