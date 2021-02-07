import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffSharp";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import { BrowserView, MobileView } from "react-device-detect";
import FieldDescriptor from "../FieldDescriptor";
import { translateKey } from "../../../utils/translate";

const MAX_FILE_SIZE = 2 * 1000 * 1000; // MAX 2 MB :D
const ALLOWED_EXTENSIONS = [".png", ".jpg", ".pdf", ".jpeg"];

class FileInput extends Component {
  state = {
    file: null,
    filePath: "",
    progress: null,
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { file } = this.state;
    if (file === null && nextProps.value) {
      const index = nextProps.value.lastIndexOf("/") + 1;
      this.setState({
        file: {
          size: 2 * 1024 * 1024,
          name: nextProps.value.substring(index),
        },
        filePath: nextProps.value,
        progress: 100,
      });
      return true;
    }

    if (nextState.file == null && file != null) {
      return true;
    }
    if (nextProps.disabled !== this.props.disabled) {
      return true;
    }

    return !!nextState.file;
  };

  onFiles = files => {
    const file = files[0];
    if (!file) return;
    const extension = `.${file.name.split(".").pop()}`.toLowerCase();
    if (file.size > MAX_FILE_SIZE || !ALLOWED_EXTENSIONS.includes(extension)) {
      this.props.onError(file);
    } else {
      this.setState({ file: files[0], filePath: file, progress: 0 });
      this.props.onChange(
        { name: this.props.name, file: files[0] },
        {
          updateProgress: this.progressUpdater,
          removeFile: this.removeFile,
        },
      );
    }
  };

  removeFile = () => {
    this.setState({ file: null, filePath: null, progress: null }, () =>
      this.props.onChange(
        { name: this.props.name, file: null },
        {
          updateProgress: () => {},
          removeFile: this.removeFile,
        },
      ),
    );
  };

  progressUpdater = progress => this.setState({ progress });

  toKiloBytes = size => size / 1024;

  renderFileDropZone = () => {
    const { filePath } = this.state;
    const { classes, name, accept, tooltip, disabled } = this.props;
    const rootClass = classnames(
      classes.dropzone,
      disabled ? classes.disabled : "",
    );

    return (
      <Dropzone onDrop={this.onFiles} disabled={disabled}>
        {dropManager => (
          <Grid
            container
            justify="center"
            alignContent="center"
            {...dropManager.getRootProps()}
            className={rootClass}
          >
            <Grid item sm={12} md={11} container>
              <input
                type="file"
                name={name}
                defaultValue={filePath}
                className={classes.file}
                disabled={disabled}
                accept={accept}
                {...dropManager.getInputProps()}
              />
              <Grid container justify="center">
                <BrowserView>
                  <span className={classes.title}>
                    {translateKey("fileInput.dragHereOr")}
                    <strong className={classes.button}>
                      {translateKey("fileInput.select")}
                    </strong>
                  </span>
                </BrowserView>
                <MobileView>
                  <span className={classes.title}>
                    {translateKey("fileInput.press")}
                    <strong className={classes.button}>
                      {translateKey("fileInput.here")}
                    </strong>
                    {translateKey("fileInput.toAttach")}
                  </span>
                </MobileView>
              </Grid>
              <Grid container justify="center">
                <span className={classes.subtitle}>
                  {translateKey("fileInput.lessThan2Mb")}
                </span>
              </Grid>
            </Grid>
            <Grid item md={1} className={classes.iconContainer}>
              <Tooltip
                arrow
                title={
                  tooltip ||
                  `${translateKey(
                    "fileInput.fileFormat",
                  )} ${accept}. ${translateKey("fileInput.lessThan2Mb")}`
                }
                classes={{
                  tooltip: classes.tooltip,
                  arrow: classes.arrow,
                }}
                placement="bottom-end"
              >
                <InfoIcon className={classes.infoIcon} />
              </Tooltip>
            </Grid>
          </Grid>
        )}
      </Dropzone>
    );
  };

  renderFileLoaded = () => {
    const { classes, disabled } = this.props;
    const { file } = this.state;
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        className={classnames(
          classes.fileLoaded,
          disabled ? classes.disabled : "",
        )}
        data-test="file-loaded"
      >
        <Grid item xs={2} container justify="center" alignContent="center">
          <InsertDriveFileIcon className={classes.fileIcon} />
        </Grid>
        <Grid item xs={8}>
          <span className={classes.fileName}>{file.name}</span>
          <span className={classes.fileSize}>
            {`${(file.size / 1024).toFixed(2)} KB`}
          </span>
        </Grid>
        <Grid item xs={2} container justify="center" alignContent="center">
          <HighlightOffTwoToneIcon
            data-test="remove-file"
            className={classes.removeIcon}
            onClick={this.removeFile}
          />
        </Grid>
      </Grid>
    );
  };

  renderFileLoading = () => {
    const { classes } = this.props;
    const { file, progress } = this.state;
    return (
      <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.fileLoading}
      >
        <Grid item xs={12}>
          <LinearProgress
            variant="determinate"
            value={progress}
            className={classes.progressBar}
            data-test="file-upload-progress"
          />
          <span className={classes.fileProgressText}>
            {`${(this.toKiloBytes(file.size) * (progress / 100)).toFixed(
              2,
            )} KB ${translateKey("fileInput.of")} ${this.toKiloBytes(
              file.size,
            ).toFixed(2)} KB (${progress}% ${translateKey(
              "fileInput.completed",
            )})`}
          </span>
        </Grid>
      </Grid>
    );
  };

  renderByCurrentState = () => {
    const { file, progress } = this.state;
    if (!file) return this.renderFileDropZone();
    return progress === 100
      ? this.renderFileLoaded()
      : this.renderFileLoading();
  };

  render() {
    const { name, classes, placeholder } = this.props;
    return (
      <>
        <FieldDescriptor title={placeholder} />
        <Grid container className={classes.root} data-test={name}>
          {this.renderByCurrentState()}
        </Grid>
      </>
    );
  }
}

FileInput.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

FileInput.defaultProps = {
  error: null,
  tooltip: null,
  value: null,
  disabled: false,
};

export default FileInput;
