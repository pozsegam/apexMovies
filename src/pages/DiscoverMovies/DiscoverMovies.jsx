import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useDiscoverMovies } from '../../hooks/useDiscoverMovies';
import { ROUTES } from '../../navigation/routes';

const DiscoverMovies = () => {
  const movies = useDiscoverMovies() || [];
  const navigate = useNavigate();

  return movies.isLoading ? (
    <Box sx={{ m: 4 }}>
      <Spinner />
    </Box>
  ) : (
    <Grid container gap={5} padding={5}>
      {movies.data.map(item => {
        return (
          <Card
            className="card"
            onClick={() => navigate(`${ROUTES.MOVIE_DETAIL}/${item.name}`)}
            key={item.id}>
            <CardMedia
              component="img"
              height="500"
              image={item.poster?.large}
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
    </Grid>
  );
};

export default DiscoverMovies;
