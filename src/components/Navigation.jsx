import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/E&BlogoPink.png";
import { WEB_APP_URL } from "../config/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on location change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handlePodcastClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("podcast");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getActiveLinkClass = (path) => {
    const active = isActive(path);
    if (active) {
      return isScrolled
        ? "text-pink-600 font-semibold relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-purple-600 after:rounded-full"
        : "text-white font-semibold relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full";
    }
    return isScrolled
      ? "text-gray-700 hover:text-pink-600 font-medium"
      : "text-white/90 hover:text-white font-medium";
  };

  const isHome = location.pathname === "/";
  const navBgClass = isScrolled || menuOpen || !isHome
    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 text-gray-900"
    : "bg-transparent text-white";

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <span>New on the Ease &amp; Bloom pod: honest talks with inspiring women.</span>
          <a
            href={isHome ? "#podcast" : "/#podcast"}
            onClick={handlePodcastClick}
            className="underline underline-offset-4 font-semibold hover:opacity-90 inline-flex items-center gap-1"
          >
            Listen now &rarr;
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${navBgClass}`}
        aria-label="Main"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
              <img
                src={logo}
                alt="Ease & Bloom Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform duration-300"
              />
              <span
                className={`font-semibold text-lg sm:text-xl transition-colors ${
                  isScrolled || menuOpen || !isHome ? "text-gray-900" : "text-white"
                }`}
              >
                Ease &amp; Bloom
              </span>
            </Link>

            {/* Desktop Navigation Links (Under 980px / lg they hide) */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/our-story"
                className={`${getActiveLinkClass("/our-story")} text-sm transition-all duration-200`}
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                className={`${getActiveLinkClass("/blog")} text-sm transition-all duration-200`}
              >
                Blog
              </Link>
              <a
                href={isHome ? "#podcast" : "/#podcast"}
                onClick={handlePodcastClick}
                className={`${
                  isScrolled || !isHome
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white/90 hover:text-white"
                } text-sm font-medium transition-all duration-200`}
              >
                Podcast
              </a>
              <Link
                to="/share-story"
                className={`${getActiveLinkClass("/share-story")} text-sm transition-all duration-200`}
              >
                Share Your Story
              </Link>

              {/* Join Our Community Button */}
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[42px] px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                  isScrolled || !isHome
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                Join Our Community
              </a>
            </div>

            {/* Mobile Menu Button (< 980px / lg) */}
            <button
              className={`lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                isScrolled || menuOpen || !isHome
                  ? "text-gray-800 bg-gray-100 hover:bg-gray-200"
                  : "text-white bg-white/10 hover:bg-white/20 border border-white/30"
              }`}
              onClick={handleMenuToggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (< 980px) */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl text-gray-900 animate-fade-in-up"
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/our-story"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-gray-800 hover:text-pink-600 border-b border-gray-100 flex items-center justify-between"
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-gray-800 hover:text-pink-600 border-b border-gray-100 flex items-center justify-between"
              >
                Blog
              </Link>
              <a
                href={isHome ? "#podcast" : "/#podcast"}
                onClick={handlePodcastClick}
                className="py-3 text-base font-medium text-gray-800 hover:text-pink-600 border-b border-gray-100 flex items-center justify-between"
              >
                Podcast
              </a>
              <Link
                to="/share-story"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-gray-800 hover:text-pink-600 border-b border-gray-100 flex items-center justify-between"
              >
                Share Your Story
              </Link>
              <div className="pt-4 pb-2">
                <a
                  href={WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full min-h-[46px] inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:shadow-lg transition-all"
                >
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
