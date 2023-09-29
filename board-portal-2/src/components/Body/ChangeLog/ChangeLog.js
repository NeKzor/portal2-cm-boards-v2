import { Grid, Paper } from "@material-ui/core"
import React, { useState, useContext, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { useStyles } from "./style.js"
import ScoreLists from "./ScoreLists"
import Graph from "./Graph"
import Filters from "./Filters"
import { ThemeContext } from "../../../App.js"

const ENDPOINT = "http://localhost:8080/api/v1/changelog"

const ChangeLog = () => {
  const classes = useStyles()
  const themeContext = useContext(ThemeContext)
  const [changelogData, setChangelogData] = useState([])
  const [filters, setFilters] = useState([])

  //fetching changelog data on first component load
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(ENDPOINT)

      return response.json()
    }

    fetchData()
      .then(data => setChangelogData(data))
      .catch(error => console.log(error))
  }, [])

  const handleChangeFilters = e => {
    setFilters(e)
  }

  return (
    <Paper id='ChangeLog' className={classes.bodyPage}>
      <Grid container direction='column'>

        {/* <Grid item style={{ paddingRight: "2em", paddingTop: "2em" }}>
          <Filters
            themeStatus={themeContext.themeStatus}
            theme={themeContext.theme}
            onChangeFilters={handleChangeFilters}
          />
        </Grid> */}

        {/* <Grid item>
          <Graph
            themeContext={themeContext}
            filters={filters}
            changelogData={changelogData}
          />
        </Grid> */}

        <Grid item>
          <ScoreLists
            filters={filters}
            changelogData={changelogData}
            themeStatus={themeContext.themeStatus}
            theme={themeContext.theme}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ChangeLog
