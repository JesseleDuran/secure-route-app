import React from "react";
import Grid from "@material-ui/core/Grid";
import * as PropTypes from "prop-types";
import { Divider } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import InfoIcon from "@material-ui/icons/Info";

const getGridSize = (info, link) => {
  if (info) return 11;
  if (link) return 10;
  return 12;
};

const FormSectionTitle = ({ title, classes, info, link, ...props }) => {
  const { tooltip, arrow } = classes;

  return (
    <Grid container className={classes.root} {...props}>
      <Grid item xs={getGridSize(info, link)} className={classes.title}>
        <span>{title}</span>
      </Grid>
      {!link && info && (
        <Grid
          container
          item
          xs={1}
          justify="flex-end"
          className={classes.componentContainer}
        >
          <Tooltip
            title={info}
            aria-label={info}
            classes={{ tooltip, arrow }}
            arrow
            placement="bottom-end"
          >
            <InfoIcon className={classes.icon} />
          </Tooltip>
        </Grid>
      )}
      {link && (
        <Grid
          container
          item
          xs={2}
          justify="flex-end"
          className={classes.componentContainer}
        >
          <a href={link.url} download className={classes.link}>
            {link.label}
          </a>
        </Grid>
      )}
      <Divider className={classes.divider} />
    </Grid>
  );
};

FormSectionTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  props: PropTypes.object,
  link: PropTypes.object,
};

FormSectionTitle.defaultProps = {
  info: null,
  props: {},
  link: null,
};

export default FormSectionTitle;
