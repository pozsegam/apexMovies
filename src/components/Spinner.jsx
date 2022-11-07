import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
const Spinner = () => {
  return (
    <Box className="loading">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
