import React from "react";
import { Trans } from "react-i18next";
import i18n from "./i18n";

export default function translate(key) {
  return (
    <Trans ns={["defaultNamespace"]}>{(t, { i18n }) => i18n.t(key)}</Trans>
  );
}

export function translateKey(key, options) {
  return i18n.t(key, options);
}

export function translateKeyWithHtml(key) {
  return (
    <Trans
      i18nKey={key}
      components={{
        strong: <strong />,
        b: <b />,
        br: <br />,
      }}
    />
  );
}
