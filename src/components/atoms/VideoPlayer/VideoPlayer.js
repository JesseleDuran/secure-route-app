import React from "react";
import * as PropTypes from "prop-types";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => (
  <ReactPlayer url={url} playing width="100%" height="100%" controls />
);

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoPlayer;
