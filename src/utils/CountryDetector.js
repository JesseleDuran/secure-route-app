/* eslint-disable no-param-reassign */
import axios from "axios";
import config from "../config";

const COUNTRY_IP_DETECTOR_URL = "https://ipapi.co/json/";

const ALLOW_COUNTRIES = ["CO", "AR", "UY", "BR", "CL", "MX", "CR", "EC", "PE"];

const FALLBACK_LOCATIONS = {
  CO: {
    lat: 4.985335,
    lng: -74.732809,
  },
  MX: {
    lat: 25.985335,
    lng: -111.732809,
  },
  BR: {
    lat: -23.533773,
    lng: -46.62529,
  },
  AR: {
    lat: -34.588263,
    lng: -58.439125,
  },
  CL: {
    lat: -33.5,
    lng: -70.0,
  },
  PE: {
    lat: -12.0552493,
    lng: -77.0627323,
  },
  UY: {
    lat: -34.90903,
    lng: -56.16585,
  },
  EC: {
    lat: -0.1862504,
    lng: -78.5709654,
  },
  CR: {
    lat: 9.935697,
    lng: -84.1484503,
  },
};

const persist = info => {
  window.localStorage.setItem("countryCode", info.country);
  if (!info.latitude || !info.longitude) {
    info.latitude = FALLBACK_LOCATIONS[info.country].lat;
    info.longitude = FALLBACK_LOCATIONS[info.country].lng;
  }
  window.localStorage.setItem("latitude", info.latitude);
  window.localStorage.setItem("longitude", info.longitude);
  window.localStorage.setItem("currency", info.currency);
  return info;
};

const getHost = async info =>
  axios
    .get(
      `${config.API.RESOLVE_COUNTRY_URL}?lat=${info.latitude}&lng=${info.longitude}`,
    )
    .then(({ data }) => {
      window.localStorage.setItem(
        "host",
        data.centralized_server_host.replace("http:", "https:"),
      );
      window.localStorage.setItem("currencyPrefix", data.currency_prefix);
      window.localStorage.setItem("phonePrefix", data.phone_prefix);
    });

export default async () => {
  const countryData = await axios
    .get(COUNTRY_IP_DETECTOR_URL)
    .then(res => res.data);
  if (!ALLOW_COUNTRIES.includes(countryData.country))
    throw new Error("IS NOT IN THE ALLOWED COUNTRIES!");
  await getHost(countryData);
  return persist(countryData);
};
