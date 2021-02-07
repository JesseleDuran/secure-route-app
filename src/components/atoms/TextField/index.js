import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "./TextField";
import styles from "./TextField.style";
import lgStyles from "./TextFieldLg.style";

export const LgTextField = withStyles(lgStyles)(TextField);
export default withStyles(styles)(TextField);
