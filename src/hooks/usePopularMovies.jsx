import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/fetchMovies';
import { QUERY } from '../constants/queries';

export const usePopularMovies = () => {
  return useQuery(['popularMovies'], () =>
    fetchMovies(QUERY.POPULAR_MOVIES)
      .then(res => res.data.data.movies)
      .catch(err => console.log(err)),
  );
};
