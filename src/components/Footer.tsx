import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact-section"
      className="w-full border-t border-[#1E2346] bg-[#050616] py-14 px-6 sm:px-10 md:px-16 text-left"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Contact Teaser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#1E2346] items-start">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-[#FBBF24] uppercase tracking-wider font-bold">
              // LET'S CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-3 tracking-tight">
              Ready to turn raw data into strategic advantage?
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-xl leading-relaxed">
              Open to Data Analyst opportunities, analytics consulting, Power BI dashboard architecture, and automated data engineering initiatives.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-3">
            <div className="font-mono text-xs text-[#9CA3AF]">DIRECT INBOX:</div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="footer-mailto-btn"
                className="border-2 border-[#FBBF24] bg-[#FBBF24] text-[#07081E] hover:bg-transparent hover:text-[#FBBF24] font-mono text-xs sm:text-sm uppercase font-bold px-4 py-2.5 transition-all"
              >
                EMAIL: {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                id="footer-copy-email-btn"
                onClick={handleCopyEmail}
                className="border border-[#2C3360] bg-[#0E1231] hover:border-[#FBBF24] text-white hover:text-[#FBBF24] font-mono text-xs uppercase px-3 py-2.5 transition-colors"
                title="Copy email address"
              >
                {copied ? 'COPIED ✓' : 'COPY 📋'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Left-Aligned Links as required */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-left">
          {/* Main Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              className="text-white hover:text-[#FBBF24] transition-colors flex items-center gap-1.5 font-bold"
            >
              <span>GITHUB</span>
              <span className="text-[#FBBF24]">↗</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="text-white hover:text-[#FBBF24] transition-colors flex items-center gap-1.5 font-bold"
            >
              <span>LINKEDIN</span>
              <span className="text-[#FBBF24]">↗</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email"
              className="text-white hover:text-[#FBBF24] transition-colors flex items-center gap-1.5 font-bold"
            >
              <span>EMAIL: {PERSONAL_INFO.email}</span>
              <span className="text-[#FBBF24]">↗</span>
            </a>
          </div>

          {/* Institutional Stamp & Rights */}
          <div className="text-[#6B7280] text-left">
            <span>{PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}</span> // {PERSONAL_INFO.university} // DEPI Scholar
          </div>
        </div>
      </div>
    </footer>
  );
};
