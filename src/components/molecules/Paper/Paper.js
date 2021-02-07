import React from "react";
import * as PropTypes from "prop-types";
import { Divider } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import Box from "../../atoms/Box";

const Paper = ({ classes, children, title, subtitle, center, floating }) => (
  <div className={classNames(classes.root, { [classes.floating]: floating })}>
    <div
      className={classNames(classes.titleContainer, {
        [classes.centeredTitle]: center,
        [classes.withSubtitle]: subtitle,
      })}
    >
      <Typography className={classes.subtitle}>{subtitle}</Typography>
      <Typography className={classes.title}>{title}</Typography>
    </div>
    <Divider />
    <Box>{children}</Box>
  </div>
);

Paper.defaultProps = {
  subtitle: null,
  center: false,
  floating: false,
};

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
  floating: PropTypes.bool,
};

export default Paper;
