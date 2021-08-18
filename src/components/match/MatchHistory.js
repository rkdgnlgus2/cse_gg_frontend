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

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

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
            <CardMedia
              className={classes.Content}
              image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png"
            />
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
                  {row.history.map((historyRow) => (
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
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

let rows = [];

export default function MatchHistory({ summonerName }) {
  const [matchInfo, setMatchInfo] = useState(null);

  const getMatchInfo = async () => {
    try {
      const matchInfo = await axios.get(
        `http://3.37.201.192:8080/${matchAPI.getHistory}${summonerName}`
      );
      setMatchInfo(matchInfo.data);
      rows = rows.concat(rows, matchInfo);
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
  }, [matchInfo]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="match history">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
