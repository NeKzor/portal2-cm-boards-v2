import steamIcon from "./img/steamicon.png"
import SPNavBar from "./img/SPNavBar.png"
import CoopNavBar from "./img/CoopNavBar.png"
import ScoreUpdatesNavBar from "./img/ScoreUpdatesNavBar.png"
import OtherNavBar from "./img/OtherNavBar.png"
import AggregateNavBar from "./img/AggregatedNavBar.png"
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch
} from "@material-ui/core"
import { BrowserRouter, Link } from "react-router-dom"
import { useStyles, CustomButton } from "./style.js"
import React from "react"

const Header = ({ handleChange, themeStatus }) => {
  const classes = useStyles()

  return (
    <div id='container' className={classes.root}>
      <AppBar color='primary' position='static'>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            justifyContent='space-around'
            alignItems='flex-start'
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
                <img src={ScoreUpdatesNavBar} className={classes.icon} />
                Score Updates
              </CustomButton>
              <CustomButton variant='text' href='/sp'>
                <img src={SPNavBar} className={classes.icon} />
                Single Player
              </CustomButton>
              <CustomButton variant='text' href='/coop'>
                <img src={CoopNavBar} className={classes.icon} />
                Cooperative
              </CustomButton>
              <CustomButton variant='text' href='/agg-selector'>
                <img src={AggregateNavBar} className={classes.icon} />
                Aggregated
              </CustomButton>
              <CustomButton variant='text'>
                <img src={OtherNavBar} className={classes.icon} />
                More
              </CustomButton>
            </Grid>
          </Grid>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='flex-end'>
            <Grid item container justifyContent='flex-end'>
              <CustomButton
                className={classes.steam}
                href='https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Fboard.iverb.me%2Flogin&openid.realm=http%3A%2F%2Fboard.iverb.me&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select'
                id='steam-login'>
                <div>Sign In</div>
                <img src={steamIcon} style={{ height: "45px" }} />
              </CustomButton>
            </Grid>
            <Grid item container justifyContent='flex-end' alignItems='center'>
              <Grid item>
                <Typography color='textPrimary'>Dark</Typography>
              </Grid>
              <Switch
                color='default'
                onChange={handleChange}
              />
              <Grid>
                <Typography color='textPrimary'>Light</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
