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
            <table
              style={{
                width: "100%"
              }}
            >
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Date of birth:
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    17th September 2019
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Country of Origin:
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    Democratic Republic of Congo
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Position
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    Central forward
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Weight
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    120kg
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Height
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    190cm
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Wingspan
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    120cm
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Vertical leap
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    180cm
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Time to run 40m
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    7 sec
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Time to run 100m
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    14 sec
                  </Typography>
                </td>
              </tr>

              <tr>
                <td>
                  <Typography
                    variant="caption"
                    gutterBottom
                    align="left"
                    style={{
                      color: "#C12424",
                      //fontWeight: "bold",
                      fontSize: "20px",
                      paddingTop: "3%",
                      paddingBottom: "3%"
                    }}
                  >
                    Affiliation
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Club
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    The Canons
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left" wrap>
                    Club location
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                    wrap
                  >
                    Tanzania
                  </Typography>
                </td>
              </tr>
            </table>
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
