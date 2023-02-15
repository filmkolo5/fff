import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React  from 'react';


export function Performance(props:any) {
  const { addUserInfo, setAddUserInfo} = props;
  const [isInputsEmpty, setIsInputsEmpty] = React.useState(true);

  React.useEffect(() => {
    const hasEmptyInput = Object.values(addUserInfo).some(val => val === '');
    setIsInputsEmpty(hasEmptyInput);
  }, [addUserInfo]);

    return (
      <Autocomplete
        options={performance}
        sx={{ m: 1,width: 400 }}
        renderInput={(params) => (<TextField {...params}  className='b-1' label="การปฏิบัติงาน" error={isInputsEmpty && addUserInfo.performance === ''}helperText={isInputsEmpty && addUserInfo.performance === '' ? 'กรุณาเลือกการปฏิบัติการ' : ''}/>)}
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