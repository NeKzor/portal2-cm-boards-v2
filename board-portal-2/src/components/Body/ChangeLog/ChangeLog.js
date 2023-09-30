import { Grid, Paper } from "@material-ui/core"
import React, { useState, useContext, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { useStyles } from "./style.js"
import ScoreLists from "./ScoreLists"
import Graph from "./Graph"
import Filters from "./Filters"
import { ThemeContext } from "../../../App.js"
import ImagePaths from "../Images/chambers_large/Chambers_Large.js"

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
    <Grid container style={{marginTop: '20px'}}>
          <ScoreLists 
          filters={filters}
          changelogData={changelogData}
          themeStatus = {themeContext.themeStatus}
          theme={themeContext.theme}
          className={classes.changelogGrid}
          />
    </Grid>
  )
}

export default ChangeLog
