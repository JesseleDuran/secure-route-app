import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { pdfjs } from "react-pdf";
import { MuiThemeProvider } from "@material-ui/core/styles";
import i18n from "./utils/i18n";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import theme from "./theme";
import store from "./store";
import NotifcationsProvider from "./hocs/notifications/NotifcationsProvider";
import Auth0Provider from "./providers/auth/Auth0Provider";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <NotifcationsProvider>
          <Auth0Provider>
            <App />
          </Auth0Provider>
        </NotifcationsProvider>
      </I18nextProvider>
    </MuiThemeProvider>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById("root"),
);
registerServiceWorker();
