import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import * as matchAPI from "../../lib/api/match";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  bigCard: {
    width: 80,
    height: 80,
    margin: "auto",
  },
  smallCard: {
    width: 40,
    height: 40,
    margin: "auto",
  },
  Content: {
    height: "100%",
    width: "100%",
  },
  championCircle: {
    height: 50,
    width: 50,
  },
  ingameItems: {
    height: 80,
    width: 160,
  },
  players: {
    height: 100,
    width: 200,
  },
});
function Row(match) {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const championURL = `"http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${match.championName}.png"`;

  console.log("current match:");
  console.log(match);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell style={{ width: 100 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ width: 125 }}>
          <TextField
            inputProps={{ style: { fontSize: 10, textAlign: "center" } }}
            InputProps={{ disableUnderline: true }}
            id="mode-and-time"
            multiline
            value={"무작위 총력전\n5일 전\n패배\n33분 25초"}
            maxRows={4}
          />
        </TableCell>
        <TableCell style={{ width: 50 }}>
          <Card className={classes.bigCard}>
            <CardMedia className={classes.Content} image={championURL} />
          </Card>
        </TableCell>
        <TableCell style={{ width: 100 }}>
          <Card className={classes.bigCard}>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia
                    className={classes.Content}
                    image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia
                    className={classes.Content}
                    image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia
                    className={classes.Content}
                    image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    //이런식으로 하면 될 듯하다
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia
                    className={classes.Content}
                    image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                  />
                </Card>
              </Grid>
            </Grid>
          </Card>
        </TableCell>
        <TableCell style={{ width: 125 }}>
          <TextField
            inputProps={{ style: { fontSize: 15, textAlign: "center" } }}
            InputProps={{ disableUnderline: true }}
            id="standard-multiline-flexible"
            multiline
            value={"10/0/10\n평점 9999"}
            maxRows={2}
          />
        </TableCell>
        <TableCell style={{ width: 125 }}>
          <TextField
            inputProps={{ style: { fontSize: 12, textAlign: "center" } }}
            InputProps={{ disableUnderline: true }}
            id="standard-multiline-flexible"
            multiline
            value={"레벨 18\n19(0.8)cs\n킬관여 53%"}
            maxRows={3}
          />
        </TableCell>
        <TableCell style={{ width: 150 }}>
          <Paper
            variant="outlined"
            square={false}
            className={classes.ingameItems}
          >
            <Card className={classes.ingameItems}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </TableCell>
        <TableCell style={{ width: 125 }}>
          <Paper variant="outlined" square={false} className={classes.players}>
            함께한 플레이어들
          </Paper>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="blueteam">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/*row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))*/}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const matchBunch = (row) => {
  return row.map((match) => <Row match={match} />);
};

Row.propTypes = {
  match: PropTypes.shape({
    championName: PropTypes.string.isRequired,
  }).isRequired,
};

export default function MatchHistory({ summonerName }) {
  const [matchInfo, setMatchInfo] = useState(null);
  const [matchesShown, setMatchesShown] = useState(null);
  const [rows, setRows] = useState([]);

  function createMainData(matches) {
    let matchData = [];
    console.log("matches got :");
    console.log(matches);
    matches.map((match) => {
      const user = match.info.participants.filter((element) => {
        return (
          element.summonerName.toLowerCase() === summonerName.toLowerCase()
        );
      });

      const championName = user[0].championName;

      return (matchData = [...matchData, { championName }]);
    });
    return matchData;
  }

  const getMatchInfo = async () => {
    try {
      const matchInfo = await axios.get(
        `http://3.37.201.192:8080/${matchAPI.getHistory}${summonerName}`
      );
      setMatchInfo(matchInfo.data);
      setRows([...rows, createMainData(matchInfo.data)]);
      setMatchesShown(rows.map((row) => <matchBunch row={row} />));
      return;
    } catch {
      console.log("matchhistory error");
    }
  };

  useEffect(() => {
    console.log("showing summonerName:" + summonerName);
    console.log("getting matchHistory of " + summonerName);
    getMatchInfo();
  }, []);

  useEffect(() => {
    if (!matchInfo) {
      console.log("props didn't come yet");
    } else {
      console.log("im in matchhistory");
      console.log(rows);
    }
  }, [matchInfo, rows]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="match history">
        <TableBody>{matchesShown}</TableBody>
      </Table>
    </TableContainer>
  );
}
