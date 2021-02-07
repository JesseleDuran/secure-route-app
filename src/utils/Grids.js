import React from "react";
import { Grid } from "@material-ui/core/";
import PropTypes from "prop-types";

export const GridFull = ({ children, ...props }) => (
  <Grid xs={12} sm={12} md={12} lg={12} xl={12} {...props}>
    {children}
  </Grid>
);

export const GridHalfAtMd = ({ children, ...props }) => (
  <Grid xs={12} sm={12} md={6} lg={6} xl={6} {...props}>
    {children}
  </Grid>
);

GridFull.propTypes = {
  children: PropTypes.node.isRequired,
};

GridHalfAtMd.propTypes = {
  children: PropTypes.node.isRequired,
};
