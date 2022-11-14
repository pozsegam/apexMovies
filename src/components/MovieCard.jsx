import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MovieCard = ({ navigation, id, poster, name, overview }) => {
  return (
    <Card className="card" onClick={navigation} key={id}>
      <CardMedia component="img" height="500" image={poster} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
