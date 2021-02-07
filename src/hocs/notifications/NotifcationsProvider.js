import React from "react";
import PropTypes from "prop-types";
import { SnackbarProvider } from "notistack";

import withStyles from "@material-ui/core/styles/withStyles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  variantSuccess: { backgroundColor: theme.palette.success.main },
  variantError: { backgroundColor: theme.palette.error.main },
  variantWarning: { backgroundColor: theme.palette.warning.main },
  variantInfo: { backgroundColor: theme.palette.info.main },
  snackMessage: {
    "& svg": {
      opacity: "0.9",
      marginRight: "20px",
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "50vh",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "40vh",
    },
  },
  snackRoot: {
    fontFamily: theme.typography.fontFamily.light,
  },
});

const iconVariant = {
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
};

const NotifcationsProvider = ({ classes, ...props }) => (
  <SnackbarProvider
    iconVariant={iconVariant}
    autoHideDuration={20000}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    action={
      <IconButton key="close" aria-label="Close" color="inherit">
        <CloseIcon />
      </IconButton>
    }
    classes={{
      variantSuccess: classes.variantSuccess,
      variantError: classes.variantError,
      variantWarning: classes.variantWarning,
      variantInfo: classes.variantInfo,
    }}
    ContentProps={{
      classes: {
        root: classes.snackRoot,
        message: classes.snackMessage,
      },
    }}
    {...props}
  />
);

NotifcationsProvider.propTypes = {
  classes: PropTypes.object,
};

NotifcationsProvider.defaultProps = {
  classes: null,
};

export default withStyles(styles)(NotifcationsProvider);
