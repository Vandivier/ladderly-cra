import "./app.css";

import React from "react";

// import logo from "./logo.svg";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SchoolIcon from "@material-ui/icons/School";

import { Counter } from "./features/counter/counter";
import { LadderlyTopNav } from "./features/ladderly-top-nav/ladderly-top-nav";
import { SupportIcon } from "./features/support-icon/support-icon";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bigIcon: {
    fontSize: "5rem",
    height: "5rem",
    width: "5rem",
  },
  featureCards: {
    margin: "0px 8px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <LadderlyTopNav />

      <header className="App-header">
        <h1>Ladderly.io</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <Container maxWidth="md" style={{ margin: "24px auto" }}>
        <Grid container spacing={4}>
          <Grid item className={classes.featureCards} component={Card} xs>
            <CardActionArea>
              <PersonAddIcon className={classes.bigIcon} />
              <CardContent>Get Referrals for Work or School</CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Grid>

          <Grid item className={classes.featureCards} component={Card} xs>
            <CardActionArea>
              <SchoolIcon className={classes.bigIcon} />
              <CardContent>Learn Skills and Network</CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Grid>

          <Grid item className={classes.featureCards} component={Card} xs>
            <CardActionArea>
              {/* {console.log(classes.bigIcon)} */}
              <SupportIcon className={classes.bigIcon} />
              <CardContent>Help Others and Earn Side Income</CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Grid>

          <Grid item className={classes.featureCards} component={Card} xs>
            <CardActionArea>
              <MonetizationOnIcon className={classes.bigIcon} />
              <CardContent>Strategic Wealth Management</CardContent>
            </CardActionArea>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Grid>
        </Grid>
      </Container>

      <section>
        <Counter />
      </section>

      <section>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </section>
    </div>
  );
}

export default App;
