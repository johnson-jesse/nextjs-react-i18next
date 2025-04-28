'use client'

import { useTranslation } from "react-i18next";

export function TranslatedComponent() {
  const { t } = useTranslation("translation", { lng: 'de', keyPrefix: "ns3" });
  const dynamic = "deeply.nested.key";
  return t(`very.${dynamic}`);
}
