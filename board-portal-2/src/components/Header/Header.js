import steamIcon from "./img/steamicon.png"
import SPNavBar from "./img/SPNavBar.png"
import CoopNavBar from "./img/CoopNavBar.png"
import ScoreUpdatesNavBar from "./img/ScoreUpdatesNavBar.png"
import OtherNavBar from "./img/OtherNavBar.png"
import AggregateNavBar from "./img/AggregatedNavBar.png"
import P2SRBasicIcon from "./img/P2SRBasicIconNavBar.png"
import { Grid, AppBar, Toolbar, Typography, Button} from "@material-ui/core"
import { useStyles} from "./style.js"
import React from "react"

function NavBar() {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={1}/>
            <Grid item xs={2}>
              <Grid
                container
                className="logoName"
                justifyContent="flex-start"
                alignItems="center"
                noWrap
              >
                <img
                  className={classes.logo}
                  src={P2SRBasicIcon}
                  alt={OtherNavBar}
                />
                <Grid item className="titleText">
                  <Typography variant="h5" className={classes.title} noWrap>
                    Portal 2
                  </Typography>
                  <Typography variant="h7" noWrap>
                    Challenge Mode Leaderboards
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Grid
                className="pageSelection"
                container
                justifyContent="space-evenly"
                alignItems="center"
                spacing={5}
                noWrap
              >
                <Button size="large" href="/" startIcon={<img className={classes.icon} src={ScoreUpdatesNavBar} alt={"scoreupdates"}/>}>
                  <Typography className={classes.navButton}>Score Updates</Typography>
                </Button>
                <Button size="large" href="/sp" startIcon={<img className={classes.icon} src={SPNavBar} alt={"singleplayer"}/>}>
                  <Typography className={classes.navButton}>Singleplayer</Typography>
                </Button>
                <Button size="large" href="/coop" startIcon={<img className={classes.icon} src={CoopNavBar} alt={"coop"}/>}>
                  <Typography className={classes.navButton}>Cooperative</Typography>
                </Button>
                <Button size="large" href="/agg-selector" startIcon={<img className={classes.icon} src={AggregateNavBar} alt={"aggregate"}/>}>
                  <Typography className={classes.navButton}>Aggregated</Typography>
                </Button>
                <Button size="large" startIcon={<img className={classes.moreIcon} src={OtherNavBar} alt={"other"}/>}>
                    <Typography className={classes.navButton}>More</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container justifyContent="flex-end">
                    <Button 
                    size='large' 
                    href="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Fboard.iverb.me%2Flogin&openid.realm=http%3A%2F%2Fboard.iverb.me&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
                    id='steam-login'
                    startIcon={<img src={steamIcon} alt={"Steam Icon"}/>}
                    >
                    <Typography> Sign In </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        </Toolbar>
    </AppBar>
  );
}


export default NavBar