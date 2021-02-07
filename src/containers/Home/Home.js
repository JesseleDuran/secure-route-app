import React, { Component } from "react";
import { titleCase } from "../../utils/functions";
import getDirection from "../../api/directions";
import notifyByError from "../../utils/notifyByError";
import HomePage, { loadRequirements } from "../../components/pages/Home";
import map from "../Map";

const defaultState = {
  origin: {
    lat: 0,
    lng: 0,
    value: "",
  },
  destination: {
    lat: 0,
    lng: 0,
    value: "",
  },
  mode: 1,
  openSteps: false,
  duration: 0,
  distance: 0,
  steps: [],
  totalCrimes: 0,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requirements: {},
      ...defaultState,
    };
  }

  componentWillMount() {
    const { loader, notifier } = this.props;
    loader.load();
    this.load()
      .catch(notifyByError(notifier, -1))
      .finally(loader.stop);
  }

  load = () =>
    loadRequirements().then(requirements => {
      this.setState({ requirements });
    });

  resetState = () =>
    this.setState(prevState => {
      const { requirements } = prevState;
      return { ...defaultState, requirements };
    });

  onChangeOrigin = origin => {
    this.setState({ origin });
    const { destination } = this.state;
    if (destination.lat !== 0) {
      this.onGetDirection();
    }
  };

  onChangeDestination = destination => {
    this.setState({ destination });
    const { origin } = this.state;
    if (origin.lat !== 0) {
      this.onGetDirection();
    }
  };

  onChangeMode = mode => {
    this.setState({ mode });
  };

  handleOpenSteps = () => {
    this.setState({
      ...this.state,
      openSteps: true,
    });
  };

  handleCloseSteps = () => {
    this.setState({
      ...this.state,
      openSteps: false,
    });
  };

  onGetDirection = async () => {
    const { notifier, loader } = this.props;
    try {
      loader.load();
      const { origin, destination, mode } = this.state;
      await getDirection(origin, destination, mode).then(response => {
        const result = response.routes[0];
        const duration = result.duration_driving / 60;
        map.setRoute(result.polyline);
        map.setOrigin(origin.lat, origin.lng);
        map.setDestination(destination.lat, destination.lng);
        map.setDuration(duration);
        this.setState({
          ...this.state,
          distance: result.distance,
          steps: result.steps,
          totalCrimes: result.total_crimes,
          duration,
        });
      });
    } catch (e) {
      notifier.error(e.message);
    } finally {
      loader.stop();
    }
  };

  render() {
    const {
      requirements,
      origin,
      destination,
      mode,
      openSteps,
      steps,
      duration,
      distance,
      totalCrimes
    } = this.state;
    return (
      <HomePage
        map={map}
        totalCrimes={totalCrimes}
        distance={distance}
        openSteps={openSteps}
        duration={duration}
        steps={steps}
        handleCloseSteps={this.handleCloseSteps}
        handleOpenSteps={this.handleOpenSteps}
        origin={origin}
        destination={destination}
        mode={mode}
        country={requirements.country}
        onChangeOrigin={this.onChangeOrigin}
        onChangeDestination={this.onChangeDestination}
        onChangeMode={this.onChangeMode}
      />
    );
  }
}

Home.propTypes = {};

export default Home;
