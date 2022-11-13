import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { searchMovies } from '../api/fetchMovies';

export const useSearchMovie = searchTerm => {
  return useQuery(['search_results', searchTerm], () =>
    searchMovies(searchTerm)
      .then(res => res.data.data)
      .catch(err => console.log(err)),
  );
};
