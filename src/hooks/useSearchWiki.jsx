import { useQuery } from '@tanstack/react-query';
import { searchWiki } from '../api/searchWiki';

export const useSearchWiki = movieName => {
  return useQuery(['wikiContent', movieName], () =>
    searchWiki(movieName)
      .then(res => Object.values(res.data?.query?.pages)[0])
      .catch(err => console.log(err)),
  );
};
