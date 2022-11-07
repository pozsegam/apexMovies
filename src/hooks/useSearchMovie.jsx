import { useEffect, useState } from 'react';
import { searchMovies } from '../api/fetchMovies';
export const useSearchMovie = searchTerm => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const delay = setTimeout(
      () =>
        searchMovies(searchTerm)
          .then(res => setMovies(res.data?.data?.searchMovies))
          .catch(err => console.log(err)),
      100,
    );
    return () => {
      clearTimeout(delay);
    };
  }, [searchTerm]);

  return movies;
};
