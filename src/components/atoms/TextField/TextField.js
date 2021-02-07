import React from "react";
import { TextField, InputAdornment, Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";
import { ErrorMessage, useFormikContext, getIn } from "formik";
import classnames from "classnames";
import { isEmpty } from "lodash";
import IconInformation from "../IconInformation/IconInformation";
import FieldDescriptor from "../FieldDescriptor";

const RappiTextField = ({
  classes,
  name,
  value,
  setFieldTouched,
  handleChange,
  tooltip,
  showError,
  forceLower = false,
  title,
  disabled,
  inputProps,
  ...props
}) => {
  let className = "";
  let errorMessage = null;
  const InputProps = { ...inputProps };
  // const { errors, touched } = useFormikContext();
  // TODO ALERT
  const { errors, touched } = {};

  if (!isEmpty(inputProps)) {
    InputProps.preservedvalue = InputProps.preservedValue;
    InputProps.editable = (InputProps.editable || true).toString();
    delete InputProps.preservedValue;
  }

  const endAdornment = tooltip ? (
    <InputAdornment
      position="end"
      classes={{
        positionEnd: classes.tooltipIconEnd,
      }}
    >
      <Tooltip
        title={tooltip}
        placement="bottom"
        classes={{
          popper: classes.tooltipRoot,
          tooltip: classes.tooltip,
        }}
      >
        <IconInformation />
      </Tooltip>
    </InputAdornment>
  ) : null;

  errorMessage =
    showError && getIn(touched, name) && getIn(errors, name) ? (
      <ErrorMessage
        name={name}
        key={name}
        component="div"
        className={classes.error}
      />
    ) : null;
  className = errorMessage ? classes.rootError : "";

  return (
    <>
      {title && <FieldDescriptor title={title} />}
      <TextField
        className={classnames(classes.root, "RappiTextField", className)}
        name={name}
        disabled={disabled}
        value={value}
        onBlur={() => setFieldTouched(name, true)}
        onChange={evt => {
          // eslint-disable-next-line
          evt.target.value = forceLower
            ? evt.target.value.toLowerCase()
            : evt.target.value;
          handleChange(evt);
        }}
        key="field"
        margin="none"
        InputLabelProps={{
          disableAnimation: true,
        }}
        InputProps={{
          ...InputProps,
          disableUnderline: true,
          endAdornment,
        }}
        {...props}
      />
      {errorMessage}
    </>
  );
};

RappiTextField.defaultProps = {
  title: null,
  tooltip: null,
  showError: false,
  value: "",
  setFieldTouched: () => {},
  handleChange: () => {},
  forceLower: false,
  disabled: false,
  inputProps: {},
};

RappiTextField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  tooltip: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setFieldTouched: PropTypes.func,
  handleChange: PropTypes.func,
  showError: PropTypes.bool,
  forceLower: PropTypes.bool,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default RappiTextField;
