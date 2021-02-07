import withStyles from "@material-ui/core/styles/withStyles";
import CombinedField from "./CombinedField";
import styles from "./CombinedField.style";
import lgStyles from "./CombinedFieldLg.style";

export const LgCombinedField = withStyles(lgStyles)(CombinedField);
export default withStyles(styles)(CombinedField);
