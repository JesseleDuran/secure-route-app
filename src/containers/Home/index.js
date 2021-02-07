import Home from "./Home";
import withLoader from "../../hocs/loader/withLoader";
import withNotifier from "../../hocs/notifications/withNotifier";

export default withNotifier(withLoader(Home));
