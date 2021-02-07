import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../Home";
import withLoader from "../../hocs/loader/withLoader";
import "../../theme/fonts.css";

const App = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // if (!isAuthenticated) {
  //   loginWithRedirect();
  //   return <h1>Redirecting to Login...</h1>;
  // }

  return (
   (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  );
};

App.propTypes = {};

export default withLoader(App);
