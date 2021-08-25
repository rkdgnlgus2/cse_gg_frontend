import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import axios from "axios";
import * as matchAPI from "../../lib/api/match";
import * as summonerAPI from "../../lib/api/summoner";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  button: {
    alignItems: "right",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 120,
  },
}));

export default function SummonerInfo(props) {
  const { summonerInfo } = props;
  const [summoner, setSummoner] = useState(null);
  const [leagueEntries, setLeagueEntries] = useState(null);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const onClick = () => {
    axios.post(
      `http://3.37.201.192:8080/${matchAPI.updateHistory}${summoner.name}`
    );
    axios.post(
      `http://3.37.201.192:8080/${summonerAPI.summoner}${summoner.name}`
    );
  };

  useEffect(() => {
    if (!summonerInfo) {
      console.log("waiting at SummonerInfo.js!");
    } else {
      setSummoner(summonerInfo.summoner);
      setLeagueEntries(summonerInfo.leagueEntries);
    }
  }, [summonerInfo]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} lg={9}>
              <TextField
                id="summonerName"
                defaultValue={summoner.name}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={3} alignContent="flex-end">
              <Button variant="contained" color="primary" onClick={onClick}>
                전적 갱신
              </Button>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                <div>솔랭 아이콘</div>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                <div>자랭 아이콘</div>
              </Paper>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <div>최근 함께한 소환사</div>
              </Paper>
            </Grid>
            <Grid item xs={4} md={5} lg={12}>
              <Paper className={classes.paper}>
                <div>최근 통계</div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
