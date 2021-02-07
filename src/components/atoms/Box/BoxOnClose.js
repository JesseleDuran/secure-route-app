import React from "react";
import * as PropTypes from "prop-types";
import Grow from "@material-ui/core/Grow";
import { Divider } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

const BoxOnClose = ({ classes, children, show, toggleOnClose, title }) => (
  <Grow in={show}>
    <Alert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={toggleOnClose}
          className={classes.icon}
        >
          <CloseIcon fontSize="25" />
        </IconButton>
      }
      icon={false}
      className={classes.root}
    >
      <AlertTitle>{title}</AlertTitle>
      <Divider />
      {children}
    </Alert>
  </Grow>
);

BoxOnClose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default BoxOnClose;
