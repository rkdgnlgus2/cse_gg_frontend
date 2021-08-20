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

import SummonerSpell from "./json/SummonerSpell.json";
import Runes from "./json/Runes.json";

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
function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  const championURL = `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${row.championName}.png`;
  const summoner1URL = `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${row.summoner1id}.png`;
  const summoner2URL = `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${row.summoner2id}.png`;
  const primaryStyleURL = `https://ddragon.leagueoflegends.com/cdn/img/${row.primaryStyle}`;
  const subStyleURL = `https://ddragon.leagueoflegends.com/cdn/img/${row.subStyle}`;
  const itemURLs = [
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[0]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[1]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[2]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[3]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[4]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[5]}.png`,
    `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${row.items[6]}.png`,
  ];

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
                  <CardMedia className={classes.Content} image={summoner1URL} />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia
                    className={classes.Content}
                    image={primaryStyleURL}
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia className={classes.Content} image={summoner2URL} />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.smallCard}>
                  <CardMedia className={classes.Content} image={subStyleURL} />
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
                      image={itemURLs[0]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[1]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[2]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[6]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[4]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[5]}
                    />
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image={itemURLs[3]}
                    />
                  </Card>
                </Grid>
                {/*<Grid item xs={3}>
                  <Card className={classes.smallCard}>
                    <CardMedia
                      className={classes.Content}
                      image="http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/SummonerFlash.png"
                    />
                  </Card>
                </Grid>*/}
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

export default function MatchHistory({ summonerName }) {
  const [matchInfo, setMatchInfo] = useState(null);
  const [matchesShown, setMatchesShown] = useState(<div></div>);
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
      const items = [
        user[0].item0,
        user[0].item1,
        user[0].item2,
        user[0].item3,
        user[0].item4,
        user[0].item5,
        user[0].item6,
      ];
      const summoner1id = Object.entries(SummonerSpell.data).filter((x) => {
        return x[1].key === `${user[0].summoner1Id}`;
      })[0][0];
      const summoner2id = Object.entries(SummonerSpell.data).filter((x) => {
        return x[1].key === `${user[0].summoner2Id}`;
      })[0][0];
      const primaryRoute = Runes.filter((x) => {
        return (
          x.slots[0].runes[0].id === user[0].perks.styles[0].selections[0].perk
        );
      })[0];
      const primaryStyle = primaryRoute.slots[0].runes.filter((x) => {
        return x.id === user[0].perks.styles[0].selections[0].perk;
      })[0].icon;
      const subStyle = Runes.filter((x) => {
        return x.id === user[0].perks.styles[1].style;
      })[0].icon;

      return (matchData = [
        ...matchData,
        {
          championName,
          items,
          summoner1id,
          summoner2id,
          primaryStyle,
          subStyle,
        },
      ]);
    });
    return matchData;
  }

  const getMatchInfo = async () => {
    try {
      const matchInfo = await axios.get(
        `http://3.37.201.192:8080/${matchAPI.getHistory}${summonerName}`
      );
      setMatchInfo(matchInfo.data);
      setRows(rows.concat(createMainData(matchInfo.data)));
      return;
    } catch {
      setRows(rows.concat([{ championName: "Ryze" }]));
      setMatchesShown(
        <div>
          {rows.map((row) => (
            <Row row={row} />
          ))}
        </div>
      );
      console.log("matchhistory Error, Offline Mode, setting default rows");
      console.log("current rows:");
      console.log(rows);
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
      setMatchesShown(
        <div>
          {rows.map((row) => (
            <Row row={row} />
          ))}
        </div>
      );
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
