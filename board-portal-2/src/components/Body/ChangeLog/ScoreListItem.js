import { Box, Avatar, IconButton, Grid, Typography, Container } from "@material-ui/core"
import { YouTube, GetApp, ChatBubble, Fingerprint } from "@material-ui/icons"
import React from "react"
import { useStyles } from "./style"
import chapters from "./Chapters"
import getScoreFromString from "../../../Utils/timeutils"
import ImagePaths from "../Images/chambers_small/Chambers_Small"

function ScoreListItem({ theme, themeStatus, submission, index }) {
    const classes = useStyles()
    return (
      <Grid container item className={classes.scoreUpdateGrid} xs={12}>

        <Grid container item className={classes.mapGrid} xs={3} alignItems="center">
          <Grid item className={classes.chmbImageGrid} xs={7}>
            <img
              className={classes.chmbImage}
              src={ImagePaths[submission.map_id]}
              alt="chamber"
              style={{ overflow: "hidden" }}
            />
          </Grid>
          <Grid item className={classes.chmbMapGrid} xs={5}>
                <Typography className={classes.chmbMapText}> {submission.map_name} </Typography>
          </Grid>
        </Grid>

        <Grid container item className={classes.teamGrid} xs={2} spacing={3} alignItems="center">
            <Grid container item className={classes.player1Grid} xs={6} justifyContent="flex-start" alignItems="center">
                <Avatar className={classes.playerAvatar} src={submission.avatar}></Avatar>
                <Typography className={classes.playerText}> {submission.user_name}</Typography>
            </Grid>
            <Grid container item className={classes.player2Grid} xs={6} justifyContent="center" alignItems="center">
                <Avatar className={classes.playerAvatar} src={submission.avatar}></Avatar>
                <Typography className={classes.playerText}> {submission.user_name}</Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.rankGrid} xs={2} spacing={3} alignItems="center">
            <Grid container item className={classes.previousRankGrid} xs={5} justifyContent="flex-end">
                    <Typography className={classes.rankText}> {submission.pre_rank} </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography style={{color: 'white'}}> {">"} </Typography>
            </Grid>
            <Grid container item className={classes.newRankGrid} xs={5} justifyContent="flex-start">
                    <Typography className={classes.rankText}> {submission.post_rank} </Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.deltaGrid} xs={2} alignItems="center">
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> {submission.post_rank - submission.pre_rank} </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> {"-" + getScoreFromString(submission.score_delta)} </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: 'white'}}> {"+" + 15.73} </Typography>
            </Grid>
        </Grid>

        <Grid container item className={classes.mediaButtons} xs={1} alignItems="center">
            <Grid item xs={3}>
                <Fingerprint color='inherit'></Fingerprint>
            </Grid>
            <Grid item xs={3}>
                <Fingerprint color='inherit'></Fingerprint>
            </Grid>
            <Grid item xs={3}>
                <Fingerprint color='inherit'></Fingerprint>
            </Grid>
            <Grid item xs={3}>
                <Fingerprint color='inherit'></Fingerprint>
            </Grid>
        </Grid>

        <Grid container item className={classes.dateGrid} xs={2} alignItems="center">
            <Grid item container xs={12} justifyContent="flex-end">
                <Typography style={{color: 'white'}}> {new Date(submission.timestamp).toLocaleString()} </Typography>
            </Grid>
        </Grid>

      </Grid>
    );
}


export default ScoreListItem