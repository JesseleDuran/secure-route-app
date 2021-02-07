import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./TopBar.style";
import TopBar from "./TopBar";
import { countries, verticals, diagnosticMessages } from "./TopBar.constants";

export const loadRequirements = async () => ({
  countries,
  verticals,
  diagnosticMessages,
});

export default withStyles(styles)(TopBar);
