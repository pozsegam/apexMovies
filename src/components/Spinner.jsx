import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
const Spinner = () => {
  return (
    <Box sx={{ m: 4 }} className="loading">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
