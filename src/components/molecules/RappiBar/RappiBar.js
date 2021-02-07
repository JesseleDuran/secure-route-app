import React from "react";
import { AppBar } from "@material-ui/core";
import * as PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../../assets/images/logo.svg";

const RappiBar = ({ underLine, classes, children }) => (
  <AppBar
    color="secondary"
    position="sticky"
    className={underLine ? classes.AppBar : classes.NoUnderLine}
  >
    <Toolbar className={classes.Toolbar}>
      {/* <img src={logo} alt="logo" /> */}
      {children}
    </Toolbar>
  </AppBar>
);

RappiBar.defaultProps = {
  children: null,
  underLine: true,
};

RappiBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
  underLine: PropTypes.bool,
};

export default RappiBar;
