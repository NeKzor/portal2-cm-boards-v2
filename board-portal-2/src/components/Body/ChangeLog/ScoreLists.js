import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core"
import { useStyles } from "./style"
import ScoreListItem from "./ScoreListItem"
import React from "react"

function ScoreLists(props) {
  const classes = useStyles()
  var index = 0
  var theme = props.theme
  var changelogData = props.changelogData
  var themeStatus = props.themeStatus
  console.log(changelogData)
  return (
    <List dense={true} style={{ paddingRight: "2em", width: "100%" }}>
      <ListItem>
        <ListItemText primary='Map'/>
        <ListItemText primary='Player'/>
        <ListItemText primary='Previous Score' />
        <ListItemText primary='New Score' />
        <ListItemText primary='Improvement' />
        <ListItemText primary='ΔPoints'/>
        <ListItemText primary='Date' style={{ width: "7.67em" }} />
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
