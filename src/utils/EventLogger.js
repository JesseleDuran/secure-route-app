import config from "../config";

const { amplitude, localStorage } = window;

export default (name, data) => {
  if (config.env !== "development") {
    const sessionId = localStorage.getItem("token") || null;
    amplitude.getInstance().logEvent(name, { ...data, sessionId });
  } else {
    // eslint-disable-next-line no-console
    console.log("SENDING EVENT ", name, data);
  }
};
