import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ApexLogo } from './ApexLogo';
import SearchBar from './SearchBar';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ background: '#090733' }} position="sticky">
      <Toolbar className="toolbar">
        <ApexLogo />
        <div className="nav-item-container">
          <SearchBar />
          <Typography
            className="nav-item"
            onClick={() => navigate(`${ROUTES.POPULAR}`)}
            variant="h5">
            Popular
          </Typography>
          <Typography
            className="nav-item"
            onClick={() => navigate(`${ROUTES.DISCOVER}`)}
            variant="h5">
            Discover
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
