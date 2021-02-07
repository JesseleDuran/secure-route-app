import React from "react";
import { ErrorMessage, useFormikContext, getIn } from "formik";
import PropTypes from "prop-types";
import classnames from "classnames";
import FieldDescriptor from "../../atoms/FieldDescriptor";

const CombinedField = ({
  classes,
  leftField,
  rightField,
  fieldNames,
  showErrors,
  title = null,
  ...props
}) => {
  let className;
  let errorMessage = null;
  const { errors, touched } = useFormikContext();

  if (showErrors) {
    fieldNames.forEach(name => {
      errorMessage =
        getIn(touched, name) && getIn(errors, name) ? (
          <ErrorMessage
            name={name}
            key={name}
            component="div"
            className={classes.error}
          />
        ) : null;
      className = errorMessage ? classes.rootError : "";
    });
  }

  return (
    <>
      {title && <FieldDescriptor title={title} />}
      <div className={classnames(classes.root, className)} {...props}>
        {leftField && leftField}
        {rightField && rightField}
      </div>
      {errorMessage}
    </>
  );
};

CombinedField.defaultProps = {
  title: "",
  fieldNames: [],
  showErrors: false,
};

CombinedField.propTypes = {
  fieldNames: PropTypes.arrayOf(PropTypes.string),
  rightField: PropTypes.node.isRequired,
  leftField: PropTypes.node.isRequired,
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
  showErrors: PropTypes.bool,
};

export default CombinedField;
