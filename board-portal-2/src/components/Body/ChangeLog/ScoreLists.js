import { List, ListItem, ListItemSecondaryAction, ListItemText, Container, Grid, ListItemAvatar, Typography, Paper } from "@material-ui/core"
import { useStyles } from "./style"
import ScoreListItem from "./ScoreListItem"
import React from "react"

function ScoreLists({theme, changelogData, themeStatus, filters}) {
  const classes = useStyles()
  var index = 0
  console.log(changelogData)
  return (
    <Container maxWidth="xl" className={classes.paperBackground}>
      <Paper className={classes.paperBackground}>

      <Grid container item className={classes.scoreUpdateGrid} xs={12}>

        <Grid container item className={classes.mapGrid} xs={3} alignItems="center">
          <Grid item className={classes.chmbImageGrid} xs={7}>
          </Grid>
          <Grid item className={classes.chmbMapGrid} xs={5}>
            <Typography> Map </Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.teamGrid} xs={2} spacing={3} alignItems="center">
            <Grid container item className={classes.player1Grid} xs={12} justifyContent="center" alignItems="center">
                <Typography> Player </Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.rankGrid} xs={2} spacing={3} alignItems="center">
            <Grid container item className={classes.previousRankGrid} xs={5} justifyContent="flex-end">
                    <Typography className={classes.rankText}> Previous </Typography>
            </Grid>
            <Grid item xs='auto'>
                <Typography style={{color: 'white'}}> {"→"} </Typography>
            </Grid>
            <Grid container item className={classes.newRankGrid} xs={5} justifyContent="flex-start">
                    <Typography className={classes.rankText}> New </Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.deltaGrid} xs={2} alignItems="center">
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> Rank </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> Time </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> Score </Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.mediaButtons} xs={1} alignItems="center">
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>

        <Grid container item className={classes.dateGrid} xs={2} alignItems="center">
            <Grid item container xs={12} justifyContent="flex-end">
                <Typography style={{color: 'white'}}> Date </Typography>
            </Grid>
        </Grid>

      </Grid>
    <Grid container spacing={1}>
        {changelogData.map(submission => {
          index++
          return (
            <ScoreListItem
            key={index}
            theme={theme}
            themeStatus={themeStatus}
            submission={submission}
            index={index}
            />
          )
        })}
    </Grid>
    </Paper>
    </Container>
  )
}

export default ScoreLists
