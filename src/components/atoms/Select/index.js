import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Select.style";
import lgStyles from "./SelectLg.style";
import Select from "./Select";
import Multiple from "./MultipleSelect";

export default withStyles(styles)(Select);
export const LgSelect = withStyles(lgStyles)(Select);

export const MultipleSelect = withStyles(styles)(Multiple);
export const LgMultipleSelect = withStyles(lgStyles)(Multiple);
