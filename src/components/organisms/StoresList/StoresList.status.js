export const checkFullAvailable = store =>
  store.availability_status === 0 &&
  (store.is_enabled ? store.is_enabled : true) &&
  store.is_open;

export const checkOnlyViaSearch = store =>
  store.availability_status === 1 &&
  (store.is_enabled ? store.is_enabled : true) &&
  store.is_open;

export const checkClosed = store => !store.is_open;

export const checkUnavailable = store => store.availability_status > 2;

export const checkUnavailableByPartner = store =>
  store.is_enabled ? !store.is_enabled : false;
