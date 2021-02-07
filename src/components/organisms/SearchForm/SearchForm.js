import React from "react";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { GoogleApiWrapper } from "google-maps-react";
import PlaceField from "../PlaceField";
import styles from "./Search.style";
import { translateKey } from "../../../utils/translate";
import TextField from "../../atoms/TextField";

const onPlaceChange = (setFieldValue, onChangeAddress) => async placeInfo => {
  setFieldValue("latitude", placeInfo.lat);
  setFieldValue("longitude", placeInfo.lng);
  setFieldValue("address", placeInfo.fullAddress);
  onChangeAddress(placeInfo.lat, placeInfo.lng);
};

const SearchForm = ({
  values,
  classes,
  handleChange,
  setFieldTouched,
  setFieldValue,
  touched,
  errors,
  google,
  notifier,
  country,
  onChangeAddress,
  isValid,
  onFilterStores,
  onSetUserID,
  treatment
}) => (
  <Grid className={classes.base}>
    <div className={classes.title}>Buscar por:</div>
    <Grid item md={12} className={classes.field}>
      <PlaceField
        title="Dirección"
        google={google}
        name="address"
        country={country}
        onlyAddresses
        onChange={onPlaceChange(setFieldValue, onChangeAddress, notifier)}
        onBlur={() => setFieldTouched("address", true)}
        placeholder={translateKey("form.writeHere")}
        preservedValue={values.address}
        errorForm={errors.address ? errors.address : ""}
      />
    </Grid>
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.field}>
        <TextField
          title="Filtrar tiendas"
          name="filter"
          value={values.filter}
          placeholder={translateKey("form.writeHere")}
          handleChange={evt => {
            onFilterStores(isValid, evt.target.value);
            handleChange(evt);
          }}
          setFieldTouched={setFieldTouched}
          showError
          error={touched.filter && errors.filter ? errors.filter : ""}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.field}>
        <TextField
          title="User ID"
          name="userId"
          value={values.userId}
          placeholder={translateKey("form.writeHere")}
          handleChange={evt => {
            onSetUserID(isValid, evt.target.value, values.latitude, values.longitude);
            handleChange(evt);
          }}
          setFieldTouched={setFieldTouched}
          showError
          error={touched.userId && errors.userId ? errors.userId : ""}
        />
        <div className={classes.treatment}>{treatment}</div>
      </Grid>
    </Grid>
  </Grid>
);

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  google: PropTypes.object.isRequired,
  notifier: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  libraries: ["places"],
})(withStyles(styles)(SearchForm));
