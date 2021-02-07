import withStyles from "@material-ui/core/styles/withStyles";
import HomePage from "./HomePage";
import styles from "./HomePage.style";
import { modes } from "./HomePage.constants";

export const loadRequirements = async () => {
  const country = window.localStorage.getItem("countryCode") || "CO";
  return {
    modes,
    country,
  };
};

export default withStyles(styles)(HomePage);
