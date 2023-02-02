import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function PositionBox(props : any) {
  const {} = props;
    return (
      <Autocomplete
      limitTags={1}
      id="multiple-limit-tags"
      options={positionihub}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (<TextField {...params} className='b-1'label="ตำแหน่ง IHub" />)}
      sx={{ m: 1,width:'400px' }}
    />
    );
  }
  const positionihub = [
    { title: 'Subcommittee' },
    { title: 'PMOs' },
    { title: 'Mentor' },
    { title: 'GEMs' },
    { title: 'Ad Hoc' },
  ];
