import { translateKey } from "./translate";
import logEvent from "./EventLogger";

const getReasonByStatus = status => {
  switch (status) {
    case 401:
      return "errors.http.unauthorized";
    case 400:
      return "errors.http.badRequest";
    case 404:
      return "errors.http.notFound";
    case 406:
      return "errors.hasntCoverage";
    default:
      return "errors.http.unexpectedError";
  }
};

const getRequestIfPossible = errorResponse => {
  try {
    return JSON.parse(errorResponse.config.data);
  } catch (e) {
    return {};
  }
};

const notifyByError = (notifier, step) => error => {
  const {
    response = {
      status: -1,
    },
  } = error;
  const reason = getReasonByStatus(response.status);
  notifier.error(translateKey(reason));
  const request = getRequestIfPossible(response);
  logEvent("STEP_ERROR", { reason, response, step, request, error });
};

export default notifyByError;
