import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../navigation/routes';
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const resetSearchTerm = () => {
    setSearchTerm('');
  };

  const goSeeResults = name => {
    if (name === '') {
      return;
    }

    navigate(`${ROUTES.SEARCH_RESULTS}/${searchTerm}`);
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <InputBase
        value={searchTerm}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <IconButton
        onClick={() => goSeeResults(searchTerm)}
        type="button"
        sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton onClick={resetSearchTerm} color="primary" sx={{ p: '10px' }}>
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}
