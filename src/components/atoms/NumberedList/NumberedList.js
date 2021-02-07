import React from "react";
import Grid from "@material-ui/core/Grid";
import * as PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import InfoIcon from "@material-ui/icons/Info";

const FormSectionTitle = ({ labels, classes, info, link, ...props }) => (
  <Grid container className={classes.root} {...props}>
    {labels.map((label, index) => (
      <div>{`${index + 1}. ${label}`}</div>
    ))}
  </Grid>
);

FormSectionTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  props: PropTypes.object,
  link: PropTypes.object,
};

FormSectionTitle.defaultProps = {
  info: null,
  props: {},
  link: null,
};

export default FormSectionTitle;
