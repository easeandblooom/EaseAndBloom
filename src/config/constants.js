// Configurable external links for the Ease & Bloom website
export const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL || "https://app.easeandbloom.org";
export const PRIVACY_POLICY_URL = `${WEB_APP_URL.replace(/\/$/, "")}/privacy`;
export const TERMS_URL = `${WEB_APP_URL.replace(/\/$/, "")}/terms`;

export const PODCAST_LINKS = {
  spotify: "https://open.spotify.com/show/77odHw77nUbir723tANWna?si=740d7ccc46a34785",
  apple: "https://podcasts.apple.com/us/podcast/the-easeandblooom-podcast/id6826600725",
  youtube: "https://youtu.be/rOKPDI4dY4M?si=BxRcwH-WBRqhD1lb",
};

export const PODCAST_URL = PODCAST_LINKS.spotify;
