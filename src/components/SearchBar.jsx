import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, autocompleteClasses, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchMovie } from '../hooks/useSearchMovie';
import { ROUTES } from '../navigation/routes';
import Spinner from './Spinner';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = useState('');
  const movies = useSearchMovie(searchTerm) || [];
  const navigate = useNavigate();

  return (
    <Autocomplete
      inputvalue={searchTerm}
      value={value}
      loading={searchTerm === '' ? false : true}
      loadingText={<Spinner />}
      onChange={(event, value) => {
        navigate(`${ROUTES.MOVIE_DETAIL}/${value.name}`);
      }}
      popupIcon={<SearchIcon />}
      getOptionLabel={option => option.name || ''}
      options={movies}
      noOptionsText={'Couldnt find movie...'}
      renderInput={movies => (
        <TextField {...movies} label="Search for a Movie" />
      )}
      onInputChange={e => setSearchTerm(e.target.value)}
      sx={{
        width: 300,
        [`& .${autocompleteClasses.popupIndicator}`]: {
          transform: 'none',
        },
        background: 'white',
      }}></Autocomplete>
  );
};

export default SearchBar;
