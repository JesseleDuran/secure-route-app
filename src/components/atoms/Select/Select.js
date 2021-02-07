import MaterialSelect from "@material-ui/core/Select";
import React from "react";
import * as PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FieldDescriptor from "../FieldDescriptor";

const Select = ({
  options = [],
  classes = {},
  placeholder,
  value = "none",
  onChange,
  onBlur,
  error,
  title,
  ...props
}) => (
  <>
    {title && <FieldDescriptor title={title} />}
    <MaterialSelect
      IconComponent={ExpandMoreIcon}
      {...props}
      onClose={onBlur}
      value={value}
      displayEmpty
      onChange={onChange}
      fullWidth
      input={
        <InputBase
          className={value === "none" ? classes.hoverRoot : classes.root}
          placeholder={placeholder}
        />
      }
    >
      <MenuItem value="none" disabled className={classes.hoverItem}>
        {placeholder}
      </MenuItem>
      {options.map(option =>
        typeof option === "string" ? (
          <MenuItem key={option} value={option} className={classes.item}>
            {option}
          </MenuItem>
        ) : (
          <MenuItem
            key={option.value}
            value={option.value}
            className={classes.item}
          >
            {option.icon ? (
              <img
                src={option.icon}
                alt={option.value}
                className={classes.icon}
              />
            ) : null}
            {option.label}
          </MenuItem>
        ),
      )}
    </MaterialSelect>
    {/* <div className={classes.error}>{error}</div> */}
  </>
);

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

Select.defaultProps = {
  title: null,
  placeholder: "",
  value: "none",
  error: "",
  onBlur: () => {},
};

export default Select;
