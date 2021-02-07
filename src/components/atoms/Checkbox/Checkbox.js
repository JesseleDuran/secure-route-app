import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";
import MaterialCheckbox from "@material-ui/core/Checkbox";

const Checkbox = ({
  classes,
  className,
  value,
  handleChange,
  label,
  name,
  disabled,
}) => (
  <FormControlLabel
    className={classnames(
      value ? classes.radioChecked : classes.radioUnchecked,
      classes[className],
    )}
    control={
      <MaterialCheckbox
        name={name}
        checked={value}
        onChange={handleChange}
        icon={<RadioButtonUnchecked />}
        checkedIcon={<RadioButtonChecked />}
        disabled={disabled}
      />
    }
    label={label}
  />
);

Checkbox.defaultProps = {
  disabled: false,
  className: "",
};

Checkbox.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Checkbox;
