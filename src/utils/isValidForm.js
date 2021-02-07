import isEmpty from "lodash/isEmpty";

export default (values, validationSchema) => {
  try {
    return !isEmpty(values) && !!validationSchema.validateSync(values);
  } catch (e) {
    return false;
  }
};
