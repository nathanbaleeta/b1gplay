import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

import { Switch, Route } from "react-router-dom";

const styles = theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.6em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
  root: {
    flexGrow: 1,
    zoom: "80%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    textAlign: "left",
    color: "#C12424"
    //fontWeight: "bold"
  }
});

class PersonalInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card
          className={classes.card}
          elevation={0}
          style={{
            border: "1px solid #d4d4d4",
            borderRadius: "4px"
          }}
        >
          <CardHeader
            classes={{
              title: classes.title
            }}
            action={
              <IconButton
                onClick={this.handleOpen}
                style={{
                  background: "white"
                }}
              >
                <img
                  src="/static/images/profile/edit_profile1.png"
                  alt="edit profile icon"
                  style={{
                    width: "30px",
                    height: "30px"
                  }}
                />
              </IconButton>
            }
            title="Personal Info"
          />

          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={5} sm={5}>
                <Typography variant="body1" gutterBottom align="left">
                  Date of birth:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Country of Origin:
                </Typography>

                <Typography variant="body1" gutterBottom align="left">
                  Position:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Weight:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Height:
                </Typography>

                <Typography variant="body1" gutterBottom align="left">
                  Wingspan:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Vertical leap:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Time to run 40m:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Time to run 100m:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                  noWrap
                >
                  17th September 2019
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                  noWrap
                >
                  Democratic Republic of Congo
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  Center forward
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  80kg
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  asasa
                </Typography>

                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  asas
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  hjh
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  hkkk
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  gjgj
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h5"
                  gutterBottom
                  align="left"
                  style={{
                    color: "#C12424",
                    fontWeight: "bold",
                    fontSize: "24px",
                    paddingTop: "2%"
                  }}
                >
                  Affiliation
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5}>
                <Typography variant="body1" gutterBottom align="left">
                  Team:
                </Typography>
                <Typography variant="body1" gutterBottom align="left">
                  Location:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  jhjhj
                </Typography>
                <Typography
                  variant="body1"
                  color="primary"
                  gutterBottom
                  align="left"
                >
                  hjl
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
