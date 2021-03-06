import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// import styles from "./ladderly-top-nav.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  signInButton: {
    marginLeft: "auto",
  },
  title: {
    flexGrow: 1,
  },
}));

export function LadderlyTopNav() {
  const classes = useStyles();
  // const count = useSelector(selectCount);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Ladderly.io</Button>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Button color="inherit" className={classes.signInButton}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
