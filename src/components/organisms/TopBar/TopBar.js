import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import RappiBar from "../../molecules/RappiBar";
import Select from "../../atoms/Select";
import Button from "../../atoms/Button";
import Diagnostic from "../Diagnostic";
import PlaceField from "../PlaceField";
import Chip from "../../atoms/Chip";
import { GoogleApiWrapper } from "google-maps-react";
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import DirectionsWalkOutlinedIcon from '@material-ui/icons/DirectionsWalkOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

const onPlaceChange = (onChangeAddress) => async placeInfo => {
  onChangeAddress({lat: placeInfo.lat, lng:placeInfo.lng, value:placeInfo.fullAddress});
};

const TopBar = ({
  classes,
  country,
  google,
  origin,
  destination,
  mode,
  onChangeOrigin,
  onChangeDestination,
  onChangeMode
}) => (
    <RappiBar underLine={false}>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.field}>
          <PlaceField
            google={google}
            name="address"
            country={country}
            onChange={onPlaceChange(onChangeOrigin)}
            placeholder={"Origen"}
            preservedValue={origin.value}
            // errorForm={errors.address ? errors.address : ""}
          />
        </Grid>
        <Grid item className={classes.field}>
          <PlaceField
            google={google}
            name="address"
            country={country}
            onChange={onPlaceChange(onChangeDestination)}
            placeholder={"Destino"}
            preservedValue={destination.value}
            // errorForm={errors.address ? errors.address : ""}
          />
        </Grid>
        <Grid item className={classes.modes}>
          <Chip
              label="3 min"
              onClick
              icon={<DriveEtaOutlinedIcon/>}
            />
          <Chip
              label="3 min"
              onClick
              icon={<MotorcycleOutlinedIcon/>}
            />
          <Chip
              label="10 min"
              onClick
              icon={<DirectionsWalkOutlinedIcon/>}
            />
        </Grid>
      </Grid>
    </RappiBar>
);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  vertical: PropTypes.string.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeVertical: PropTypes.object.isRequired,
  verticals: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  libraries: ["places"],
})(TopBar);
