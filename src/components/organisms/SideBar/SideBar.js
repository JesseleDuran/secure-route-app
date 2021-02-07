import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import RappiBar from "../../molecules/RappiBar";
import TextField from "../../atoms/TextField";
import PlaceField from "../PlaceField";
import SearchForm from "../SearchForm";
import StoresList from "../StoresList";
import {
  checkFullAvailable,
  checkOnlyViaSearch,
  checkClosed,
  checkUnavailable,
  checkUnavailableByPartner,
} from "../StoresList/StoresList.status";

const SideBar = ({
  classes,
  country,
  onChangeAddress,
  stores,
  selectedStore,
  onChangeStore,
  getLogoUri,
  onFilterStores,
  onSetUserID,
  treatment
}) => (
  <Grid container>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <SearchForm
        country={country}
        onChangeAddress={onChangeAddress}
        onFilterStores={onFilterStores}
        onSetUserID={onSetUserID}
        treatment={treatment}
      />
      <StoresList
        getLogoUri={getLogoUri}
        onChangeStore={onChangeStore}
        selectedStore={selectedStore}
        available={
          stores.length > 0
            ? stores.filter(
                store => checkFullAvailable(store) || checkOnlyViaSearch(store),
              )
            : []
        }
        notAvailable={
          stores.length > 0
            ? stores.filter(
                store =>
                  checkClosed(store) ||
                  checkUnavailable(store) ||
                  checkUnavailableByPartner(store),
              )
            : []
        }
      />
    </Drawer>
  </Grid>
);

SideBar.defaultProps = {
  stores: [],
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  stores: PropTypes.array,
  banks: PropTypes.array.isRequired,
  accountTypes: PropTypes.array.isRequired,
  bankAccountNumberName: PropTypes.string.isRequired,
  phonePrefixes: PropTypes.array.isRequired,
  additionalFields: PropTypes.array,
  alertItems: PropTypes.array.isRequired,
};

export default withStyles()(SideBar);
