// Consent-gated Meta (Facebook) Pixel.
//
// Nothing from Meta is requested until the visitor clicks "Allow" in the
// cookie banner. The <noscript> image fallback is deliberately omitted
// because it cannot respect consent.

export const META_PIXEL_ID = "1671417901375551";
export const CONSENT_KEY = "eb_ad_cookies_consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "eb:open-cookie-settings";

export function getConsent() {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage unavailable (private mode etc.): the choice lasts this page view only.
  }
}

export function hasConsent() {
  return getConsent() === "granted";
}

let loaded = false;

// Injects the pixel script. Call only after consent is granted.
export function loadMetaPixel() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  if (!window.fbq) {
    const fbq = function (...args) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    };
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  // Client-side routing: page views are sent manually on route changes.
  window.fbq.disablePushState = true;
  window.fbq("set", "autoConfig", false, META_PIXEL_ID);
  window.fbq("init", META_PIXEL_ID);
  window.fbq("consent", "grant");
}

export function isMetaPixelLoaded() {
  return loaded;
}

export function trackPageView() {
  if (loaded && hasConsent() && window.fbq) window.fbq("track", "PageView");
}

export function trackLead() {
  if (loaded && hasConsent() && window.fbq) window.fbq("track", "Lead");
}

// Stops further sending and clears Meta's first-party cookies.
export function revokeMetaPixel() {
  if (loaded && window.fbq) window.fbq("consent", "revoke");
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of ["_fbp", "_fbc"]) {
    for (const domain of domains) {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
        (domain ? `; domain=${domain}` : "");
    }
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
