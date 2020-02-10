import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FilterStars from "./FilterStars";
import Stars from "./Stars";

const styles = theme => ({});

class IndividualRatings extends Component {
  render() {
    //const { classes } = this.props;

    return (
      <Fragment>
        <div>
          <Grid container spacing={4}>
            <Grid container item lg={3} md={5} sm={12} xs={12} spacing={2}>
              <FilterStars />
            </Grid>
            <Grid item lg={9} md={7} sm={12} xs={12} spacing={2}>
              <Stars />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

IndividualRatings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndividualRatings);
