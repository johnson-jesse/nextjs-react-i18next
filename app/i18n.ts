import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

const isServer = typeof window === "undefined";
const serverUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    saveMissing: true,
    saveMissingTo: "current",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    backend: {
      loadPath: isServer
        ? `${serverUrl}/locales/{{lng}}/{{ns}}.json`
        : "/locales/{{lng}}/{{ns}}.json",
        addPath: "/i18n/missing/key/{{lng}}/{{ns}}"
    },
  });

export default i18n;
