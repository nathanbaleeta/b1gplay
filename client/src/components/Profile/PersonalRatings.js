import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

import Rating from "@material-ui/lab/Rating";

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#C12424"
    //fontSize: "100%"
    //maxHeight: "50px",
    //minHeight: "50px"
  },
  iconFilled: {
    color: "#ff6d75"
  },
  iconHover: {
    color: "FF7F50"
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
            title="Personal Ratings"
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
                    Rebounding
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={
                      <SportsBasketballIcon
                        fontSize="12"
                        style={{
                          color: "#FF7F50"
                        }}
                      />
                    }
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Defence
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Scoring
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Leadership
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Discipline
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    BasketballIQ
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Energy
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Determination
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Clutch
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography variant="body1" gutterBottom align="left">
                    Propotential
                  </Typography>
                </td>
                <td>
                  <Rating
                    name="customized-icons"
                    defaultValue={2}
                    max={10}
                    icon={<SportsBasketballIcon fontSize="12" />}
                  />
                </td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
                    gutterBottom
                    align="left"
                  >
                    90.89
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
                    Total
                  </Typography>
                </td>
                <td></td>
                <td>
                  <Typography
                    variant="body1"
                    color="primary"
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
                    90.89
                  </Typography>
                </td>
              </tr>
            </table>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Rate Player
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Follow
                </Button>
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
