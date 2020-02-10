import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
//import { getSuggestions } from "../../actions/suggestions";

const styles = theme => ({
  //Style the scrollbar
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
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
    width: "100%",
    marginTop: "-157%",
    [theme.breakpoints.down("sm")]: {
      padding: "2%",
      marginLeft: "-2%",
      marginRight: "-2%",
      marginTop: "0%"
    }
  },

  avatar: {
    margin: 4,
    width: 59,
    height: 59
  },
  button: {
    background: "#C12424"
  },

  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  },
  // Overiding css properties on material ui textbox rounded borders
  textField: {
    [`& fieldset`]: {
      borderRadius: 0
    }
  },
  // Overiding CSS with classnames for ListItemText Implementation
  primary: {
    fontSize: "17px",
    color: "#3b5998",
    paddingLeft: "3%",

    fontWeight: "bold"
  },
  secondary: {
    fontSize: "16px"
  }
});

class Suggestions extends Component {
  state = {};

  componentDidMount() {
    //this.props.getSuggestions();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h5"
                gutterBottom
                align="left"
                color="inherit"
                style={{
                  paddingTop: "10%"
                }}
              >
                Suggestions:
              </Typography>
              <List
                style={{
                  marginLeft: "-2%",
                  marginRight: "-4%"
                }}
              >
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt="Trial"
                      src={`/static/images/avatar/2.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    classes={{
                      primary: classes.primary,
                      secondary: classes.secondary
                    }}
                    //primary={suggestion.firstname + " " + suggestion.lastname}

                    primary={"Moses Banda"}
                    /* secondary={
                    <React.Fragment>{" @nathan.baleeta"}</React.Fragment>
                  } */
                  />
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Follow
                  </Button>
                </ListItem>

                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt="Trial"
                      src={`/static/images/avatar/7.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    classes={{
                      primary: classes.primary,
                      secondary: classes.secondary
                    }}
                    //primary={suggestion.firstname + " " + suggestion.lastname}

                    primary={"Moses Banda"}
                    /* secondary={
                    <React.Fragment>{" @nathan.baleeta"}</React.Fragment>
                  } */
                  />
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Follow
                  </Button>
                </ListItem>

                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt="Trial"
                      src={`/static/images/avatar/avatar.png`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    classes={{
                      primary: classes.primary,
                      secondary: classes.secondary
                    }}
                    //primary={suggestion.firstname + " " + suggestion.lastname}

                    primary={"Nina Tendo"}
                    /* secondary={
                    <React.Fragment>{" @nathan.baleeta"}</React.Fragment>
                  } */
                  />
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Follow
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

Suggestions.propTypes = {
  classes: PropTypes.object.isRequired
  //suggestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  //suggestions: state.suggestions.suggestions
});

export default connect(mapStateToProps, {})(withStyles(styles)(Suggestions));
