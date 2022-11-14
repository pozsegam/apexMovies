import { Box, Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';
import { IMG_API_URL } from '../../constants/queries';
import { useMovie } from '../../hooks/useMovie';
import { useSearchWiki } from '../../hooks/useSearchWiki';
import { ROUTES } from '../../navigation/routes';

const MovieDetail = () => {
  const { id, name } = useParams();
  const movie = useMovie(id) || {};
  const navigate = useNavigate();

  const wikiContent = useSearchWiki(name) || [];
  const POSTER = IMG_API_URL + movie.data?.poster?.file;
  return movie.isLoading || wikiContent.isLoading ? (
    <Spinner />
  ) : (
    <Container className="wrapper">
      <Box className="movie-detail-container">
        <img className="poster" src={POSTER} alt="poster" />
        <div className="movie-detail-text-container">
          <h1 className="movie-title">{movie.data?.name}</h1>
          <p className="movie-overview">{movie.data?.overview}</p>
          <h3>Wikipedia Content</h3>
          {wikiContent.data.extract && (
            <p className="wiki-extract">
              {`${wikiContent.data.extract.substring(0, 300)}...`}
            </p>
          )}
          {!wikiContent.data.extract && (
            <p>Couldnt find Wikipedia content for this page...</p>
          )}
          <Link target="_blank" href={wikiContent.data.fullurl}>
            Go to Wikipedia page
          </Link>
        </div>
      </Box>
      <Typography sx={{ my: 5 }} variant="h4">
        Related Movies
      </Typography>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination>
        {movie.data?.similar.map(item => {
          return (
            <SwiperSlide>
              <MovieCard
                navigation={() =>
                  navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
                }
                id={item.id}
                poster={IMG_API_URL + item.poster?.file}
                name={item.name}
                overview={item.overview}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default MovieDetail;
