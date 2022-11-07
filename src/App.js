import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ROUTES } from './navigation/routes';
import DiscoverMovies from './pages/DiscoverMovies/DiscoverMovies';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import PopularMovies from './pages/PopularMovies/PopularMovies';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={`${ROUTES.POPULAR}`} element={<PopularMovies />} />
          <Route path={`${ROUTES.DISCOVER}`} element={<DiscoverMovies />} />
          <Route
            path={`${ROUTES.MOVIE_DETAIL}/:name`}
            element={<MovieDetail />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
