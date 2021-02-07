const config = {
  API: {
    RESOLVE_COUNTRY_URL:
      process.env.REACT_APP_RESOLVE_COUNTRY_URL ||
      "https://v2.dev.rappi.com/api/resolve-country",
    BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  env: process.env.NODE_ENV,
  GOOGLE: {
    CAPTCHA: process.env.REACT_APP_GOOGLE_CAPTCHA_KEY,
    GTM_ID: process.env.REACT_APP_GTM_ID,
  },
  FALLBACK: process.env.REACT_APP_FALLBACK_URL,
  PARTNERS_PORTAL: process.env.REACT_APP_PARTNERS_PORTAL,
  KUSTOMER_KEY: process.env.REACT_APP_KUSTOMER_KEY,
  version: "0.0.1",
};

export default config;
