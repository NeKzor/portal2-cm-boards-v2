import { makeStyles, withStyles } from "@material-ui/core/styles"
import navBackground from "./img/navDarkBackground.jpg"

export const useStyles = makeStyles((theme) => ({
  root: {},
  appBar:{
    background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${navBackground}) repeat fixed`,
    backgroundSize: 'auto 6%',
  },
  toolbar: {
    minHeight: "5em",
    maxHeight: "8em",
  },
  title: {
  },
  steam: {
    justifyContent: "flex-end",
    alignSelf: "center",
    "& div": {
      fontSize: "1.25rem",
      padding: ".5em",
    },
  },
  navButton: {
    fontSize: "1rem",
  },
  icon: {
    height: "0.8em",
  },
  moreIcon: {
    height: "0.25em",
  },
  logo: {
    height: "4em",
  },
}));
