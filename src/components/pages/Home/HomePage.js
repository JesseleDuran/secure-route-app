import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Container } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid/Grid";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BeenhereOutlinedIcon from "@material-ui/icons/BeenhereOutlined";
import WarningOutlinedIcon from "@material-ui/icons/WarningOutlined";
import TabPanel from "@material-ui/lab/TabPanel";
import Steps from "../../organisms/Steps";
import TopBar from "../../organisms/TopBar";

const HomePage = ({
  map,
  topBar,
  vertical,
  country,
  origin,
  destination,
  mode,
  onChangeOrigin,
  onChangeDestination,
  onChangeMode,
  steps,
  openSteps,
  toggleSteps,
  durationDrive,
  durationWalk,
  classes,
  distance,
  handleOpenSteps,
  handleCloseSteps,
  totalCrimes,
  handleChangeTab,
  tabValue,
  handleOnClickChip,
  duration
}) => (
  <Container disableGutters maxWidth={false}>
    <TopBar
      vertical={vertical}
      country={country}
      origin={origin}
      destination={destination}
      mode={mode}
      onChangeOrigin={onChangeOrigin}
      onChangeDestination={onChangeDestination}
      onChangeMode={onChangeMode}
      handleOnClickChip={handleOnClickChip}
      durationDrive={durationDrive}
      durationWalk={durationWalk}
    />
    {steps && steps.length > 0 ? (
      <div className={classes.button}>
        {duration} min
        <span className={classes.distance}>
          {` (${distance}m) - ${totalCrimes} crímenes`}
        </span>
        <div style={{ paddingTop: 14 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FormatListBulletedIcon />}
            onClick={handleOpenSteps}
          >
            Pasos
          </Button>
        </div>
      </div>
    ) : null}
    <Tabs
      value={tabValue}
      onChange={handleChangeTab}
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable force tabs example"
    >
      <Tab icon={<BeenhereOutlinedIcon />} />
      <Tab icon={<WarningOutlinedIcon />} />
    </Tabs>

    {map ? map.render() : null}
    <Steps steps={steps} openSteps={openSteps} handleClose={handleCloseSteps} />
  </Container>
);

HomePage.propTypes = {
  form: PropTypes.object,
  onSend: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
};

HomePage.defaultProps = {
  form: null,
};

export default HomePage;
