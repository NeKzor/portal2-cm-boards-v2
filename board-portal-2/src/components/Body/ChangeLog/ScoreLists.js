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
        <ListItemText primary='New Score' />
        <ListItemText primary='Improvement' />
        <ListItemSecondaryAction></ListItemSecondaryAction>
      </ListItem>

      {changelogData.map(submission => {
        var mapID = JSON.parse(submission.map_id)
        index++
        return (
          <ListItem
            key={index}
            style={{
              backgroundColor:
                index % 2 == 0
                  ? theme.palette.background.paper
                  : themeStatus
                    ? "rgb(154, 166, 187)"
                    : "rgb(41, 49, 62)"
            }}>
            <ListItemText
              primary={new Date(submission.timestamp).toLocaleString()}
              className={classes.cellDate}
            />
            <ListItemAvatar>
              <Avatar src={submission.avatar} />
            </ListItemAvatar>
            <ListItemText
              className={classes.cellPlayer}
              primary={
                submission.user_name
                  ? submission.user_name
                  : submission.profile_number
              }
            />
            <ListItemText
              className={classes.cellMap}
              primary={mapID != 47847 ? chapters[mapID].title : "DNE"}
            />
            <ListItemText
              className={classes.cellChapter}
              primary={submission.name}
            />
            <ListItemText 
              className={classes.cellPR}
              primary={submission.post_rank ? submission.post_rank : "-"}
            />
            <ListItemText
              className={classes.cellPS}
              primary={submission.score ? submission.score : "-"} 
            />
            <ListItemText 
              className={classes.cellNR}
              primary={submission.post_rank ? submission.post_rank : "-"}
            />
            <ListItemText
              className={classes.cellNS}
              primary={submission.score ? submission.score : "-"}
            />
            <ListItemText
              className={classes.cellImprovement}
              primary={submission.pre_rank ? submission.post_rank - submission.pre_rank : "-"}
            />
            <ListItemSecondaryAction>
              {submission.note && (
                <IconButton edge='end'>
                  <ChatBubble />
                </IconButton>
              )}
              {submission.has_demo != -1 && (
                <IconButton edge='end'>
                  <GetApp />
                </IconButton>
              )}
              {submission.youtube_id && (
                <IconButton edge='end'>
                  <YouTube />
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ScoreLists
