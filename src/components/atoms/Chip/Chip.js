import React from "react";
import * as PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import classNames from "classnames";

const RappiChip = ({ classes, label, onClick, icon }) => (
  <Chip icon={icon} label={label} onClick={onClick} className={classes.base} />
);

RappiChip.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default RappiChip;
