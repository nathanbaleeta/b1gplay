import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import MenuItem from "@material-ui/core/MenuItem";

import { countries } from "../../../utils/CountryList";

//import Select from "react-select";
//import countryList from "react-select-country-list";

import { connect } from "react-redux";
import { updateField } from "../../../actions/wizard";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },
  selectField: {
    margin: theme.spacing.unit * 3,
    width: "100%",
    textAlign: "left",
    fontFamily: "Arial",
    color: "black",
    marginLeft: 0,
    lineHeight: "40px"
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  }
});

class ProfileForm extends Component {
  state = {};

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="firstname"
                margin="normal"
                variant="outlined"
                fullWidth
                className={classes.textField}
                label="Firstname"
                name="firstname"
                value={this.props.wizard.firstname}
                onChange={this.onChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="lastname"
                label="Lastname"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="lastname"
                value={this.props.wizard.lastname}
                onChange={this.onChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" align="left">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  className={classes.group}
                  name="gender"
                  value={this.props.wizard.gender}
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
                id="date"
                label="Birthday"
                type="date"
                fullWidth
                variant="outlined"
                className={classes.textField}
                margin="dense"
                name="birthday"
                value={this.props.wizard.birthday}
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
                id="country_of_origin"
                select
                className={classes.selectField}
                name="country_of_origin"
                value={this.props.wizard.country_of_origin}
                onChange={this.onChange}
                label="Country of Origin:"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText="Please select country"
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
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard
});

export default connect(
  mapStateToProps,
  { updateField }
)(withStyles(styles)(ProfileForm));
