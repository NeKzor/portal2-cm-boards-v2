import { makeStyles, withStyles } from "@material-ui/core/styles"
import { Translate } from "@material-ui/icons"

export const useStyles = makeStyles(theme => ({
  root: {},
  chmbImageGrid: {
      overflow: 'hidden',
      height: '2.75em',
  },
  chmbImage:{
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    objectFit: 'cover',
    margin : "0 0 0 10px",
  },
  chmbMapText:{
    fontSize : '1.2em',
    color: 'white',
    whiteSpace: 'noWrap',
    margin : "0 0 0 10px",
  },
  teamGrid:{

  },
  player1Grid:{

  },
  player2Grid:{

  },
  playerText:{
    color: 'white',
    margin: '0 0 0 0.5em'
  },
  playerAvatar:{
    height: '1.4em',
    width: '1.4em',
  },
  rankText:{
    color: 'white',
  },
}))
