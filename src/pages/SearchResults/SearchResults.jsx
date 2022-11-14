import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';
import { IMG_API_URL } from '../../constants/queries';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { ROUTES } from '../../navigation/routes';

const SearchResults = () => {
  const { name } = useParams();
  const movies = useSearchMovie(name) || [];
  console.log(movies);
  const navigate = useNavigate();
  return movies.isLoading ? (
    <Spinner />
  ) : (
    <div>
      {movies.data?.searchMovies.map(item => {
        return (
          <MovieCard
            navigation={() => () =>
              navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)}
            id={item.id}
            poster={IMG_API_URL + item.poster?.file}
            name={item.name}
            overview={item.overview}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
