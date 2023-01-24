import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function Performance() {
    return (
      <Autocomplete
        disablePortal
        id="performance"
        options={performance}
        sx={{ m: 1,width: 400 }}
        renderInput={(params) => <TextField {...params}  className='b-1' label="การปฏิบัติงาน" />}
      />
    );
  }
  const performance = [
    { label: 'Full-Time' },
    { label: 'Part-Time' },
  ];