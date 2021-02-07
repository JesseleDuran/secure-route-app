import React from "react";
import * as PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";

const RappiAvatar = ({ classes, img }) => (
  <Avatar className={classes.avatar} alt="Remy Sharp" src={img} />
);

RappiAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default RappiAvatar;
