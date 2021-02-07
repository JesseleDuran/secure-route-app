import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import es from "../locales/es.json";
import pt from "../locales/pt.json";

const options = {
  fallbackLng: "es",
  debug: false,
  resources: {
    en: {
      translation: es,
    },
    es: {
      translation: es,
    },
    pt: {
      translation: pt,
    },
  },
  detection: {
    order: [
      "navigator",
      "localStorage",
      "cookie",
      "querystring",
      "htmlTag",
      "path",
      "subdomain",
    ],
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
