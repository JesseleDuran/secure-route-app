import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Accordion from "../../atoms/Accordion";
import List from "../../molecules/List";
import Card from "../../molecules/Card";
import {
  checkFullAvailable,
  checkOnlyViaSearch,
  checkClosed,
  checkUnavailable,
  checkUnavailableByPartner,
} from "./StoresList.status";

const getChipFromStore = store => {
  if (checkFullAvailable(store)) {
    return {
      label: "Full available",
      color: "green",
    };
  }
  if (checkOnlyViaSearch(store)) {
    return {
      label: "Partial availability",
      color: "yellow",
    };
  }
  if (checkClosed(store)) {
    return {
      label: "Closed",
      color: "red",
    };
  }
  if (checkUnavailable(store)) {
    return {
      label: "Unvailable",
      color: "red",
    };
  }
  if (checkUnavailableByPartner(store)) {
    return {
      label: "Unavailable - Partner",
      color: "red",
    };
  }
};

const renderCard = getLogoUri => store => (
  <Card
    avatar={getLogoUri(store.logo)}
    title={store.name}
    properties={{
      "Store ID": store.store_id,
      "Polygon Size": store.size,
      "Delivery Fare": `$${store.shipping_cost}`,
    }}
    chip={getChipFromStore(store)}
  />
);

const StoresList = ({
  values = {},
  classes,
  available,
  notAvailable,
  selectedStore,
  onChangeStore,
  getLogoUri,
}) => {
  const full = available.filter(store => checkFullAvailable(store));
  const partial = available.filter(store => checkOnlyViaSearch(store));
  return (
    <div className={classes.base}>
      {available.length > 0 ? (
        <Grid className={classes.metadata}>
          <Grid item className={classes.title}>
            {`${available.length} Tiendas Disponibles`}
          </Grid>
          <Grid item>{`${full.length} Full Available`}</Grid>
          <Grid item>{`${partial.length} Available Only via Search`}</Grid>
        </Grid>
      ) : null}

      <Accordion
        title="Disponibles"
        secondaryHeader={available ? `${available.length} Tiendas` : ""}
      >
        <List
          renderItem={renderCard(getLogoUri)}
          items={available}
          selected={selectedStore}
          onSelect={onChangeStore}
        />
      </Accordion>
      <Accordion
        title="No Disponibles"
        secondaryHeader={notAvailable ? `${notAvailable.length} Tiendas` : ""}
      >
        <List
          renderItem={renderCard(getLogoUri)}
          items={notAvailable}
          selected={selectedStore}
          onSelect={onChangeStore}
        />
      </Accordion>
    </div>
  );
};

StoresList.defaultProps = {
  additionalFields: [],
};

StoresList.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  civilTypes: PropTypes.array.isRequired,
  banks: PropTypes.array.isRequired,
  accountTypes: PropTypes.array.isRequired,
  bankAccountNumberName: PropTypes.string.isRequired,
  phonePrefixes: PropTypes.array.isRequired,
  additionalFields: PropTypes.array,
  alertItems: PropTypes.array.isRequired,
};

export default withStyles()(StoresList);
