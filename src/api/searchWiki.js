import axios from 'axios';
import { WIKI_BASE_URL } from '../constants/queries';

export const searchWiki = async query => {
  const params = {
    origin: '*',
    format: 'json',
    action: 'query',
    prop: 'extlinks|extracts|images|info',
    inprop: 'url',
    piprop: 'original',
    exintro: true,
    explaintext: true,
    titles: query,
  };

  return axios.get(WIKI_BASE_URL, { params });
};
