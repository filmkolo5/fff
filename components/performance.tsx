import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function Performance(props:any) {
  const { addperformance,
    setAddperformance} = props;
    return (
      <Autocomplete
        id="performance"
        options={performance}
        sx={{ m: 1,width: 400 }}
        renderInput={(params) => (<TextField {...params}  className='b-1' label="การปฏิบัติงาน" />)}
        value={addperformance} // title : ''
        onChange={(event, newValue) => {
          console.log('onChange', newValue);
          setAddperformance(newValue);
        }}
      />
    );
  }
  
  const performance = [
    'Full-Time',
    'Part-Time',
  ];