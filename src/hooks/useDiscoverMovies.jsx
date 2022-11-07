import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api/fetchMovies';
import { QUERY } from '../constants/queries';

export const useDiscoverMovies = () => {
  return useQuery(['discoverMovies'], () =>
    fetchMovies(QUERY.DISCOVER_MOVIES)
      .then(res => res.data.data.discoverMovies)
      .catch(err => console.log(err)),
  );
};
