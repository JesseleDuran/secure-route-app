import React from "react";

class Map {
  constructor(map, zoom) {
    this.center = {
      lat: 4.726088,
      lng: -74.053513,
    };
    this.origin = {
      lat: 0,
      lng: 0,
    };
    this.destination = {
      lat: 0,
      lng: 0,
    };
    this.duration = 0;
    this.route = [];
    this.map = map;
    this.zoom = zoom;
  }

  setCenter = (lat, lng) => {
    this.center = {
      lat,
      lng,
    };
  };

  setOrigin = (lat, lng) => {
    this.origin = {
      lat,
      lng,
    };
  };

  setDestination = (lat, lng) => {
    this.destination = {
      lat,
      lng,
    };
  };

  setDuration = duration => {
    this.duration = duration;
  };

  setRoute = route => {
    this.route = route;
  };

  render = () =>
    React.createElement(
      this.map,
      {
        zoom: this.zoom,
        center: this.center,
        origin: this.origin,
        destination: this.destination,
        duration: this.duration,
        route: this.route,
      },
      null,
    );
}

export default Map;
