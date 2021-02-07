import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Steps.style";
import Steps from "./Steps";
import { countries, verticals, diagnosticMessages } from "./Steps.constants";

export const loadRequirements = async () => ({
  countries,
  verticals,
  diagnosticMessages,
});

export default withStyles(styles)(Steps);
