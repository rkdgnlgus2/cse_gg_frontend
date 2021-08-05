import React, { useState } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SearchForm({ history }) {
  const classes = useStyles();
  const [summonerName, setSummonerName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted! nickname:" + summonerName);
    history.push(`match/${summonerName}`);
  };

  const onChange = (e) => {
    e.preventDefault();
    setSummonerName(e.target.value);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              CSE_GG
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Show me what you got..
            </Typography>
            <form className={classes.form} onSubmit={onSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Search match history by nickname..."
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onChange}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Search
              </Button>
            </form>
          </Container>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default withRouter(SearchForm);
