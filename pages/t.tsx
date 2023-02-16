import { Autocomplete, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Form() {
  const router = useRouter();
  const [name1, setName1] = useState('');
  const [name1Error, setName1Error] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleName1Change = (event: any, value: string | null) => {
    if (!value) {
      setName1Error('Name is required');
    } else {
      setName1Error('');
    }
    setName1(value || '');
  };

  const handleAgeChange = (event: any, value: string | null) => {
    if (!value) {
      setAgeError('Age is required');
    } else {
      setAgeError('');
    }
    setAge(value || '');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!name1) {
      setName1Error('Name is required');
    } else {
      setName1Error('');
    }
    if (!age) {
      setAgeError('Age is required');
    } else {
      setAgeError('');
    }
    if (name1 && age) {
      console.log('Form submitted with name:', name1, 'and age:', age);
      router.push('/data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        id="name"
        options={['John', 'Jane', 'Doe', 'Joe']}
        value={name1}
        onChange={handleName1Change}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Name"
            variant="outlined"
            error={!!name1Error}
            helperText={name1Error}
          />
        )}
      />
      <Autocomplete
        id="age"
        options={['10', '20', '30']}
        value={age}
        onChange={handleAgeChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Age"
            variant="outlined"
            error={!!ageError}
            helperText={ageError}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
