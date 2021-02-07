const MAP_BY_COUNTRY = {
  CR: {
    administrative_area_level_2: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    sublocality: "subArea",
    locality: "city",
  },
  EC: {
    administrative_area_level_2: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    sublocality: "subArea",
    locality: "city",
  },
  CO: {
    administrative_area_level_2: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    sublocality: "subArea",
    locality: "city",
  },
  CL: {
    administrative_area_level_2: "city",
    administrative_area_level_3: "subArea",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
  },
  BR: {
    sublocality: "subArea",
    administrative_area_level_2: "city",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    country: "country",
  },
  AR: {
    administrative_area_level_1: "city",
    country: "country",
    postal_code: "postalCode",
    sublocality: "subArea",
  },
  MX: {
    locality: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    sublocality: "subArea",
  },
  UY: {
    locality: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    sublocality: "subArea",
  },
  PE: {
    administrative_area_level_2: "city",
    country: "country",
    administrative_area_level_1: "state",
    postal_code: "postalCode",
    locality: "subArea",
  },
};

export default (country, addressComponents) => {
  const map = MAP_BY_COUNTRY[country];
  return addressComponents.reduce((result, component) => {
    const propertyFrom = component.types.find(type => map[type]);
    const propertyTo = map[propertyFrom];
    return propertyTo
      ? { [propertyTo]: component.long_name, ...result } // Weird Stuff, to not override the previous properties
      : result;
  }, {});
};
