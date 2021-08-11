import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
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

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  championCircle: {
    height: 50,
    width: 50,
  },
  ingameItems: {
    height: 50,
    width: 100,
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
  const [open, setOpen] = React.useState(false);
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
          <Paper
            variant="outlined"
            square={false}
            className={classes.championCircle}
          >
            챔피언이미지
          </Paper>
        </TableCell>
        <TableCell style={{ width: 125 }}>
          <Paper
            variant="outlined"
            square={false}
            className={classes.championCircle}
          >
            소환사 주문 등
          </Paper>
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
            인게임 아이템
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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function MatchHistory({ matchInfo }) {}
  useEffect(() => {
    console.log("im in matchhistory");
    console.log(matchInfo);
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
