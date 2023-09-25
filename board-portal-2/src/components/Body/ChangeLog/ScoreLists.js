import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core"
import { YouTube, GetApp, ChatBubble } from "@material-ui/icons"
import React, { isValidElement } from "react"
import { useStyles } from "./style"
import ScoreListItem from "./ScoreListItem"
import chapters from "./Chapters"

function ScoreLists(props) {
  const classes = useStyles()
  var index = 0
  var theme = props.theme
  var changelogData = props.changelogData
  var themeStatus = props.themeStatus
  return (
    <List dense={true} style={{ paddingRight: "2em", width: "100%" }}>
      <ListItem>
        <ListItemText primary='Date' style={{ width: "7.67em" }} />
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary='Player' className={classes.cellPlayer} />
        <ListItemText primary='Map' />
        <ListItemText primary='Chapter' />
        <ListItemText primary='Previous Score' />
        <ListItemText primary='' />
        <ListItemText primary='New Score' />
        <ListItemText primary='' />
        <ListItemText primary='Improvement' />
        <ListItemSecondaryAction></ListItemSecondaryAction>
      </ListItem>

      {changelogData.map(submission => {
        var mapID = JSON.parse(submission.map_id)
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
    </List>
  )
}

export default ScoreLists
