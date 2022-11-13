import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
          <Card
            className="card"
            onClick={() =>
              navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
            }
            key={item.id}>
            <CardMedia
              component="img"
              height="500"
              image={IMG_API_URL + item.poster?.file}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.overview}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SearchResults;
