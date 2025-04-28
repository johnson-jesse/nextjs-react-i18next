'use client'

import { PropsWithChildren } from "react";
import { I18nextProvider as Provider } from "react-i18next";
import i18n from "./i18n";

export function I18nextProvider(props: PropsWithChildren) {
  return <Provider i18n={i18n}>{props.children}</Provider>;
}
