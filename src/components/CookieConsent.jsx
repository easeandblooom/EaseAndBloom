import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  getConsent,
  loadMetaPixel,
  revokeMetaPixel,
  setConsent,
  trackPageView,
} from "../lib/metaPixel";
import { PRIVACY_POLICY_URL } from "../config/constants";

// Cookie banner + consent-gated Meta Pixel loader. Must render inside the router.
export default function CookieConsent() {
  const location = useLocation();
  const [consent, setConsentState] = useState(getConsent);
  const [open, setOpen] = useState(() => getConsent() === null);
  const [showDetails, setShowDetails] = useState(false);

  // Load the pixel only once the visitor has said yes.
  useEffect(() => {
    if (consent === "granted") loadMetaPixel();
  }, [consent]);

  // Manual PageView on first load (after consent) and on every route change.
  useEffect(() => {
    if (consent === "granted") trackPageView();
  }, [consent, location.pathname]);

  // "Cookie settings" in the footer reopens the banner.
  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (value) => {
    if (value === "denied" && consent === "granted") revokeMetaPixel();
    setConsent(value);
    setConsentState(value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md z-[1000] rounded-2xl bg-white shadow-2xl border border-pink-100 p-5 text-left"
    >
      <p className="text-[15px] leading-relaxed text-gray-800">
        <span className="font-semibold text-purple-900">Help us reach more women? 🌸</span>{" "}
        With your OK, we use a Meta (Facebook) cookie to see which of our adverts bring people here.
      </p>

      {showDetails ? (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          If you allow it, Meta&apos;s pixel records which pages of this site you view and whether you
          click through to join the community, so we can tell which adverts work. It doesn&apos;t
          collect anything you type here. Say no and nothing from Meta loads. You can change your mind any time
          with &ldquo;Cookie settings&rdquo; at the bottom of every page.{" "}
          <a
            href={PRIVACY_POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pink-600 underline underline-offset-2 hover:text-pink-700"
          >
            Privacy Policy
          </a>
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="mt-2 text-sm font-medium text-pink-600 underline underline-offset-2 hover:text-pink-700"
        >
          What does this cookie do?
        </button>
      )}

      <div className="mt-4 flex flex-col-reverse sm:flex-row gap-2 sm:justify-end">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold text-purple-900 border border-purple-200 hover:bg-purple-50 transition-colors"
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="min-h-[44px] px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-md hover:shadow-lg transition-all"
        >
          Allow
        </button>
      </div>
    </div>
  );
}
