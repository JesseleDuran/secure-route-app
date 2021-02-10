import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { GoogleApiWrapper } from "google-maps-react";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import DirectionsWalkOutlinedIcon from "@material-ui/icons/DirectionsWalkOutlined";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import ChipInput from "material-ui-chip-input";
import RappiBar from "../../molecules/RappiBar";
import Select from "../../atoms/Select";
import Button from "../../atoms/Button";
import Diagnostic from "../Diagnostic";
import PlaceField from "../PlaceField";
import Chip from "../../atoms/Chip";

const onPlaceChange = onChangeAddress => async placeInfo => {
  onChangeAddress({
    lat: placeInfo.lat,
    lng: placeInfo.lng,
    value: placeInfo.fullAddress,
  });
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
  onChangeMode,
  handleOnClickChip,
  durationDrive,
  durationWalk,
}) => (
  <RappiBar underLine={false}>
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.field}>
        <PlaceField
          google={google}
          name="address"
          country={country}
          onChange={onPlaceChange(onChangeOrigin)}
          placeholder="Origen"
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
          placeholder="Destino"
          preservedValue={destination.value}
          // errorForm={errors.address ? errors.address : ""}
        />
      </Grid>
      <Grid item className={classes.modes}>
        <Chip
          value={1}
          label={durationDrive != 0 ? `${durationDrive} min` : ""}
          onClick={handleOnClickChip(1)}
          selected={mode == 1}
          icon={<DriveEtaOutlinedIcon style={{ color: mode == 1 ? '#1d73e7': '' }}/>}
          isFocused
        />
        <Chip
          label={durationDrive != 0 ? `${durationDrive} min` : ""}
          onClick={handleOnClickChip(2)}
          selected={mode == 2}
          icon={<MotorcycleOutlinedIcon style={{ color: mode == 2 ? '#1d73e7': '' }}/>}
        />
        <Chip
          label={durationWalk != 0 ? `${durationWalk} min` : ""}
          onClick={handleOnClickChip(3)}
          selected={mode == 3}
          icon={<DirectionsWalkOutlinedIcon style={{ color: mode == 3 ? '#1d73e7': '' }} />}
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
