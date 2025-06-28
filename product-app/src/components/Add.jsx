import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  const [form, setForm] = useState({
    todo: '',
    completed: '',
    userId: ''
  });

  const valueUpdate = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = () => {
    console.log(form);
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="todo"
        label="Todo"
        variant="outlined"
        name="todo"
        value={form.todo}
        onChange={valueUpdate}
      />
      <TextField
        id="userId"
        label="User ID"
        variant="outlined"
        name="userId"
        type="number"
        value={form.userId}
        onChange={valueUpdate}
      />
      <TextField
        id="completed"
        label="Completed (true/false)"
        variant="outlined"
        name="completed"
        value={form.completed}
        onChange={valueUpdate}
      />
      <Button variant="contained" onClick={submitForm}>
        Submit
      </Button>
    </Box>
  );
};

export default Add;
