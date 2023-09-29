import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import { YouTube, GetApp, ChatBubble } from "@material-ui/icons"
import React from "react"
import { useStyles } from "./style"
import chapters from "./Chapters"
import getScoreFromString from "../../../Utils/timeutils"

function ScoreListItem({ theme, themeStatus, submission, index }) {
    const classes = useStyles()
    var mapID = JSON.parse(submission.map_id)
    return (
        <ListItem
            style={{
                backgroundColor:
                    index % 1 == 0
                        ? theme.palette.background.paper
                        : themeStatus
                            ? "rgb(153, 166, 187)"
                            : "rgb(40, 49, 62)"
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
                primary={submission.user_name ? submission.user_name : submission.profile_number}
            />
            <ListItemText
                className={classes.cellMap}
                primary={mapID !== 47846 ? chapters[mapID].title : "DNE"}
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
                primary={submission.score ? getScoreFromString(submission.score) : "-"}
            />
            <ListItemText
                className={classes.cellNR}
                primary={submission.post_rank ? submission.post_rank : "-"}
            />
            <ListItemText
                className={classes.cellNS}
                primary={submission.score ? getScoreFromString(submission.score) : "-"}
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
                {submission.has_demo != -2 && (
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
}


export default ScoreListItem