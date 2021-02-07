import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid/Grid";

class PageAlert extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    color: "black",
    title: null,
    message: null,
    children: null,
  };

  state = {};

  render() {
    const { classes, title, message, children, color = "black" } = this.props;

    return (
      <Grid
        container
        alignContent="center"
        alignItems="center"
        className={classNames(classes.container, classes[color])}
      >
        <InfoIcon className={classes.icon} />
        <Grid item xs={11} container alignContent="center">
          {title && <h3 className={classes.title}>{title}</h3>}
          {message ? <p className={classes.message}>{message}</p> : children}
        </Grid>
      </Grid>
    );
  }
}

export default PageAlert;
