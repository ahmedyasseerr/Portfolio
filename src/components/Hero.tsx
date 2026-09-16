import React, { useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-6 sm:pt-10 md:pt-14 pb-14 min-h-[calc(100vh-80px)] flex flex-col justify-between relative text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* LEFT COLUMN: Typographic Identity (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Top Badge: DATA ANALYST PORTFOLIO with exact yellow rounded outline */}
          <div
            id="hero-badge"
            className="inline-flex items-center border-[2.5px] border-[#FBBF24] rounded-2xl px-5 py-2 mb-6 sm:mb-8 bg-transparent"
          >
            <span className="text-[#FBBF24] font-black text-sm sm:text-base md:text-[17px] tracking-wider mr-2 uppercase">
              DATA ANALYST
            </span>
            <span className="text-white font-extrabold text-sm sm:text-base md:text-[17px] tracking-wider uppercase">
              PORTFOLIO
            </span>
          </div>

          {/* Giant Stacked Name H1 matching screenshot composition */}
          <h1
            id="hero-title"
            className="font-extrabold tracking-tight leading-[1.02] text-left select-none"
          >
            <span className="block text-white text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black">
              {PERSONAL_INFO.firstName}
            </span>
            <span className="block text-[#FBBF24] text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black my-1 sm:my-2">
              {PERSONAL_INFO.lastName}
            </span>
          </h1>

          {/* Signature Tagline with yellow highlighted keywords */}
          <p
            id="hero-tagline"
            className="text-xl sm:text-2xl md:text-[28px] font-normal text-white mt-6 sm:mt-8 tracking-wide text-left max-w-xl leading-snug"
          >
            I help people finding <span className="text-[#FBBF24] font-bold">insights</span> through{' '}
            <span className="text-[#FBBF24] font-bold">data</span>
          </p>

          {/* Detailed background context */}
          <p
            id="hero-bio"
            className="text-sm sm:text-base text-[#9CA3AF] mt-4 max-w-xl leading-relaxed text-left"
          >
            Information Systems student at <span className="text-white font-medium">Beni Suef University</span> and Data Analysis Track Scholar at the <span className="text-white font-medium">Digital Egypt Pioneers Initiative (DEPI)</span>. Specializing in high-volume transaction analytics (2M+ rows), Python data wrangling, advanced DAX modeling in Power BI, and Selenium automation.
          </p>

          {/* Key Tech Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="border border-[#2C3360] bg-[#0E1231] text-[#FBBF24] px-3 py-1 font-mono text-xs font-semibold">
              PYTHON (Pandas, NumPy)
            </span>
            <span className="border border-[#2C3360] bg-[#0E1231] text-[#9CA3AF] px-3 py-1 font-mono text-xs font-medium">
              SQL &amp; Relational Databases
            </span>
            <span className="border border-[#2C3360] bg-[#0E1231] text-[#FBBF24] px-3 py-1 font-mono text-xs font-semibold">
              POWER BI &amp; DAX
            </span>
            <span className="border border-[#2C3360] bg-[#0E1231] text-[#9CA3AF] px-3 py-1 font-mono text-xs font-medium">
              EXCEL VBA &amp; SELENIUM
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects-section"
              id="hero-btn-projects"
              className="border-2 border-[#FBBF24] bg-[#FBBF24] text-[#07081E] hover:bg-transparent hover:text-[#FBBF24] font-mono text-xs sm:text-sm uppercase font-extrabold px-5 py-3 tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>VIEW CASE STUDIES</span>
              <span className="font-bold">↓</span>
            </a>

            <a
              href="#skills-section"
              id="hero-btn-skills"
              className="border border-[#333A6B] bg-[#0E1231] text-white hover:border-[#FBBF24] hover:text-[#FBBF24] font-mono text-xs sm:text-sm uppercase font-semibold px-5 py-3 tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>LIVE DATA SKILLS</span>
              <span className="text-[#FBBF24]">#</span>
            </a>

            <button
              type="button"
              id="hero-btn-email"
              onClick={handleCopyEmail}
              className="border border-[#333A6B] bg-transparent text-[#9CA3AF] hover:border-white hover:text-white font-mono text-xs sm:text-sm uppercase px-4 py-3 tracking-wider transition-all inline-flex items-center gap-2"
            >
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: The Signature Circular Avatar (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          <div
            id="avatar-container"
            className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px]"
          >
            {/* Circular Frame with thick 10-12px white ring & vibrant yellow background */}
            <div
              id="avatar-circle"
              className="w-full h-full rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-white bg-[#FBBF24] relative overflow-hidden flex items-end justify-center shadow-2xl"
            >
              {customPhotoUrl ? (
                <img
                  src={customPhotoUrl}
                  alt="Ahmed Yasser"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                /* High-fidelity custom illustration of young Data Analyst with glasses & red shirt on yellow backdrop */
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full object-cover scale-[1.05] translate-y-1"
                  aria-label="Portrait of Ahmed Yasser"
                >
                  <defs>
                    <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E2A679" />
                      <stop offset="100%" stopColor="#CE8B58" />
                    </linearGradient>
                    <linearGradient id="shirtRed" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A81D24" />
                      <stop offset="100%" stopColor="#7E1217" />
                    </linearGradient>
                    <linearGradient id="hairDark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1C1D24" />
                      <stop offset="100%" stopColor="#101117" />
                    </linearGradient>
                  </defs>

                  {/* Torso & Shoulders: Maroon Red Buttoned Shirt */}
                  <path
                    d="M 60 500 C 70 380, 110 320, 190 310 L 250 330 L 310 310 C 390 320, 430 380, 440 500 Z"
                    fill="url(#shirtRed)"
                  />

                  {/* Inner White T-Shirt at neck */}
                  <path
                    d="M 215 315 C 230 355, 270 355, 285 315 C 275 300, 225 300, 215 315 Z"
                    fill="#FFFFFF"
                  />

                  {/* Neck */}
                  <path
                    d="M 220 250 L 220 320 C 235 335, 265 335, 280 320 L 280 250 Z"
                    fill="url(#skinGrad)"
                  />
                  <path
                    d="M 222 250 C 240 270, 260 270, 278 250 Z"
                    fill="#B57242"
                    opacity="0.6"
                  />

                  {/* Shirt Collar flaps */}
                  <path d="M 205 310 L 235 360 L 246 325 Z" fill="#91141B" />
                  <path d="M 295 310 L 265 360 L 254 325 Z" fill="#91141B" />

                  {/* Crossed Arms */}
                  <path
                    d="M 120 420 C 140 370, 210 370, 270 395 C 330 375, 380 380, 390 430 C 380 470, 330 480, 250 480 C 170 480, 125 465, 120 420 Z"
                    fill="#89141A"
                  />
                  <path
                    d="M 140 435 C 180 440, 250 450, 320 430 C 335 445, 330 460, 310 470 C 240 480, 170 475, 140 450 Z"
                    fill="#9B1B22"
                  />

                  {/* Wrist Watch */}
                  <rect x="180" y="445" width="22" height="14" rx="3" fill="#222" />
                  <circle cx="191" cy="452" r="6" fill="#D1D5DB" />
                  <circle cx="191" cy="452" r="4.5" fill="#111827" />

                  {/* Head / Face */}
                  <ellipse cx="250" cy="205" rx="68" ry="80" fill="url(#skinGrad)" />

                  {/* Ears */}
                  <ellipse cx="180" cy="208" rx="10" ry="18" fill="#CE8B58" />
                  <ellipse cx="320" cy="208" rx="10" ry="18" fill="#CE8B58" />

                  {/* Hair */}
                  <path
                    d="M 180 180 C 175 125, 220 90, 260 90 C 310 90, 330 130, 322 180 C 315 155, 290 145, 250 145 C 210 145, 190 160, 180 180 Z"
                    fill="url(#hairDark)"
                  />
                  <path
                    d="M 182 175 C 186 145, 205 130, 250 130 C 295 130, 314 145, 318 175 C 300 155, 275 150, 250 150 C 220 150, 198 158, 182 175 Z"
                    fill="#0C0D12"
                  />

                  {/* Eyebrows */}
                  <path d="M 205 174 Q 222 168 234 174" stroke="#1C1D24" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  <path d="M 266 174 Q 278 168 295 174" stroke="#1C1D24" strokeWidth="4.5" strokeLinecap="round" fill="none" />

                  {/* Eyes */}
                  <ellipse cx="220" cy="190" rx="7" ry="5.5" fill="#1C1D24" />
                  <circle cx="222" cy="188" r="2" fill="#FFFFFF" />
                  <ellipse cx="280" cy="190" rx="7" ry="5.5" fill="#1C1D24" />
                  <circle cx="282" cy="188" r="2" fill="#FFFFFF" />

                  {/* Modern Glasses */}
                  <circle cx="220" cy="190" r="22" fill="none" stroke="#22252A" strokeWidth="4" />
                  <circle cx="280" cy="190" r="22" fill="none" stroke="#22252A" strokeWidth="4" />
                  <path d="M 242 188 Q 250 183 258 188" fill="none" stroke="#22252A" strokeWidth="4" />
                  <path d="M 198 188 L 180 185" fill="none" stroke="#22252A" strokeWidth="3.5" />
                  <path d="M 302 188 L 320 185" fill="none" stroke="#22252A" strokeWidth="3.5" />

                  {/* Nose */}
                  <path d="M 248 192 Q 252 214 246 220 Q 252 223 256 220" fill="none" stroke="#B57242" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Facial hair */}
                  <path d="M 233 234 Q 250 231 267 234 Q 250 237 233 234" fill="#2A2B33" opacity="0.85" />
                  <circle cx="250" cy="265" r="5" fill="#2A2B33" opacity="0.65" />

                  {/* Smile */}
                  <path d="M 226 238 Q 250 268 274 238 C 265 258, 235 258, 226 238 Z" fill="#7E171E" />
                  <path d="M 232 240 Q 250 248 268 240 Q 250 252 232 240 Z" fill="#FFFFFF" />
                </svg>
              )}
            </div>

            {/* Custom Photo Upload trigger */}
            <div className="absolute -bottom-2 -right-2 flex flex-col items-end gap-1">
              <label
                htmlFor="user-photo-upload"
                className="bg-[#0E1231] hover:bg-[#FBBF24] hover:text-[#07081E] text-white border border-[#2D356A] text-[11px] font-mono px-3 py-1.5 cursor-pointer transition-colors shadow-lg flex items-center gap-1.5"
                title="Upload your personal picture to display in the circular frame"
              >
                <span>📷 UPLOAD MY PHOTO</span>
                <input
                  id="user-photo-upload"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="sr-only"
                />
              </label>
              {customPhotoUrl && (
                <button
                  type="button"
                  onClick={() => setCustomPhotoUrl(null)}
                  className="text-[10px] font-mono text-[#EF4444] hover:underline bg-[#07081E] px-2 py-0.5 border border-[#232952]"
                >
                  Reset to default
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR: Exact match with screenshot */}
      <div className="w-full flex justify-center items-center pt-10 sm:pt-6">
        <button
          type="button"
          id="scroll-to-about-btn"
          onClick={handleScrollDown}
          aria-label="Scroll down to About Me"
          className="group w-12 h-12 rounded-full border border-[#232952] bg-[#0E1231] hover:border-[#FBBF24] hover:bg-[#161B42] transition-all flex items-center justify-center cursor-pointer shadow-lg"
        >
          <svg
            className="w-6 h-6 text-[#FBBF24] group-hover:translate-y-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 8l-7 7-7-7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7" opacity="0.6" />
          </svg>
        </button>
      </div>
    </section>
  );
};
