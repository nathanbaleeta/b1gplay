import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
//import { getProfile } from "../../actions/profile";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    //paddingTop: theme.spacing(1),
    //paddingBottom: theme.spacing(1),
    border: "1px solid #d4d4d4"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

class MyProfile extends Component {
  state = {};

  componentDidMount() {
    //this.props.getProfile();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper className={classes.root} elevation={0}>
          <Grid container justify="center" alignItems="center" />
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            style={{
              color: "#C12424",
              //fontWeight: "bold",
              fontSize: "24px",
              paddingTop: "4%"
            }}
          >
            Nathan Baleeta
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            color="primary"
            style={{
              color: "black",
              //fontWeight: "bold",
              fontStyle: "italic"
            }}
          >
            nate
          </Typography>

          <div>
            <Grid container spacing={24}>
              <Grid item lg={4} sm={4}>
                <Link to="/personal-ratings" className={classes.link}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase"
                      //fontWeight: "bold"
                    }}
                  >
                    Ratings
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black"
                      //fontWeight: "bold"
                    }}
                  >
                    10
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={4} sm={4}>
                <Link to="/following" className={classes.link}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase"
                      //fontWeight: "bold"
                    }}
                  >
                    Following
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black"
                      //fontWeight: "bold"
                    }}
                  >
                    7
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Link to="/followers" className={classes.link}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    style={{
                      color: "#C12424",
                      textTransform: "uppercase"
                      //fontWeight: "bold"
                    }}
                  >
                    Followers
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    align="center"
                    //color="Primary"
                    style={{
                      color: "black"
                      //fontWeight: "bold"
                    }}
                  >
                    9
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Fragment>
    );
  }
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired
  //getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //profile: state.profile
});

export default connect(mapStateToProps, {})(withStyles(styles)(MyProfile));
