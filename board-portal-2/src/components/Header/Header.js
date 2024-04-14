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
    <div id='container' className={classes.root}>
      <AppBar color='primary' position='static'>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            justify='space-around'
            alignitems='flex-start'
            direction='column'>
            <Grid item>
              <Typography
                color='textPrimary'
                className={classes.title}
                noWrap
                variant='h5'>
                Portal 2 Leaderboards
              </Typography>
            </Grid>
            <Grid item className={classes.headerLinks}>
              <CustomButton variant='text' href='/'>
                <img src={scoreUpdates} className={classes.icon} />
                Score Updates
              </CustomButton>
              <CustomButton variant='text' href='/sp'>
                <img src={singlplayerIcon} className={classes.icon} />
                Single Player
              </CustomButton>
              <CustomButton variant='text' href='/coop'>
                <img src={coopIcon} className={classes.icon} />
                Cooperative
              </CustomButton>
              <CustomButton variant='text' href='/agg-selector'>
                <img src={aggregatedIcon} className={classes.icon} />
                Aggregated
              </CustomButton>
              {/* <Dropdown /> */}
              <CustomButton
                variant='text'
                href='https://www.speedrun.com/Portal_2'>
                <img src={fullGameRunsIcon} className={classes.icon} />
                Full Game Runs
              </CustomButton>
            </Grid>
          </Grid>
          <Grid
            container
            direction='column'
            justify='center'
            alignitems='flex-end'
            xs='2'>
            <Grid item container justify='flex-end'>
              <CustomButton
                className={classes.steam}
                href='https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Fboard.iverb.me%2Flogin&openid.realm=http%3A%2F%2Fboard.iverb.me&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select'
                id='steam-login'>
                <div>Sign In</div>
                <img src={steamIcon} style={{ height: "45px" }} />
              </CustomButton>
            </Grid>
            <Grid item container justify='flex-end' alignitems='center'>
              <Grid item>
                <Typography color='textPrimary'>Dark</Typography>
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