import React from "react";
import { Auth0Provider as Auth0 } from "@auth0/auth0-react";

const Auth0Provider = ({ children }) => (
  <Auth0
    domain="polygon-pricing.us.auth0.com"
    clientId="OuzDcbQlXlgoIa31ZaSCBumijJxgha32"
    redirectUri={window.location.origin}
  >
    {children}
  </Auth0>
);

export default Auth0Provider;
