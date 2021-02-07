import MaterialSelect from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import * as PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import Chip from "@material-ui/core/Chip";
import FieldDescriptor from "../FieldDescriptor";

const onChangeWithMaxBehaviour = (max, onChange) => evt => {
  const {
    target: {
      value: { length },
    },
  } = evt;
  if (length <= max) {
    onChange(evt);
  }
};
const getOptionLabel = option =>
  typeof option === "string" ? option : option.label;

const getOptionValue = option =>
  typeof option === "string" ? option : option.value;

const optionsToMap = options =>
  options.reduce((prev, next) => {
    const key = getOptionValue(next);
    return { [key]: getOptionLabel(next), ...prev };
  }, {});

const returnChip = option => (
  <Chip
    style={{ marginRight: 4 }}
    variant="outlined"
    key={option}
    label={option}
    size="small"
  />
);

const renderSelectedValues = (placeholder, optionsMap) => selected =>
  !selected || selected.length === 0
    ? placeholder
    : selected.map(option => returnChip(optionsMap[option]));

const MultipleSelect = ({
  options = [],
  classes = {},
  placeholder,
  value = "none",
  onChange,
  onBlur,
  title = null,
  error,
  max,
  ...props
}) => {
  const optionsMap = optionsToMap(options);
  return [
    <FieldDescriptor title={title} />,
    <MaterialSelect
      {...props}
      onClose={onBlur}
      value={value}
      IconComponent={ExpandMoreIcon}
      displayEmpty
      onChange={!max ? onChange : onChangeWithMaxBehaviour(max, onChange)}
      fullWidth
      multiple
      input={
        <InputBase
          className={value.length === 0 ? classes.hoverRoot : classes.root}
          placeholder={placeholder}
        />
      }
      renderValue={renderSelectedValues(placeholder, optionsMap)}
    >
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
            {option.label}
          </MenuItem>
        ),
      )}
    </MaterialSelect>,
    // <div className={classes.error}>{error}</div>,
  ];
};

MultipleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  max: PropTypes.number,
};

MultipleSelect.defaultProps = {
  placeholder: "",
  value: "none",
  error: "",
};

export default MultipleSelect;
