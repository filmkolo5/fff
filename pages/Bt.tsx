import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
// npm install notistack
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleCloseVariant = (variant: VariantType) => () => {
    enqueueSnackbar('บันทึกสำเร็จ', { variant });
  };

  return (
    <React.Fragment>
           <DialogActions >
          <Button autoFocus onClick={handleCloseVariant('success')} sx={{backgroundColor:'#7F669D',color:'#FFFFFF',m: 1,width:200,"&:hover":{backgroundColor:'#b499d3'}}} 
          variant="contained" >   
            บันทึก
          </Button>


          </DialogActions>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
