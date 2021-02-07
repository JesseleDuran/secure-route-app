import React from "react";
import { Formik } from "formik";
import * as PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";
import SearchForm from "./SearchForm";
import validationSchema from "./SearchSchema";
import withNotifier from "../../../hocs/notifications/withNotifier";

const initialValuesValid = values => {
  try {
    return !isEmpty(values) && !!validationSchema.validateSync(values);
  } catch (e) {
    return false;
  }
};

const defaultValues = () => ({
  address: "",
  filter: "",
  userId: "",
});

const ConfiguredForm = ({
  initialValues,
  onFormChange,
  notifier,
  country,
  onChangeAddress,
  onFilterStores,
  onSetUserID,
  treatment
}) => (
  <Formik
    initialValues={defaultValues()}
    isInitialValid={initialValuesValid(initialValues)}
    validationSchema={validationSchema}
    enableReinitialize
    render={props => (
      // onFormChange(props);
      <SearchForm
        {...props}
        onSetUserID={onSetUserID}
        treatment={treatment}
        onFilterStores={onFilterStores}
        notifier={notifier}
        country={country}
        onChangeAddress={onChangeAddress}
      />
    )}
  />
);

ConfiguredForm.defaultProps = {
  initialValues: { ...defaultValues },
};

ConfiguredForm.propTypes = {
  initialValues: PropTypes.object,
  onFormChange: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  notifier: PropTypes.object.isRequired,
};

export default withNotifier(ConfiguredForm);
