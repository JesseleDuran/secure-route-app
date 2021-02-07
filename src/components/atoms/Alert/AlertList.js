import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class AlertList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    messages: PropTypes.array,
  };

  static defaultProps = {
    color: "blue",
    messages: [],
  };

  state = {};

  render() {
    const { classes, messages, color = "orange" } = this.props;

    return (
      <div className={classNames(classes.container, classes[color])}>
        {messages.map(message => (
          <p
            className={classes.message}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `✓  ${message}` }}
          />
        ))}
      </div>
    );
  }
}

export default AlertList;
