import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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

export default function SummonerInfo() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
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
                defaultValue="소환사명"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} md={6} lg={3} alignContent="flex-end">
              <Button variant="contained" color="primary">
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
