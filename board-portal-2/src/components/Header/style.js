import { makeStyles, withStyles } from "@material-ui/core/styles"
import navBackground from "./img/navDarkBackground.jpg"

export const useStyles = makeStyles((theme) => ({
  root: {},
  appBar:{
    background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${navBackground}) repeat fixed`,
    backgroundSize: 'auto 6%',
  },
  toolbar: {
    minHeight: "8.033em",
    alignitems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexgrow: 1,
    alignSelf: "auto",
    paddingBottom: "1em"
  },
  subTitle: {    
    fontSize: "1.5em",
  },
  logoGrid: {
  },
  steam: {
    justifycontent: "flex-end",
    alignSelf: "center",
    "& div": {
      fontSize: "1.25rem",
      padding: ".5em"
    }
  },
  icon: {
    height: "1.2em",
  },
  moreIcon: {
    height: "0.3em",
  },
  logo: {
    height: "5em",
  },
}));
