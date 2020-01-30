import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "../components/Layout/Header";
import PersonalInfo from "../components/Profile/PersonalInfo";
import MyProfile from "../components/Profile/MyProfile";
import PersonalRatings from "../components/Profile/PersonalRatings";

const styles = theme => ({
  root: {
    background: "#F5F5F5"
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
    //display: "block" // Fix IE 11 issue.
  },
  personalInfo: {
    //marginTop: "1%"
  },
  myProfile: {
    marginTop: "13%",
    marginBottom: "4%"
  }
});

class Home extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Header />
          <Grid container className={classes.main} spacing={2}>
            <Grid container item lg={8} md={7} sm={12} xs={12} spacing={2}>
              <Grid item lg={12} xs={12}>
                <PersonalInfo />
              </Grid>
              <Grid item lg={5} xs={12}>
                <PersonalInfo />
              </Grid>
              <Grid item lg={7} xs={12}>
                <PersonalInfo />
              </Grid>
            </Grid>
            <Grid
              //container
              item
              lg={4}
              md={5}
              sm={12}
              xs={12}
              spacing={2}
            >
              <Grid item lg={12} xs={12} className={classes.myProfile}>
                <MyProfile />
              </Grid>
              <Grid item lg={12} xs={12}>
                <PersonalRatings />
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.main} spacing={3}>
            <Grid container item lg={3} xs={12} spacing={1}>
              <PersonalInfo />
            </Grid>
            <Grid container item lg={3} xs={12} spacing={1}>
              <PersonalInfo />
            </Grid>
            <Grid container item lg={3} xs={12} spacing={1}>
              <PersonalInfo />
            </Grid>
            <Grid container item lg={3} xs={12} spacing={1}>
              <PersonalInfo />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Home);
