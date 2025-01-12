import React, { useState, useEffect } from "react";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import SingleChapters from "./Chapters";
import Header from "./Header";
import Scores from "./Scores";

const ENDPOINT = "/api/v1/map";

function MapPage({ match }) {
  const [mapData, setMapData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ENDPOINT + match.url}`);
        const data = await response.json();

        setMapData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={9} md={8} lg={7}>
      <Grid
        container
        className={classes.pageContainer}
        direction="row"
        alignItems="center"
        
      >
        <Grid item xs={12}>
          <Header
            mapName={SingleChapters[match.params.map_id].title}
            chapterName={SingleChapters[match.params.map_id].chapter_name}
            image={SingleChapters[match.params.map_id].image}
          />
        </Grid>
        <Grid item className={classes.scores}>
          <Scores
            mapData={mapData}
            mapType={match.url.indexOf("sp") > -1 ? "sp" : "coop"}
          />
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default MapPage;
