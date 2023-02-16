import { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleNameChange = (event:any) => {
    const value = event.target.value.trim();
    setName(value);
    if (!value) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleAgeChange = (event:any) => {
    const value = event.target.value;
    setAge(value);
    if (!value) {
      setAgeError('Age is required');
    } else {
      setAgeError('');
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
    if (!age) {
      setAgeError('Age is required');
    } else {
      setAgeError('');
    }
    if (name && age) {
      console.log('Form submitted with name:', name, 'and age:', age);
      router.push('/data'); // replace with the path to your next page
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" variant="outlined" value={name} onChange={handleNameChange} error={!!nameError} helperText={nameError} />
      <InputLabel id="age-label">Age</InputLabel>
      <Select labelId="age-label" value={age} onChange={handleAgeChange} error={!!ageError} >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
