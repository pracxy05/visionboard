import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ value, onChange, placeholder = "Search tasks..." }) {
  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{ minWidth: 220 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        sx: { bgcolor: '#23263b', color: 'white' },
      }}
    />
  );
}

export default SearchBar;
