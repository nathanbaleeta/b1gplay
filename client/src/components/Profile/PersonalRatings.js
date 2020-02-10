import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

import Rating from "@material-ui/lab/Rating";

import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";

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
    zoom: "75%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    textAlign: "left",
    color: "#C12424",
    marginBottom: "1%"
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: "#C12424",
    textTransform: "capitalize"
    //fontSize: "100%"
    //maxHeight: "50px",
    //minHeight: "50px"
  },
  iconFilled: {
    color: "#ff6d75"
  },
  iconHover: {
    color: "FF7F50"
  },
  selectRater: {
    paddingRight: "49%"
  }
});

const raters = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coaches",
    label: "Coaches"
  },
  {
    value: "Players",
    label: "Players"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Scouts",
    label: "Scouts"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Agents",
    label: "Agents"
  }
];
class PersonalInfo extends Component {
  state = {
    editing: false,
    follow: false,

    rebounding: 0,
    defence: 0,
    scoring: 0,
    leadership: 0,
    discipline: 0,
    basketballIQ: 0,
    energy: 0,
    determination: 0,
    clutch: 0,
    proPotential: 0,

    total: 0,

    inputValue: 0
  };

  onEdit = event => {
    event.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  onFollow = event => {
    event.preventDefault();
    this.setState({ follow: !this.state.follow });
  };

  render() {
    const { classes } = this.props;
    const {
      editing,
      follow,
      rebounding,
      defence,
      scoring,
      leadership,
      discipline,
      basketballIQ,
      energy,
      determination,
      clutch,
      proPotential,
      inputValue
    } = this.state;

    const ratings = (
      <Card
        //className={classes.card}
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
          title="Personal Ratings"
        />

        <CardContent>
          <Grid
            container
            spacing={0}
            style={{
              marginTop: "-10%"
            }}
          >
            <Grid item xs={9} sm={9}></Grid>

            <Grid item xs={3} sm={3}>
              <TextField
                //required
                id="raters"
                select
                name="raters"
                //onChange={this.onChange}
                label="Raters"
                margin="normal"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              >
                {raters.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

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
                onClick={this.onEdit}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Rate Player
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                onClick={this.onFollow}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                {!follow ? "Follow" : "Unfollow"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );

    const ratingsForm = (
      <Fragment>
        <Card
          //className={classes.card}
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
            style={{
              marginBottom: "-2%"
            }}
            title="Ratings form"
          />

          <CardContent>
            <form onSubmit={this.onSubmit}>
              <Grid container spacing={0}>
                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Rebounding
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Defence
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Scoring
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Leadership
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Discipline
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Basketball 1.Q
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Energy
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Determination
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Clutch
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Pro-potential
                  </Typography>
                </Grid>
                <Grid item xs={9} sm={9}>
                  <Grid container spacing={0} alignItems="center">
                    <Grid item xs>
                      <Slider
                        min={0}
                        max={10}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 0}
                        step={0.1}
                      />
                    </Grid>
                    <Grid item>
                      <div>
                        <InputNumber
                          min={0}
                          max={10}
                          style={{ marginLeft: 16 }}
                          step={0.1}
                          value={inputValue}
                          onChange={this.onChange}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3} sm={3}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
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
                </Grid>

                <Grid item xs={8} sm={8}></Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{
                      color: "#C12424",
                      //fontWeight: "bold",
                      fontSize: "20px",
                      paddingTop: "3%",
                      paddingBottom: "3%"
                    }}
                  >
                    {(rebounding +
                      defence +
                      scoring +
                      leadership +
                      discipline +
                      basketballIQ +
                      energy +
                      determination +
                      clutch +
                      proPotential) /
                      10}
                  </Typography>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <Button
                      onClick={this.onEdit}
                      fullWidth
                      variant="contained"
                      color="secondary"
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        //fontSize: "18px",
                        background: "#C12424"
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="medium"
                      color="primary"
                      fullWidth
                      style={{
                        textTransform: "capitalize",
                        fontWeight: "bold"
                        //fontSize: "18px"
                      }}
                    >
                      Rate Player
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Fragment>
    );

    return (
      <div className={classes.root}>{!editing ? ratings : ratingsForm}</div>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
