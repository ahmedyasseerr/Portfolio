import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="navbar"
      className="w-full px-6 sm:px-10 md:px-16 py-5 flex items-center justify-between z-40 sticky top-0 bg-[#07081E]/95 backdrop-blur-sm border-b border-[#1E2346]"
    >
      {/* Brand Identity */}
      <a
        href="#home"
        id="nav-brand"
        className="text-white font-extrabold tracking-wider text-base md:text-lg flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
      >
        <span className="w-2.5 h-2.5 bg-[#FBBF24] inline-block"></span>
        <span className="tracking-tight">AHMED YASSER</span>
        <span className="text-xs font-mono text-[#FBBF24] border border-[#333A6B] px-1.5 py-0.5 ml-1 hidden sm:inline-block">
          DATA ANALYST
        </span>
      </a>

      {/* Desktop Navigation Links (matching screenshot style) */}
      <nav
        id="main-nav"
        aria-label="Main Navigation"
        className="hidden md:flex items-center gap-7 lg:gap-9 text-white font-semibold text-[15px]"
      >
        <a
          href="#home"
          id="nav-link-home"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-[#FBBF24]"
        >
          Home
        </a>
        <a
          href="#about-section"
          id="nav-link-about"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-white"
        >
          About Me
        </a>
        <a
          href="#skills-section"
          id="nav-link-skills"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-white"
        >
          Skill
        </a>
        <a
          href="#background-section"
          id="nav-link-background"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-white"
        >
          Background
        </a>
        <a
          href="#projects-section"
          id="nav-link-projects"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-white"
        >
          Projects
        </a>
        <a
          href="#contact-section"
          id="nav-link-contact"
          className="hover:text-[#FBBF24] transition-colors cursor-pointer text-white"
        >
          Contact
        </a>

        {/* GitHub / LinkedIn quick buttons */}
        <div className="flex items-center gap-2 pl-3 border-l border-[#232952]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            className="text-xs font-mono border border-[#2C3360] hover:border-[#FBBF24] text-white hover:text-[#FBBF24] px-2.5 py-1 transition-colors"
          >
            GITHUB ↗
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            className="text-xs font-mono border border-[#2C3360] hover:border-[#FBBF24] text-[#FBBF24] px-2.5 py-1 transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        id="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white hover:text-[#FBBF24] p-1 font-mono text-sm border border-[#232952] px-2"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? 'CLOSE ✕' : 'MENU ☰'}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute top-full left-0 w-full bg-[#07081E] border-b border-[#232952] p-6 flex flex-col gap-4 md:hidden text-left"
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FBBF24] font-bold text-lg"
          >
            Home
          </a>
          <a
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] font-bold text-lg"
          >
            About Me
          </a>
          <a
            href="#skills-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] font-bold text-lg"
          >
            Skill
          </a>
          <a
            href="#background-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] font-bold text-lg"
          >
            Background &amp; Education
          </a>
          <a
            href="#projects-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] font-bold text-lg"
          >
            Projects (Case Studies)
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] font-bold text-lg"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-[#232952] flex gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono border border-[#2C3360] text-white px-3 py-1.5"
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono border border-[#FBBF24] text-[#FBBF24] px-3 py-1.5"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
