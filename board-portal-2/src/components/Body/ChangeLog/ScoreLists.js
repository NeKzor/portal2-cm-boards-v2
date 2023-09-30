import { List, ListItem, ListItemSecondaryAction, ListItemText, Container, Grid, ListItemAvatar, Typography } from "@material-ui/core"
import { useStyles } from "./style"
import ScoreListItem from "./ScoreListItem"
import React from "react"
import ImagePaths from "../Images/chambers_small/Chambers_Small"
import Score from "../MapPages/Score"

function ScoreLists({theme, changelogData, themeStatus, filters}) {
  const classes = useStyles()
  var index = 0
  console.log(changelogData)
  return (
    <Container maxWidth="xl">
    <Grid container spacing={2} direction="column">
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
    </Container>
  )
}

export default ScoreLists
