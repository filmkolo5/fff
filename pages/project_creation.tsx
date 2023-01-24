import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const [namepoject, setNamepoject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setNamepoject(event.target.value);
  };

  return (
    <div>
      <div className='HEAD-POJECT'>
        <h3>โครงการ</h3>
        </div>
        <div className='BG-POJECT'>
          <div className='TEXT'>
            <h3>สร้างโครงการ</h3>
          </div>
          
      <FormControl sx={{ m: 1, minWidth:400}}>
        <Select value={namepoject} onChange={handleChange}
          displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value=""><a>กรุณาเลือกโครงการ</a> </MenuItem>
          <MenuItem value={1}>โครงการ 1</MenuItem>
          <MenuItem value={2}>โครงการ 2</MenuItem>
          <MenuItem value={3}>โครงการ 3</MenuItem>
        </Select>
      </FormControl>
      </div>
    </div>
  );
}
