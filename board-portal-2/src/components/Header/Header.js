import steamIcon from "./img/steamicon.png"
import SPNavBar from "./img/SPNavBar.png"
import CoopNavBar from "./img/CoopNavBar.png"
import ScoreUpdatesNavBar from "./img/ScoreUpdatesNavBar.png"
import OtherNavBar from "./img/OtherNavBar.png"
import AggregateNavBar from "./img/AggregatedNavBar.png"
import P2SRBasicIcon from "./img/P2SRBasicIconNavBar.png"
import { Grid, AppBar, Toolbar, Typography, Button, Box} from "@material-ui/core"
import { useStyles} from "./style.js"
import React from "react"

function NavBar() {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters className={classes.toolbar}>
          <Grid container direction="row" alignItems="center" justifyContent="space-evenly">

            <Grid item lg>
              <Box sx={{display:{xs:'none', lg:'block'}}}>
              <Grid
                container
                className={classes.logoGrid}
                alignItems="center"
                justifyContent="center"
                wrap="nowrap"
              >
                <img
                  className={classes.logo}
                  src={P2SRBasicIcon}
                  alt={OtherNavBar}
                />
                <Grid item className="titleText">
                  <Typography className={classes.title}>
                    Portal 2
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Challenge Mode Leaderboards
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            </Grid>

            <Grid item lg md={10}>
              <Grid
                container
                className="pageSelection"
                alignItems="center"
                justifyContent="center"
                wrap="nowrap"
                spacing={3}
              >
                <Grid item>
                <Button size="large" href="/" startIcon={<img className={classes.icon} src={ScoreUpdatesNavBar} alt={"scoreupdates"}/>}>
                  <Typography className={classes.navButtonText} noWrap>Score Updates</Typography>
                </Button>
                </Grid>
                <Grid item>
                <Button size="large" href="/sp" startIcon={<img className={classes.icon} src={SPNavBar} alt={"singleplayer"}/>}>
                  <Typography className={classes.navButtonText}>Singleplayer</Typography>
                </Button>
                </Grid>
                <Grid item>
                <Button size="large" href="/coop" startIcon={<img className={classes.icon} src={CoopNavBar} alt={"coop"}/>}>
                  <Typography className={classes.navButtonText}>Cooperative</Typography>
                </Button>
                </Grid>
                <Grid item>
                <Button size="large" href="/agg-selector" startIcon={<img className={classes.icon} src={AggregateNavBar} alt={"aggregate"}/>}>
                  <Typography className={classes.navButtonText}>Aggregated</Typography>
                </Button>
                </Grid>
                <Grid item>
                <Button size="large" startIcon={<img className={classes.moreIcon} src={OtherNavBar} alt={"other"}/>}>
                    <Typography className={classes.navButtonText}>More</Typography>
                </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg md={2}>
                <Grid container justifyContent="center" wrap="nowrap">
                    <Button 
                    size='large' 
                    href="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Fboard.iverb.me%2Flogin&openid.realm=http%3A%2F%2Fboard.iverb.me&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
                    id='steam-login'
                    startIcon={<img src={steamIcon} alt={"Steam Icon"}/>}>
                    <Typography className={classes.steam}> Sign In </Typography>
                    </Button>
                </Grid>
            </Grid>

          </Grid>
        </Toolbar>
    </AppBar>
  );
}


export default NavBar