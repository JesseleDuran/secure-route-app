import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import * as PropTypes from "prop-types";
import styles from "./styles";

const withLoader = WrappedComponent => {
  class ComponentWithLoader extends Component {
    state = {
      loading: false,
    };

    load = () => this.setState({ loading: true });

    stop = () => this.setState({ loading: false });

    render = () => {
      const { classes } = this.props;
      const { loading } = this.state;
      return (
        <div className={loading ? classes.container : {}}>
          <div className={loading ? classes.root : classes.hidden}>
            <CircularProgress color="secondary" size={100} />
          </div>
          <WrappedComponent
            {...this.props}
            loader={{
              load: this.load,
              stop: this.stop,
            }}
          />
        </div>
      );
    };
  }

  ComponentWithLoader.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  return withStyles(styles)(ComponentWithLoader);
};

export default withLoader;
