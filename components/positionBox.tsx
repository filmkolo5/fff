import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function PositionBox(props : any) {
  const {
    addpositionihub,
    setAddpositionihub
  } = props;

    return (
      <Autocomplete
        // multiple  // => [1,2,3,4]
        // limitTags={5}
        id="multiple-limit-tags"
        options={positionihub}
        getOptionLabel={(option) => option}
        // ----- เลือก -----
        value={addpositionihub} // title : ''
        onChange={(event, newValue) => {
          // console.log('onChange', newValue);
          setAddpositionihub(newValue);
        }}

        renderInput={(params) => (
          <TextField {...params} className='b-1' label="ตำแหน่ง IHub" />
        )}

        sx={{ m: 1, width:'400px' }}

    />
    
    );
}

const positionihub = [
  // { title: 'Subcommittee' },
  // { title: 'PMOs' },
  // { title: 'Mentor' },
  // { title: 'GEMs' },
  // { title: 'Ad Hoc' }
  'Subcommittee',
  'PMOs',
  'Mentor',
  'GEMs',
  'Ad Hoc',
];