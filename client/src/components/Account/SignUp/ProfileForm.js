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
import Autocomplete from "@material-ui/lab/Autocomplete";

import { countries } from "../../../utils/CountryList";

import { connect } from "react-redux";
import { updateField } from "../../../actions/wizard";

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    maxWidth: "auto"
  },
  selectField: {
    margin: theme.spacing(3),
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
  },
  // Overiding css properties on material ui textbox rounded borders
  textField: {
    [`& fieldset`]: {
      borderRadius: 0,
    },
  }
});

class ProfileForm extends Component {
  state = {}

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  onChangeCountryOfOrigin = (event, value) => {
    this.props.updateField('countryOfOrigin', value);
    this.setState({
      countryOfOrigin: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="firstname"
                required
                margin="normal"
                variant="outlined"
                fullWidth
                className={classes.textField}
                label="Firstname"
                name="firstname"
                value={this.props.wizard.firstname ? this.props.wizard.firstname : ""}
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
                required
                label="Lastname"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="lastname"
                value={this.props.wizard.lastname ? this.props.wizard.lastname : ""}
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
                  value={this.props.wizard.gender ? this.props.wizard.gender : ""}
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
                required
                label="Birthday"
                type="date"
                fullWidth
                variant="outlined"
                className={classes.textField}
                margin="dense"
                name="dob"
                value={this.props.wizard.dob ? this.props.wizard.dob : ""}
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
          <Autocomplete
              id="country_of_origin"
              onInputChange={this.onChangeCountryOfOrigin}
              options={countries}
              getOptionLabel={option => option.Name }
              renderOption={option => (
              <Fragment>
                <span>{option.Name}</span>
              </Fragment>
            )}
              renderInput={params => (
                <TextField
                  {...params}
                  value={ this.props.wizard.countryOfOrigin }
                  className={classes.textField}
                  label="Country of Origin"
                  variant="outlined"
                  margin="normal"
                  placeholder="Country of Origin"
                  required
                  fullWidth
                  helperText="Please select country"    
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
            />
              
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
  wizard: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard
});

export default connect(mapStateToProps, { updateField })(
  withStyles(styles)(ProfileForm)
);
