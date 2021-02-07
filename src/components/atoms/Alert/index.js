import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Alert.style";
import Alert from "./Alert";
import List from "./AlertList";
import Page from "./PageAlert";

export default withStyles(styles)(Alert);

export const AlertList = withStyles(styles)(List);

export const PageAlert = withStyles(styles)(Page);
