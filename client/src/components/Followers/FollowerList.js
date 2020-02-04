import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { connect } from "react-redux";
//import { getFollowers } from "../../actions/followers";

const styles = theme => ({
  root: {
    padding: theme.spacing(3),
    marginTop: "0%",
    marginLeft: "4%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-7%",
      marginRight: "-7%",
      marginTop: "0%"
    }
  },
  card: {
    border: "1px solid #d4d4d4",
    borderRadius: "4px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  button: {
    margin: theme.spacing(1),
    background: "#C12424"
  },
  margin: {
    margin: theme.spacing(3)
  },
  padding: {
    padding: `0 ${theme.spacing(2)}px`
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "19px",
    fontWeight: "bold",
    color: "#3b5998"
  },
  subheader: {
    fontSize: "16px"
  }
});

class FollowerList extends Component {
  state = {};

  componentDidMount() {
    //this.props.getFollowers();
  }

  handleFollow = () => {
    this.setState({ follow: !this.state.follow });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            //style={{ color: "black" }}
          >
            Followers
          </Typography>

          <Grid container spacing={2}>
            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card} elevation={0}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Follow
                    </Button>
                  }
                  title={"Moses Maina"}

                  //title={follower.firstname + " " + follower.lastname}
                  //subheader={follower.firstname + "." + follower.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />

                <CardContent>
                  <table
                    style={{
                      width: "100%"
                    }}
                  >
                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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

                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                  </table>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>

            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card} elevation={0}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Follow
                    </Button>
                  }
                  title={"Moses Maina"}

                  //title={follower.firstname + " " + follower.lastname}
                  //subheader={follower.firstname + "." + follower.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />

                <CardContent>
                  <table
                    style={{
                      width: "100%"
                    }}
                  >
                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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

                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                  </table>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>
            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card} elevation={0}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Follow
                    </Button>
                  }
                  title={"Moses Maina"}

                  //title={follower.firstname + " " + follower.lastname}
                  //subheader={follower.firstname + "." + follower.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />

                <CardContent>
                  <table
                    style={{
                      width: "100%"
                    }}
                  >
                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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

                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                  </table>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>
            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card} elevation={0}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      Follow
                    </Button>
                  }
                  title={"Moses Maina"}

                  //title={follower.firstname + " " + follower.lastname}
                  //subheader={follower.firstname + "." + follower.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />

                <CardContent>
                  <table
                    style={{
                      width: "100%"
                    }}
                  >
                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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

                    <tr>
                      <td>
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          align="left"
                          wrap
                          style={{
                            fontWeight: "bold"
                          }}
                        >
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
                  </table>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

FollowerList.propTypes = {
  classes: PropTypes.object.isRequired
  //followers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  //followers: state.followers.followers
});

export default connect(mapStateToProps, {})(withStyles(styles)(FollowerList));
