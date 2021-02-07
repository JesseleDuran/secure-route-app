/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
import React from "react";
import * as PropTypes from "prop-types";
import { Divider } from "@material-ui/core/";
import Radio from "@material-ui/core/Radio";
import classNames from "classnames";

const ShippingBox = ({
  classes,
  title,
  text,
  comission,
  handleChange,
  rappi,
  active,
  disabled,
}) => (
  <div
    className={classNames(classes.root, {
      [classes.rappi]: rappi && active,
      [classes.default]: !rappi && active,
    })}
    onClick={disabled ? null : handleChange}
    style={disabled ? { cursor: "not-allowed" } : null}
  >
    <div className={classes.titleContainer}>
      <span className={classes.title}>{title}</span>
      <Radio
        disabled={disabled}
        checked={active}
        color="default"
        onChange={handleChange}
        classes={{
          checked: classes.checked,
        }}
      />
    </div>
    <Divider />
    <div className={classes.content}>
      <p>{text}</p>
      <p className={classes.comission}>{comission}</p>
    </div>
  </div>
);

ShippingBox.defaultProps = {
  rappi: false,
  active: false,
  disabled: false,
};

ShippingBox.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comission: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  rappi: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ShippingBox;
