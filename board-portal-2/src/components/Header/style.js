import { makeStyles, withStyles } from "@material-ui/core/styles"
import navBackground from "./img/navDarkBackground.jpg"

export const useStyles = makeStyles((theme) => ({
  root: {},
  appBar:{
    background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${navBackground}) repeat fixed`,
    backgroundSize: 'auto 6%',
  },
  toolbar: {
    height: '100px'
  },
  title: {
    fontSize: "2em",
  },
  subTitle: {    
    fontSize: "1.5em",
  },
  logoGrid: {
  },
  steam: {
    fontSize: "1.5em",
  },
  navButtonText: {
    fontSize: "1.1rem",
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
