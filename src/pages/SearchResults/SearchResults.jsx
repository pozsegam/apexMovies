import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';
import { IMG_API_URL } from '../../constants/queries';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { ROUTES } from '../../navigation/routes';

const SearchResults = () => {
  const { name } = useParams();
  const movies = useSearchMovie(name) || [];
  const navigate = useNavigate();
  return movies.isLoading ? (
    <Spinner />
  ) : (
    <Container>
      <Typography sx={{ my: 5 }} variant="h4">
        Search Results
      </Typography>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination>
        {movies.data?.searchMovies.map(item => {
          return (
            <SwiperSlide>
              <MovieCard
                navigation={() =>
                  navigate(`${ROUTES.MOVIE_DETAIL}/${item.id}/${item.name}`)
                }
                key={item.id}
                id={item.id}
                poster={IMG_API_URL + item.poster?.file}
                name={item.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SearchResults;
