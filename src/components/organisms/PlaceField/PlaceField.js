import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "../../atoms/TextField";
import { translateKey } from "../../../utils/translate";

class PlaceField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.preservedValue ? props.preservedValue : "",
      error: false,
    };
  }

  componentWillReceiveProps({ preservedValue }) {
    const { address } = this.state;
    if (preservedValue && address === "") {
      this.handleChange(preservedValue);
    }
  }

  handleChange = address => {
    this.setState({ address, error: false });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => this.addLatLng(results[0]))
      .then(result => {
        const country = this.getCountry(result.address_components);
        const payload = {
          lat: result.lat,
          lng: result.lng,
          country: country.long_name,
          countryCode: country.short_name,
          placeId: result.place_id,
          fullAddress: address,
          type: result.types.join(", "),
        };
        this.props.onChange(payload);
        this.handleChange(address);
      })
      .catch(this.handleError);
  };

  handleError = err => {
    if (err !== "ZERO_RESULTS") this.setState({ error: true });
  };

  addLatLng = result =>
    getLatLng(result).then(latLng => ({ ...result, ...latLng }));

  getCountry = addressComponents =>
    addressComponents.find(component => component.types[0] === "country");

  render() {
    const {
      name,
      classes,
      onChange,
      country,
      errorForm,
      ...props
    } = this.props;
    const { error, address } = this.state;
    return (
      <PlacesAutocomplete
        highlightFirstSuggestion
        value={address}
        searchOptions={{
          fields: "placeId, addres_component, address, location, title",
          componentRestrictions: {
            country,
          },
        }}
        debounce={500}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onError={this.handleError}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps(props)}
              name={name}
              style={errorForm ? { border: "solid 1px #ff441f" } : null}
            />
            {error && (
              <div className={classes.error}>
                {translateKey("google.places.error")}
              </div>
            )}
            {errorForm && <div className={classes.error}>{errorForm}</div>}
            {!error && (
              <Paper className={classes.container}>
                {loading && (
                  <Grid container justify="center">
                    <CircularProgress
                      color="secondary"
                      className={classes.loader}
                    />
                  </Grid>
                )}
                {suggestions.map(suggestion => (
                  <MenuItem
                    {...getSuggestionItemProps(suggestion, {})}
                    className={classes.item}
                  >
                    {suggestion.description}
                  </MenuItem>
                ))}
              </Paper>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

PlaceField.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  preservedValue: PropTypes.string,
  country: PropTypes.string,
};

PlaceField.defaultProps = {
  preservedValue: "",
  country: null,
};

export default PlaceField;
