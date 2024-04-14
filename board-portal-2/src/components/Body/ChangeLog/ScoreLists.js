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

      {props.changelogData.map(submission => {
        var mapID = JSON.parse(submission.map_id)
        index++
        return (
          <ListItem
            style={{
              // hella not optimized but it works to alternate the color
              backgroundcolor:
                index % 2 == 0
                  ? props.theme.palette.background.paper
                  : props.themeStatus
                  ? "rgb(154, 166, 187)"
                  : "rgb(41, 49, 62)"
            }}>
            <ListItemText
              primary={submission.time_gained}
              className={classes.cellDate}
            />
          )
        })}
    </Grid>
    </Paper>
    </Container>
  )
}

export default ScoreLists
