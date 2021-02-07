import React from "react";
import * as PropTypes from "prop-types";
import Iframe from "react-iframe";

const TermsBox = ({ classes, url, ...props }) => (
  <div className={classes.root}>
    <Iframe
      url={url}
      className={classes.iframe}
      scrolling
      allowFullScreen
      {...props}
    />
  </div>
);

TermsBox.defaultProps = {};

TermsBox.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default TermsBox;
