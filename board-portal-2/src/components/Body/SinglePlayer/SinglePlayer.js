import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import ChamberCard from "./ChamberCard";
import Typography from "@material-ui/core/Typography";
import Sections from "./Chapters.js"

const ENDPOINT = "http://localhost:8080/api/v1/sp";

function SinglePlayer() {
  const classes = useStyles();
  const [levelData, setLevelData] = useState([]);

  //fetching level data on first component load
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(ENDPOINT);
        let data = await response.json();
        setLevelData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, []);

  let dataIndex = {}
  levelData.forEach((value,index) => {dataIndex[value[0].map_id] = index });
  return (
    <div>
      {Object.keys(Sections).map((chapter) => {
        let trueChapterName = (chapter.charAt(0).toUpperCase() + chapter.slice(1).replace("_", " "));
        return (
          <div key={chapter} className={classes.chapter_title_container}>
            <Typography
              variant="h6"
              component="h1"
              className={classes.chapter_number}
            >
              {trueChapterName}
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              className={classes.chapter_name}
            >
              {Sections[chapter][0].chapter_name}
            </Typography>
            <Grid
              container
              spacing={2}
              direction="row"
              className={classes.chapter_container}
            >
              {Sections[chapter].map((level) => {
                if (levelData.length > 0) {
                  return (
                    <Grid item key={level.id}>
                      <ChamberCard
                        data={levelData[dataIndex[level.id]]}
                        image={level.image}
                        title={level.title}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </div>
        )
      }
      )}
    </div>
  )
}

export default SinglePlayer;