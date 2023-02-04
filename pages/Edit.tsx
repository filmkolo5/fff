// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import EditIcon from '@mui/icons-material/Edit';
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export interface DialogTitleProps {
//   id: string;
//   children?: React.ReactNode;
//   onClose: () => void;
// }


// function BootstrapDialogTitle(props: DialogTitleProps) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 10,
//             top: 10,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// export default function CustomizedDialogs() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div>
//       <Button variant="contained"onClick={handleClickOpen} sx={{ backgroundColor:'#19C816',"&:hover":{backgroundColor:'#6AE967'}}}> <EditIcon/></Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle  id="customized-dialog-title " onClose={handleClose} >
//           แก้ไขข้อมูลพนักงาน
//         </BootstrapDialogTitle >
//         <DialogContent dividers>
//         <Box sx={{'& > :not(style )': {  m: 1, width: '50' },}}>
//       <TextField  id="outlined-basic" label="รหัสพนักงาน" variant="outlined" />
//       <Button  variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} >ค้นหา</Button>
//     </Box>
//           <Typography gutterBottom>
//           <Box  sx={{'& > :not(style)': { m: 1, width: '193px' ,},}}>
//       <TextField  id="outlined-basic" label="ชื่อ" variant="outlined" />
//       <TextField  id="outlined-basic" label="นามสุกล" variant="outlined" />
//     </Box>
//           </Typography>
//           <Typography gutterBottom>
//           <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
//       <TextField  id="outlined-basic" label="ตำแหน่ง" variant="outlined" />
//     </Box>
//           </Typography>
//           <Typography gutterBottom>
//           <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
//       <TextField  id="outlined-basic" label="สังกัด" variant="outlined" />
//     </Box>
//           </Typography>
//           <Typography gutterBottom>
//           <Autocomplete
//       disablePortal
//       id="position-ihub"
//       options={positionIHUB}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="ตำแหน่ง IHUB" />}
//     />
//           </Typography>
//           <Typography gutterBottom>
//           <Autocomplete
//       disablePortal
//       id="performance"
//       options={positionIHUB}
//       sx={{ width: 300  }}
//       renderInput={(params) => <TextField {...params} label="การปฏิบัติงาน" />}
//     />
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//         <Button autoFocus onClick={handleClose}className='bt-1' sx={{color:'black',width:210,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined">ยกเลิก</Button>
//         <Button autoFocus onClick={handleClose}className='bt-2'  sx={{backgroundColor:'#7F669D',color:'#FFFFFF',width:210,"&:hover":{backgroundColor:'#b499d3'}}} variant="contained" >บันทึก</Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
// function PosisionBox() {
//   return (
//     <Autocomplete
//       disablePortal
//       id="posision-ihub"
//       options={positionIHUB}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="ตำแหน่ง IHUB" />}
//     />
//   );
// }
// const positionIHUB = [
//   { label: 'Subcommittee' },
//   { label: 'PMOs' },
//   { label: 'Mentor'},
//   { label: 'GEMs' },
//   { label: 'Ad Hoc'},
// ];
// function Performance() {
//   return (
//     <Autocomplete
//       disablePortal
//       id="performance"
//       options={performance}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="การปฏิบัติงาน" />}
//     />
//   );
// }
// const performance = [
//   { label: 'None' },
// ];




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
import Box from '@mui/material/Box';
import { Performance } from '../components/performance';
import { PositionBox } from '../components/positionBox';
import EditIcon from '@mui/icons-material/Edit';

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
  const { addusername ,
          setAddusername , 
          addfristname , 
          setAddfristname , 
          addlastname , 
          setAddlastname , 
          addposition , 
          setAddposition , 
          addaffiliation , 
          setAddaffiliation , 
          addpositionihub , 
          setAddpositionihub,
          handleAddUser } =  props;
  return (
    <div>
      <Button className="contained" variant="contained"onClick={handleClickOpen} sx={{ backgroundColor:'#19C816',"&:hover":{backgroundColor:'#6AE967'}}}> <EditIcon/></Button>
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
          <TextField className='b-0' id="outlined-basic" label="รหัสพนักงาน" variant="outlined" type="text" value={ addusername } onChange={ (e) => setAddusername(e.target.value) }/>
          <Button   variant="contained" color="secondary"   sx={{backgroundColor:'#7F669D',"&:hover":{backgroundColor:'#b499d3'}}} ><h5>ค้นหา</h5></Button>
        </Box>
        {/* ----------------------------------------------- ชื่อ ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '193px' ,},}}>
          <TextField  className='b-0' id="outlined-basic" label="ชื่อ" variant="outlined"type="text" value={ addfristname } onChange={ (e) => setAddfristname(e.target.value) } />
        {/* ----------------------------------------------- นามสกุล ----------------------------------------------- */}
          <TextField  className='b-0' id="outlined-basic" label="นามสุกล" variant="outlined" type="text" value={ addlastname } onChange={ (e) => setAddlastname(e.target.value) }/>
          </Box>
          </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="ตำแหน่ง" variant="outlined" type="text" value={ addposition } onChange={ (e) => setAddposition(e.target.value) } />
          </Box>
        </Typography>
        {/* ----------------------------------------------- สังกัด ----------------------------------------------- */}
        <Typography gutterBottom>
          <Box sx={{'& > :not(style)': { m: 1, width: '400px' },}}>
            <TextField className='b-0' id="outlined-basic" label="สังกัด" variant="outlined" type="text" value={ addaffiliation } onChange={ (e) => setAddaffiliation(e.target.value) } />
          </Box>
        </Typography>
        {/* ----------------------------------------------- ตำแหน่ง ihub ----------------------------------------------- */}
        <Typography gutterBottom>
          <PositionBox addpositionihub = { addpositionihub } setAddpositionihub = { setAddpositionihub } />
        </Typography>
        {/* ----------------------------------------------- การปฏิบัติงาน ----------------------------------------------- */}
        <Typography gutterBottom>
          <Performance/>
        </Typography>
        </DialogContent>
        {/* ----------------------------------------------- ปุ่มยกเลิก ----------------------------------------------- */}
        <DialogActions>
          <Button autoFocus onClick={handleClose} className='bt-1' sx={{color:'black',m: 1,width:200,borderColor:'black',"&:hover":{borderColor:'black'}}}  variant="outlined"><h4>ยกเลิก</h4></Button>
        {/* ----------------------------------------------- ปุ่มบันทึก ----------------------------------------------- */}
          <Button autoFocus 
          onClick={()=>{
            // flow
            // 1. เอาค่าที่กรอกในหน้าจอ dialog ยิงไป backend เพื่อเพิ่มข้อมูลในฐานข้อมูล
            // 2. ยิงไป backend เพื่อดึง users ทั้งหมดมาเก็บในตัวแปร users
            // setUsers(
            // [
            //   ...users, // เอาข้อมูลเก่า
            //   {
            //     number:users.length+1,
            //     employee_id: addusername,
            //     fname_lname: ${addfristname} ${addlastname},
            //     position: addposition,
            //     affiliation: addaffiliation,
            //     ihub_position: addpositionihub,
            //     performance:"",
            //   }
            //   // เอาข้อมูลที่มีการกรอกปัจจุบันมาใส่ในตัวแปร users
            // ]
            //  );
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
}