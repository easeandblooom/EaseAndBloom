import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import logo from "/E&BlogoPink.png";
import { openCookieSettings } from "../lib/metaPixel";
import { PRIVACY_POLICY_URL } from "../config/constants";

export default function Footer() {
  const location = useLocation();

  const handlePodcastClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("podcast");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <img 
                src={logo} 
                alt="Ease & Bloom Logo" 
                className="w-10 h-10 group-hover:scale-105 transition-transform"
              />
              <span className="text-white font-medium text-2xl tracking-tight">
                Ease &amp; Bloom
              </span>
            </Link>

            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-6">
              A safe space for women's health and empowerment.
            </p>

            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <svg
                className="w-4 h-4 text-pink-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:hello@easeandbloom.org" className="hover:underline">
                hello@easeandbloom.org
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/our-story"
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href={location.pathname === "/" ? "#podcast" : "/#podcast"}
                  onClick={handlePodcastClick}
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Podcast
                </a>
              </li>
              <li>
                <Link
                  to="/share-story"
                  className="text-slate-400 hover:text-white transition-colors block py-0.5"
                >
                  Share Your Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/_easeandbloom?s=21&t=ugcb_jYgY45NnGc5HyN1_g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 py-0.5"
                >
                  <FaXTwitter className="text-pink-500 w-4 h-4" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/easeandbloom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 py-0.5"
                >
                  <FaLinkedin className="text-pink-500 w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/share/BARfkQZx2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 py-0.5"
                >
                  <FaInstagram className="text-pink-500 w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/15H6CWb3tW/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 py-0.5"
                >
                  <FiFacebook className="text-pink-500 w-4 h-4" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
          <p>© 2026 Ease &amp; Bloom. A safe space for women's health and empowerment.</p>
          <div className="flex gap-6">
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-white transition-colors"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
