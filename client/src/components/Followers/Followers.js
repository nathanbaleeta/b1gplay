import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";

//import FollowerList from "./FollowerList";
import FilterFollowers from "./FilterFollowers";
import Suggestions from "./Suggestions";

import FollowerList from "./FollowerList";

import Header from "../Layout/Header";

const styles = theme => ({
  root: {
    background: "#FFFFFF",
    paddingTop: "7%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1%",
      marginTop: "14%"
    }
    //marginTop: "10%",
  },
  main: {
    marginLeft: "5%",
    marginRight: "3%",
    width: "auto",
    //paddingTop: "8%",
    //paddingBottom: "7%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
      //width: "auto"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0
      //width: "auto"
    }
  }
});

class Followers extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Header />
        <div className={classes.root}>
          <Grid container className={classes.main} spacing={2}>
            <Grid container item lg={3} md={5} sm={12} xs={12} spacing={2}>
              <FilterFollowers />
              <Suggestions />
            </Grid>
            <Grid item lg={9} md={7} sm={12} xs={12} spacing={2}>
              <FollowerList />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

Followers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Followers);
