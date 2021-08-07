import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import MatchHistory from "./MatchHistory";
import SummonerIcon from "./SummonerIcon";
import SummonerInfo from "./SummonerInfo";

import * as summonerAPI from "../../lib/api/summoner";
import * as matchAPI from "../../lib/api/match";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
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
    height: 240,
  },
}));

export default function MatchForm({ summonerName }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [matchInfo, setMatchInfo] = useState(null);
  const [summonerInfo, setSummonerInfo] = useState(null);

  const getFetch = useCallback(
    (request) => {
      fetch(`${request}${summonerName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(`request fetched to ${request}${summonerName}`);
          if (!response.ok) {
            console.log("wtf error occured");
            let err = new Error("HTTP status code: " + response.status);
            err.response = response;
            err.status = response.status;
            throw err;
          }
          console.log(response);
          return response.json();
        })
        .then((response) => {
          if (request === matchAPI.getHistory) {
            setMatchInfo(response);
          } else {
            setSummonerInfo(response);
          }
        })
        .catch((e) => console.log(e));
    },
    [summonerName]
  );

  useEffect(() => {
    console.log("showing summonerName:" + summonerName);
    getFetch(matchAPI.getHistory);
    getFetch(summonerAPI.summoner);
  }, [getFetch, summonerName]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SummonerIcon />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <SummonerInfo />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <MatchHistory matchInfo={matchInfo} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
