import React from "react";
import * as PropTypes from "prop-types";

const FieldDescriptor = ({ classes, title, children, ...props }) => (
  <span className={classes.root} {...props} title={title}>
    {title || children}
  </span>
);

FieldDescriptor.defaultProps = {
  title: null,
  children: null,
};

FieldDescriptor.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default FieldDescriptor;
