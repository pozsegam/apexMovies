export const BASE_URL = 'https://tmdb.sandbox.zoosh.ie/dev/graphql';
export const WIKI_BASE_URL = 'https://en.wikipedia.org/w/api.php?';

export const QUERY = {
  POPULAR_MOVIES: `query fetchPopular {
        movies: popularMovies {
          id
          name
          overview
          releaseDate
          img: poster {
            url: custom(size: "w185_and_h278_bestv2")
          }
          reviews {
            id
            author
            content
            language {
              code
              name
            }
          }
        }
      }`,

  DISCOVER_MOVIES: `query DiscoverMovies {
    discoverMovies(filter: { year: 2001 } ) {
      id
      name
      overview
      releaseDate
      poster {
        large
      }
    }
  }
  `,

  SEARCH: `query SearchMovies($term: String!) {
    searchMovies(query: $term) {
      id
      name
      overview
      releaseDate
      cast {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }`,
};
