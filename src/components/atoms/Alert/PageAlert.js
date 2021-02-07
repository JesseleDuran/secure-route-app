import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";

class PageAlert extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
  };

  static defaultProps = {
    color: "blue",
    title: null,
    message: null,
  };

  state = {};

  render() {
    const { classes, title, message, color = "orange" } = this.props;

    return (
      <div className={classNames(classes.container, classes[color])}>
        {title && <h3 className={classes.title}>{title}</h3>}
        <Grid container justify="center">
          <Grid item xs={12} lg={11} container justify="center">
            <Grid item xs={12} sm={10} lg={9}>
              <p
                className={classes.message}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: message }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PageAlert;
