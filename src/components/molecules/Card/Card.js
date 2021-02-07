import React from "react";
import { Divider, Dialog } from "@material-ui/core";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid/Grid";
import Avatar from "../../atoms/Avatar";
import Chip from "../../atoms/Chip";

const RappiCard = ({ description, classes, distance }) => (
  // <div className={classes.root}>
  <Card className={classes.card} variant="outlined">
    <Grid container justify="space-between">
      <Grid item md={5}>
        <div className={classes.description}>{description}</div>
      </Grid>
      <Grid item md={5} style={{ paddingRight: 35 }}>
        <div className={classes.distance}>{distance}</div>
      </Grid>
    </Grid>
  </Card>
  // </div>
);

RappiCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

RappiCard.defaultProps = {
  open: false,
  title: null,
  subtitle: null,
  buttonText: null,
  image: null,
  onClick: () => {},
};

export default RappiCard;
