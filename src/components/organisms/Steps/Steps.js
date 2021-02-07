import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid/Grid";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import StepCard from "../../molecules/Card";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Steps = ({ classes, openSteps, steps, handleClose }) => (
  <Dialog
    fullScreen
    open={openSteps}
    onClose={handleClose}
    TransitionComponent={Transition}
  >
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <List className={classes.list}>
      {steps.map(step => [
        <ListItem button>
          <ListItemText
            primary={`De ${step.start_address} a ${step.end_address}`}
            secondary={`${step.distance}m - ${step.crimes.length} crímenes`}
          />
        </ListItem>,
        <Divider />,
      ])}
    </List>
  </Dialog>
);

Steps.propTypes = {
  classes: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  vertical: PropTypes.string.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeVertical: PropTypes.object.isRequired,
  verticals: PropTypes.array.isRequired,
  countries: PropTypes.array.isRequired,
};

export default Steps;
