import React, { Component } from "react";
import L from "leaflet";
import * as PropTypes from "prop-types";
import { Map, Marker, TileLayer, Tooltip, Polyline } from "react-leaflet";

const Origin = new L.Icon({
  iconUrl: require("../../../assets/images/circle.svg"),
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, 20],
});

const Pin = new L.Icon({
  iconUrl: require("../../../assets/images/pin.png"),
  iconSize: [38, 38],
  iconAnchor: [19, 19],
  popupAnchor: [-3, -76],
});

class RappiMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { zoom, center, origin, destination, route, duration } = this.props;
    return (
      <Map
        animate
        style={{ height: "77vh" }}
        center={{ lat: center.lat, lng: center.lng }}
        zoom={zoom}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        <Polyline
          key={123}
          positions={[
            [origin.lat, origin.lng],
            [destination.lat, destination.lng],
          ]}
          color="#669df6"
        />

        {origin.lat === 0 || origin.lng === 0 ? null : (
          <Marker position={[origin.lat, origin.lng]} icon={Origin}>
            <Tooltip permanent>
              <b>{duration} min</b>
            </Tooltip>
          </Marker>
        )}

        {destination.lat === 0 || destination.lng === 0 ? null : (
          <Marker position={[destination.lat, destination.lng]} icon={Pin} />
        )}
      </Map>
    );
  }
}

RappiMap.propTypes = {
  google: PropTypes.object.isRequired,
  lat: PropTypes.string.isRequired,
  lng: PropTypes.string.isRequired,
  approximate: PropTypes.bool,
};

export default RappiMap;
