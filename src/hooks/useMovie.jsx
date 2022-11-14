import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getMovie } from '../api/fetchMovies';

export const useMovie = id => {
  return useQuery(['movie', id], () =>
    getMovie(id)
      .then(res => res.data.data.movie)
      .catch(err => console.log(err)),
  );
};
