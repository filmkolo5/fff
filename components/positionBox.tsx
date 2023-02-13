  import Autocomplete from '@mui/material/Autocomplete';
  import TextField from '@mui/material/TextField';
  import { useEffect, useState } from 'react';
  /* Axios */
  var axios = require('axios');
  export function PositionBox(props : any) {
    const {
      addUserInfo,
      setAddUserInfo
    } = props;

    const [positionIhub, setpositionIhub] = useState([]);
      useEffect(() => {
        fetchPositionBox();
      }, [])

      const fetchPositionBox = () => {
        const config = {
          method:'get',
          url:'http://localhost:8080/positionihub/all',
        };

        axios(config)
        .then((response:any) => {
        console.log('fetch positionihub success:',response.data);

        const positionBox = response.data.map((positionihub:any) => {
          return ({
            ...positionihub
        })
        });
        setpositionIhub(positionBox);
        console.log(positionBox);
        })
          .catch((error:any) => {
          console.log(error);
        });
  };

      return (
        <Autocomplete
          options={positionIhub}
          sx={{ m: 1,width: 400 }}
          getOptionLabel={(option) => option.positionihub}
          renderInput={(params) => (<TextField {...params} className='b-1' label="ตำแหน่งIHUB" />)}
          value={addUserInfo.positionihub}
          onChange={(event, newValue) => {
          setAddUserInfo({ ...addUserInfo, positionihub: newValue });
        }}
        />
        
      
      );
  }