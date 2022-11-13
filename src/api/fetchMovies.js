import axios from 'axios';
import { BASE_URL, QUERY } from '../constants/queries';

export const fetchMovies = async query => {
  return axios({
    url: `${BASE_URL}`,
    method: 'post',
    data: {
      query: `${query}`,
    },
  });
};

export const searchMovies = async query => {
  return axios({
    url: `${BASE_URL}`,
    method: 'post',
    data: {
      query: QUERY.SEARCH,
      variables: {
        term: query,
      },
    },
  });
};

export const getMovie = async id => {
  return axios({
    url: `${BASE_URL}`,
    method: 'post',
    data: {
      query: QUERY.GET_MOVIE,
      variables: {
        id: id,
      },
    },
  });
};
