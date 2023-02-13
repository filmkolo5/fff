import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function Performance(props:any) {
  const { addUserInfo, setAddUserInfo} = props;
    return (
      <Autocomplete
        options={performance}
        sx={{ m: 1,width: 400 }}
        renderInput={(params) => (<TextField {...params}  className='b-1' label="การปฏิบัติงาน" />)}
        // value={''}
        value={addUserInfo.performance}
        onChange={(event, newValue) => {
        setAddUserInfo({ ...addUserInfo, performance: newValue });
      }}
      />
    );
  }
  
  const performance = [
    'Full-Time',
    'Part-Time',
  ];