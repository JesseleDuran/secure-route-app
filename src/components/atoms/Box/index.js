import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Box.style";
import Box from "./Box";
import onClose from "./BoxOnClose";
import onCloseStyles from "./BoxOnClose.style";

export default withStyles(styles)(Box);

export const BoxOnClose = withStyles(onCloseStyles)(onClose);
