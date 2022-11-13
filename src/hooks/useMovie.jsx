import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getMovie } from '../api/fetchMovies';

export const useMovie = id => {
  const [movie, setMovie] = useState({});
  useQuery(['movie', id], () =>
    getMovie(id)
      .then(res => setMovie(res.data.data.movie))
      .catch(err => console.log(err)),
  );
  return movie;
};
