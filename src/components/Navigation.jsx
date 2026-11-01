import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/E&BlogoPink.png";
import { WEB_APP_URL } from "../config/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("podcast");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Solid background active when scrolled, mobile menu is open, or on interior pages
  const isSolid = isScrolled || menuOpen || !isHome;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isHome ? "-mb-[108px]" : ""
      } ${
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_#eef0f3]"
          : "bg-transparent"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-[13px] py-2 px-4 text-center font-medium">
        <div className="max-w-[1160px] mx-auto flex items-center justify-center gap-1.5 flex-wrap">
          <span>New on the Ease &amp; Bloom pod: honest talks with inspiring women.</span>
          <a
            href={isHome ? "#podcast" : "/#podcast"}
            onClick={handlePodcastClick}
            className="font-semibold underline underline-offset-4 hover:opacity-90 inline-flex items-center gap-1 cursor-pointer"
          >
            Listen now &rarr;
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full" aria-label="Main">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex items-center justify-between min-h-[68px]">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0">
            <img
              src={logo}
              alt="Ease & Bloom Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform duration-200"
            />
            <span
              className={`font-semibold text-lg sm:text-[18px] transition-colors ${
                isSolid ? "text-[#0f172a]" : "text-white"
              }`}
            >
              Ease &amp; Bloom
            </span>
          </Link>

          {/* Desktop Nav Links (Hidden under 980px) */}
          <div className="hidden min-[981px]:flex items-center gap-7 ml-auto mr-4">
            <Link
              to="/our-story"
              className={`text-[15px] font-medium transition-colors ${
                isSolid
                  ? "text-[#475569] hover:text-pink-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/blog"
              className={`text-[15px] font-medium transition-colors ${
                isSolid
                  ? "text-[#475569] hover:text-pink-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <a
              href={isHome ? "#podcast" : "/#podcast"}
              onClick={handlePodcastClick}
              className={`text-[15px] font-medium transition-colors cursor-pointer ${
                isSolid
                  ? "text-[#475569] hover:text-pink-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Podcast
            </a>
            <Link
              to="/share-story"
              className={`text-[15px] font-medium transition-colors ${
                isSolid
                  ? "text-[#475569] hover:text-pink-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Share Your Story
            </Link>
          </div>

          {/* Desktop Join Our Community Button (Hidden under 980px) */}
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden min-[981px]:inline-flex items-center justify-center min-h-[42px] px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md ${
              isSolid
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "bg-white text-[#0f172a] hover:bg-white/95"
            }`}
          >
            Join Our Community
          </a>

          {/* Mobile Menu Button (Shows under 980px) */}
          <button
            onClick={handleMenuToggle}
            className={`min-[981px]:hidden w-[46px] h-[46px] rounded-xl flex items-center justify-center transition-colors ${
              isSolid
                ? "border border-[#e2e8f0] bg-white text-[#0f172a]"
                : "border border-white/50 bg-white/10 text-white"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Under 980px) */}
        {menuOpen && (
          <div className="min-[981px]:hidden bg-white border-t border-[#eef0f3] shadow-xl text-[#0f172a] px-6 py-4 animate-fade-in-up">
            <div className="flex flex-col">
              <Link
                to="/our-story"
                onClick={() => setMenuOpen(false)}
                className="min-h-[50px] flex items-center font-medium text-[17px] border-b border-[#eef0f3] hover:text-pink-600"
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className="min-h-[50px] flex items-center font-medium text-[17px] border-b border-[#eef0f3] hover:text-pink-600"
              >
                Blog
              </Link>
              <a
                href={isHome ? "#podcast" : "/#podcast"}
                onClick={handlePodcastClick}
                className="min-h-[50px] flex items-center font-medium text-[17px] border-b border-[#eef0f3] hover:text-pink-600 cursor-pointer"
              >
                Podcast
              </a>
              <Link
                to="/share-story"
                onClick={() => setMenuOpen(false)}
                className="min-h-[50px] flex items-center font-medium text-[17px] border-b border-[#eef0f3] hover:text-pink-600"
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
