/* eslint-disable */
// External libs
import { get } from "lodash";
import requester from "../api/requester";
import isMobile from "./isMobile";

const KUSTOMER_URL = "api/rappi-kustomer/chat-hash-payload";

const getHash = email => requester().post(KUSTOMER_URL, { email });

const initialize = key => {
  /*(function(a, b, c) {
    a.Kustomer = c;
    c._q = [];
    c._i = [];
    c.init = function(a) {
      function b(a, b) {
        a[b] = function() {
          a._q.push([b].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }

      for (
        let d = "init clear identify track start describe on".split(" "), e = 0;
        e < d.length;
        e++
      )
        b(c, d[e]);
      c._i.push(a);
    };
    const e = b.createElement("script");
    e.type = "text/javascript";
    e.async = !0;
    e.src = "https://cdn.kustomerapp.com/cw/sdk.v1.1.min.js";
    const f = b.getElementsByTagName("script")[0];
    f.parentNode.insertBefore(e, f);
  })(window, window.document, window.Kustomer || {});
  window.Kustomer.init(key);*/
};

const close = () => {
  window.Kustomer.close();
};

const connect = async (email, icon = false) => {
  /* if (get(window.Kustomer, ["API", "customerId"])) {
    // If the kustomer chat is already initialized, return.
    window.Kustomer.clear();
  }

  window.Kustomer.start(
    {
      icon,
      lang: window.localStorage.getItem("i18nextLng").substring(0, 2),
      form: "5d718946114af200963a92c7",
    },
    () => {
      window.Kustomer.describeCustomer({ email });
      window.Kustomer.close();
    },
  );

  if (!email) {
    return;
  }

  const {
    data: { hash },
  } = await getHash(email);
  window.Kustomer.identify(hash);*/
};

const open = () => {
  try {
    if (!isMobile()) {
      window.Kustomer.open();
    }
  } catch (e) {
    console.log("ERROR OPENING CHAT!");
  }
};

const disconnect = () => {
  window.Kustomer.clear();
};

export default {
  initialize,
  close,
  connect,
  disconnect,
  open,
};
