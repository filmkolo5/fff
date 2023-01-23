import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function PositionBox(props : any) {
  const { positionValue , setPositionValue } = props;
    return (
      <Autocomplete
        disablePortal
        id="posision-ihub"
        options={positionIHUB}
        sx={{ m: 1,width: 400 }}
        renderInput={(params) => <TextField {...params} className='b-1' label="ตำแหน่ง IHUB" />}
        inputValue={ positionValue }
        onInputChange={(event, newInputValue) => {
          setPositionValue(newInputValue);
        }}
      />
    );
  }
const positionIHUB = [
    { label: 'Subcommittee' },
    { label: 'PMOs' },
    { label: 'Mentor'},
    { label: 'GEMs' },
    { label: 'Ad Hoc'},
];