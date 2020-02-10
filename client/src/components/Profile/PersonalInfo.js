import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { countries } from "../../utils/CountryList";
import { positions } from "../../utils/PositionList";

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
    zoom: "75%",
    // Add breakpoint for small devices
    [theme.breakpoints.down("sm")]: {
      //marginTop: "-12%",
      marginLeft: "-4%",
      marginRight: "-7%",
      width: "auto"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      //marginTop: "-12%",
      marginLeft: "-4%",
      marginRight: "-7%",
      width: "auto"
    }
  },
  title: {
    textAlign: "left",
    color: "#C12424"
    //fontWeight: "bold"
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "gray !important"
  },
  // Overiding css properties on material ui textbox rounded borders
  textField: {
    [`& fieldset`]: {
      borderRadius: 4
    }
  },
  cardEdit: {
    flexGrow: 1,
    zoom: "80%",
    // Add breakpoint for small devices
    [theme.breakpoints.down("sm")]: {
      zoom: "80%"
    }
  }
});

class PersonalInfo extends Component {
  state = { editing: false };

  onEdit = event => {
    event.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { classes } = this.props;
    const { editing } = this.state;

    const profile = (
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
              onClick={this.onEdit}
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
    );

    const profileForm = (
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
              onClick={this.onEdit}
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
          title="Edit Profile"
        />

        <CardContent className={classes.cardEdit}>
          <form onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstname"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  label="Firstname"
                  name="firstname"
                  //value={this.props.profile.firstname}
                  onChange={this.onChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  label="Lastname"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="lastname"
                  //value={this.props.profile.lastname}
                  onChange={this.onChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend" align="left">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    className={classes.group}
                    name="gender"
                    //value={this.props.profile.gender}
                    onChange={this.onChange}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="residenceCountry"
                  select
                  name="residence_country"
                  //value={this.props.profile.residence_country}
                  onChange={this.onChange}
                  label="Residence Country:"
                  fullWidth
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  //helperText="Please select filter"
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                >
                  {countries.map(option => (
                    <MenuItem key={option.Code} value={option.Name}>
                      {option.Name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="tag"
                  label="Tag"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="tag"
                  //value={this.props.profile.tag}
                  onChange={this.onChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  margin="dense"
                  name="birth_date"
                  //value={this.props.profile.birth_date}
                  onChange={this.onChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Present club/ Affiliation"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="affiliation"
                  //value={this.props.profile.affiliation}
                  onChange={this.onChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  id="position"
                  select
                  name="position"
                  //value={this.props.profile.position}
                  onChange={this.onChange}
                  label="Position:"
                  fullWidth
                  margin="normal"
                  className={classes.textField}
                  variant="outlined"
                  helperText="Please select position"
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                >
                  {positions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Height"
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="height"
                  //value={this.props.profile.height}
                  onChange={this.onChange}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Wingspan"
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="wingspan"
                  //value={this.props.profile.wingspan}
                  onChange={this.onChange}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Vertical leap"
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="vertical_leap"
                  //value={this.props.profile.vertical_leap}
                  onChange={this.onChange}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Time to run 40m"
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="time_to_run_40m"
                  //value={this.props.profile.time_to_run_40m}
                  onChange={this.onChange}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  required
                  id="outlined-uncontrolled"
                  label="Time to run 100m"
                  type="number"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="time_to_run_100m"
                  //value={this.props.profile.time_to_run_100m}
                  onChange={this.onChange}
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                  style={{ background: "#C12424", fontWeight: "bold" }}
                >
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
    return (
      <div className={classes.root}>{!editing ? profile : profileForm}</div>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
