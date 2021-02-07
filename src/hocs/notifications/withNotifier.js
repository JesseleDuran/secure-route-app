import PropTypes from "prop-types";
import React, { Component } from "react";
import { withSnackbar } from "notistack";

const withNotifier = WrappedComponent => {
  @withSnackbar
  class ComponentWithNotifier extends Component {
    initialState = {
      messages: [],
    };

    static propTypes = {
      enqueueSnackbar: PropTypes.func.isRequired,
    };

    state = {
      ...this.initialState,
    };

    successNotification = snack =>
      this.props.enqueueSnackbar(snack, {
        variant: "success",
      });

    infoNotification = snack =>
      this.props.enqueueSnackbar(snack, {
        variant: "info",
      });

    errorNotification = (snack, props) =>
      this.props.enqueueSnackbar(snack, {
        variant: "error",
        ...props,
      });

    warningNotification = snack =>
      this.props.enqueueSnackbar(snack, {
        variant: "warning",
      });

    render = () => (
      <div>
        <WrappedComponent
          {...this.props}
          notifier={{
            success: this.successNotification,
            info: this.infoNotification,
            error: this.errorNotification,
            warning: this.warningNotification,
          }}
        />
      </div>
    );
  }

  return ComponentWithNotifier;
};

export default withNotifier;
