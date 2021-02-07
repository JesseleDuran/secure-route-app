import React from "react";
import * as PropTypes from "prop-types";
import CheckCircleOutlineOutlined from "@material-ui/icons/CheckCircleOutlineOutlined";
import CancelOutlined from "@material-ui/icons/CancelOutlined";
import Grid from "@material-ui/core/Grid/Grid";

const SuccessItem = ({ classes, isSuccess, label, ...props }) =>
  isSuccess ? (
    <Grid container justify="flex-start" alignItems="center">
      <CheckCircleOutlineOutlined style={{ color: "#30c665", padding: 5 }} />
      {label}
    </Grid>
  ) : (
    <Grid container justify="flex-start" alignItems="center">
      <CancelOutlined style={{ color: "#f94420", padding: 5 }} />
      {label}
    </Grid>
  );

SuccessItem.defaultProps = {
  title: null,
  children: null,
};

SuccessItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default SuccessItem;
