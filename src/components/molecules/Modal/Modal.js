import React from "react";
import { Divider, Dialog } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

const Modal = ({
  title,
  subtitle,
  buttonText,
  image,
  classes,
  open,
  onClick,
  ...dialogProps
}) => (
  <Dialog className={classes.dialog} open={open} {...dialogProps}>
    {title ? (
      <div>
        <p className={classes.title}>{title}</p>
        <Divider className={classes.divider} />
      </div>
    ) : null}
    <p className={classes.paragraph}>{subtitle}</p>
    {image && (
      <div>
        <img alt="modal" className={classes.image} src={image} />
      </div>
    )}
    {buttonText && (
      <div className={classes.container}>
        <Button fullWidth onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    )}
  </Dialog>
);

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
  title: null,
  subtitle: null,
  buttonText: null,
  image: null,
  onClick: () => {},
};

export default Modal;
