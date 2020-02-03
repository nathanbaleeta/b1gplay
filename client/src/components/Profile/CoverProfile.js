import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

//import Post from "./Post";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const styles = theme => ({
  root: {
    marginBottom: "1%"
  },
  tabs: {
    marginLeft: "0%",
    marginRight: "0%",
    border: "1px solid #d4d4d4",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    backgroundColor: "white"
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
  },
  paperContainer: {
    width: "100%",
    height: 330,
    border: "1px solid #d4d4d4",
    borderRadius: 0
    //marginTop: -59
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  /*  bigProfileAvatar: {
    width: 170,
    height: 170,
    border: "5px solid white"
  }, */
  bigProfileAvatar: {
    width: 160,
    height: 160,
    border: "5px solid white",
    marginTop: "-14%",
    marginLeft: "3%"

    /* "&:hover": {
      position: "relative",
      paddingBottom: "4%",
      backgroundColor: "#000000",
      opacity: 0.3
    } */
  },
  card: {
    //maxWidth: 345
    marginTop: "-7%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-12%",
      marginLeft: "-4%",
      marginRight: "-9%",
      width: "auto"
    }
  },
  media: {
    height: 280
  },
  overlayAvatar: {
    position: "absolute",
    top: "58%",
    left: "4%",
    color: "white"
  },
  overlayChangeCover: {
    position: "absolute",
    top: "78%",
    right: "4%"
    //color: "white"
  },
  coverPhotoButton: {
    backgroundColor: "#000000",
    textTransform: "capitalize",
    paddingLeft: "3px"
  },
  iconCoverPhotoButton: {
    paddingRight: "8px"
  }
});

class CoverProfile extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card className={classes.card} elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/profile/cover.jpg"
                title="Cover photo"
              />
              <div className={classes.overlayAvatar}>
                <Avatar
                  onClick={this.handleOpen}
                  alt="Profile photo"
                  src="/static/images/profile/avatar.png"
                  className={classes.bigProfileAvatar}
                />
              </div>

              <div className={classes.overlayChangeCover}>
                <Fragment>
                  <input
                    color="primary"
                    accept="image/*"
                    type="file"
                    //onChange={onChangeCoverPhoto}
                    id="icon-button-file"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="icon-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.coverPhotoButton}
                      size="medium"
                      color="primary"
                    >
                      <AddAPhotoIcon className={classes.iconCoverPhotoButton} />{" "}
                      Change cover photo
                    </Button>
                  </label>
                </Fragment>
              </div>
            </CardActionArea>
            <Tabs
              indicatorColor="primary"
              textColor="secondary"
              centered
              className={classes.tabs}
            >
              <Link to="/photos" className={classes.link}>
                <Tab
                  label="Photos"
                  //icon={<PhotoCameraIcon />}
                  style={{
                    color: "#C12424",
                    fontWeight: "bold",
                    borderRight: "1px solid #d4d4d4"
                  }}
                />
              </Link>

              <Link to="/videos" className={classes.link}>
                <Tab
                  label="Videos"
                  //icon={<VideoLibraryIcon />}

                  style={{
                    color: "#C12424",
                    fontWeight: "bold",
                    borderRight: "1px solid #d4d4d4"
                  }}
                />
              </Link>
              {/*  <Post /> */}
            </Tabs>
          </Card>

          <br />
        </div>
      </Fragment>
    );
  }
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //profile_photo: state.profile.profile_photo,
  //cover_photo: state.profile.cover_photo
});

export default connect(mapStateToProps, null)(withStyles(styles)(CoverProfile));
