import React from "react";
import * as PropTypes from "prop-types";

const Box = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

Box.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default Box;
