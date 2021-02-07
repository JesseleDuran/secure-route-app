import React from "react";
import * as PropTypes from "prop-types";
import MaterialButton from "@material-ui/core/Button";

const getClassName = (secondary, back, classes) => {
  if (back) return classes.back;
  if (secondary) return classes.secondary;
  return classes.primary;
};

const Button = ({ children = null, classes, secondary, back, ...props }) => (
  <MaterialButton
    {...props}
    className={getClassName(secondary, back, classes)}
    type="button"
  >
    {children}
  </MaterialButton>
);

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  secondary: PropTypes.bool,
  back: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  secondary: false,
  back: false,
};

export default Button;
