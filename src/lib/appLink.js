// Links to the web app carry ad-attribution parameters (fbclid, utm_*) from
// the visitor's landing URL, so Meta can attribute app sign-ups to adverts.
//
// The parameters are captured once when the site loads and kept in memory
// only (nothing is stored on the device), so they survive client-side
// navigation between pages of this site.

import { WEB_APP_URL } from "../config/constants";
import { trackLead } from "./metaPixel";

const ATTRIBUTION_PARAMS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
];

const landingParams = (() => {
  const captured = [];
  if (typeof window === "undefined") return captured;
  const search = new URLSearchParams(window.location.search);
  for (const key of ATTRIBUTION_PARAMS) {
    const value = search.get(key);
    if (value) captured.push([key, value]);
  }
  return captured;
})();

export function appLinkHref(base = WEB_APP_URL) {
  if (landingParams.length === 0) return base;
  try {
    const url = new URL(base);
    for (const [key, value] of landingParams) {
      if (!url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return base;
  }
}

// onClick handler for "Join" buttons: records a Lead (only if the visitor
// allowed the Meta cookie) and lets the link open normally.
export function onAppLinkClick() {
  trackLead();
}
