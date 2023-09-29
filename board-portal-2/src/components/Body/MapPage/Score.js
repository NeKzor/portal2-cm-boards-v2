import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import getScoreFromString from "../../../Utils/timeutils"

function Score({ rank, avatar, name, time, score }) {
  const classes = useStyles();

  const getImage = () => {
    if (avatar.length === 1) {
      return (
        <img
          className={classes.scoreImage}
          src={avatar[0]}
          alt="player profile"
        ></img>
      );
    } else if (avatar.length > 1) {
      return (
        <>
          <img
            className={classes.scoreImage}
            src={avatar[0]}
            alt="player profile"
          ></img>
          <img
            className={classes.scoreImage}
            src={avatar[1]}
            alt="player profile"
          ></img>
        </>
      );
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.scoreItem}
    >
      <Grid item xs={6}>
      <Grid container alignItems="center">
        <Typography
          className={classes.scoreRank}
          variant="caption"
          component="span"
        >
          {rank}
        </Typography>
        {getImage()}
        <Typography
          className={classes.scoreName}
          variant="body1"
          component="span"
        >
          {name}
        </Typography>
      </Grid>
      </Grid>
      <Grid item xs={6}>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Typography
          className={classes.scoreText}
          variant="body1"
          component="span"
        >
          {getScoreFromString(score)}
        </Typography>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default Score;
