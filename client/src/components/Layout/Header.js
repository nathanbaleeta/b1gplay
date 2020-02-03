import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PollIcon from "@material-ui/icons/Poll";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
//import { Redirect } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const styles = theme => ({
  root: {
    width: "100%",
    zoom: "60%"
    //maxZoom: "75%"
  },
  appBar: {
    background: "#C12424"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "19px",
    marginLeft: -12,
    marginRight: 20
  },
  linkMenuItems: {
    textDecoration: "none",
    color: "white"
  },
  linkMenuItemsDropdown: {
    textDecoration: "none",
    color: "black"
  },
  link: {
    textDecoration: "none",
    color: "black"
  },
  avatar: {
    margin: 10,
    height: 55,
    width: 55,
    background: "#C12424"
  },
  title: {
    fontStyle: "italic",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    /* "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75)
    }, */
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      width: "auto"
    }
  },
  searchIcon: {
    color: "black",
    "&:hover": {
      color: fade(theme.palette.common.white, 0.25)
    },
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "primary",

    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: 700
    }
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  // Drawer CSS
  list: {
    width: 400
  },
  fullList: {
    width: "auto"
  }
});

class Header extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    rightDrawer: false
  };

  logoutUser = () => {
    this.props.logout();
  };
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  openDrawer = () => {
    this.setState({ rightDrawer: true });
  };

  closeDrawer = () => {
    this.setState({ rightDrawer: false });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    /* if (!this.props.isAuthenticated) {
      return <Redirect to="/auth/login" />;
    } */

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <Link to="/settings" className={classes.linkMenuItemsDropdown}>
          <MenuItem>Settings</MenuItem>
        </Link>

        <MenuItem onClick={this.logoutUser}>Logout</MenuItem>

        <Typography
          variant="title"
          gutterBottom
          style={{ fontSize: "13px", color: "#D23E56" }}
          align="center"
        />
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.state.rightDrawer}
        onKeyDown={this.state.rightDrawer}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <Fragment>
        <Drawer
          anchor="right"
          open={this.state.rightDrawer}
          onClose={this.closeDrawer}
        >
          {sideList("right")}
        </Drawer>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/logo/logo.png"
                className={classes.avatar}
              />

              <Typography
                className={classes.title}
                variant="h4"
                color="inherit"
                noWrap
                //style={{ fontWeight: "bold" }}
              >
                b1gplay
              </Typography>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  style={{ height: 50 }}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <div>
                  <Grid container justify="center" alignItems="center">
                    <div style={{ paddingRight: 20 }}>
                      <Link to="/" className={classes.linkMenuItems}>
                        <IconButton color="inherit">
                          <PersonIcon style={{ height: 40, width: 40 }} />
                        </IconButton>

                        {/*    <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Home
                        </Typography> */}
                      </Link>
                    </div>

                    <div style={{ paddingRight: 20 }}>
                      <Link to="/analytics" className={classes.linkMenuItems}>
                        <IconButton color="inherit">
                          <PollIcon style={{ height: 40, width: 40 }} />
                        </IconButton>

                        {/*    <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Analytics
                        </Typography> */}
                      </Link>
                    </div>

                    <div style={{ paddingRight: 20 }}>
                      <Link to="/messages" className={classes.linkMenuItems}>
                        <IconButton color="inherit">
                          <MailIcon style={{ height: 40, width: 40 }} />
                        </IconButton>

                        {/*    <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Messages
                        </Typography> */}
                      </Link>
                    </div>

                    <div style={{ paddingRight: 20 }}>
                      <Link
                        to="/notifications"
                        className={classes.linkMenuItems}
                      >
                        <IconButton color="inherit" onClick={this.openDrawer}>
                          <NotificationsIcon
                            style={{ height: 40, width: 40 }}
                          />
                        </IconButton>

                        {/*       <Typography
                          variant="body2"
                          color="inherit"
                          noWrap
                          style={{ fontWeight: "bold" }}
                        >
                          Alerts
                        </Typography> */}
                      </Link>
                    </div>
                  </Grid>
                </div>

                <IconButton
                  color="inherit"
                  onClick={this.handleProfileMenuOpen}
                >
                  <AccountCircle style={{ height: 40, width: 40 }} />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(withStyles(styles)(Header));
