import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, LEADERSHIP_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const AboutBackground: React.FC = () => {
  return (
    <section
      id="about-section"
      className="w-full border-t border-[#1E2346] py-14 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto text-left"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-[#1E2346]">
        <div>
          <span className="font-mono text-xs text-[#FBBF24] uppercase tracking-wider font-bold">
            // PROFILE &amp; ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            About Me &amp; Background
          </h2>
        </div>
        <div className="font-mono text-xs text-[#9CA3AF] border border-[#232952] bg-[#0E1231] px-3.5 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
          <span>LOCATION: BENI SUEF / CAIRO, EGYPT</span>
        </div>
      </div>

      {/* Narrative & High-Level Philosophy */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-[#D1D5DB] text-[15px] sm:text-[16px] leading-[1.7]">
          <p>
            I am a passionate <strong className="text-white">Data Analyst</strong> and student of Information Systems at the <span className="text-[#FBBF24]">Faculty of Computers and Artificial Intelligence, Beni Suef University</span>. Concurrently, I am honing advanced industry competencies through the selective <span className="text-[#FBBF24]">Digital Egypt Pioneers Initiative (DEPI)</span> in the Data Analysis track.
          </p>
          <p>
            My work bridges the gap between raw, messy transactional datasets and sharp business intelligence. Whether optimizing a pipeline of over <strong className="text-white">2,000,000 transaction records</strong> or automating administrative workflows with Python and Selenium, I specialize in crafting robust, self-service data models and high-impact Power BI dashboards.
          </p>
          <p>
            Beyond technical execution, I am deeply committed to community impact as the <strong className="text-[#FBBF24]">Founder of Awl Code</strong>, an educational initiative where I teach programming fundamentals and algorithmic problem-solving to secondary school students.
          </p>
        </div>

        {/* Quick Metrics Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="border border-[#232952] bg-[#0A0D28] p-4 text-left">
            <div className="font-mono text-xs text-[#9CA3AF] uppercase">VOLUME AUDITED</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#FBBF24] mt-1">2,000,000+</div>
            <div className="text-xs text-[#9CA3AF] mt-1">Fawry financial transactions</div>
          </div>
          <div className="border border-[#232952] bg-[#0A0D28] p-4 text-left">
            <div className="font-mono text-xs text-[#9CA3AF] uppercase">NTI / ITIDA COURSE</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">120 HRS</div>
            <div className="text-xs text-[#9CA3AF] mt-1">Intensive summer training</div>
          </div>
          <div className="border border-[#232952] bg-[#0A0D28] p-4 text-left">
            <div className="font-mono text-xs text-[#9CA3AF] uppercase">COMMUNITY</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#FBBF24] mt-1">AWL CODE</div>
            <div className="text-xs text-[#9CA3AF] mt-1">Founder &amp; Lead Instructor</div>
          </div>
          <div className="border border-[#232952] bg-[#0A0D28] p-4 text-left">
            <div className="font-mono text-xs text-[#9CA3AF] uppercase">AUTOMATION RATE</div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">99.9%</div>
            <div className="text-xs text-[#9CA3AF] mt-1">Selenium &amp; VBA accuracy</div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BACKGROUND SUB-SECTION: Education, Certifications & Leadership
          ========================================================================= */}
      <div id="background-section" className="mt-14 pt-10 border-t border-[#1E2346]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column (6 cols) */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
              <h3 className="font-mono text-sm uppercase tracking-wider text-[#FBBF24] font-bold">
                EDUCATION &amp; SCHOLARSHIPS
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="border border-[#232952] bg-[#0A0D28] p-5 relative hover:border-[#FBBF24]/60 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-white text-base sm:text-lg">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-xs text-[#FBBF24] border border-[#FBBF24]/40 px-2 py-0.5">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-[#FBBF24] mb-2">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership Column (6 cols) */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#FBBF24] font-bold">
                  PROFESSIONAL TRAINING &amp; CERTIFICATIONS
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <div
                    key={idx}
                    className="border border-[#232952] bg-[#0A0D28] p-4 flex items-center justify-between gap-4 hover:border-[#FBBF24]/60 transition-colors"
                  >
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base">
                        {cert.title}
                      </h4>
                      <div className="text-xs text-[#9CA3AF] mt-0.5">
                        Issued by: <span className="text-white font-medium">{cert.issuer}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-[#FBBF24] border border-[#232952] bg-[#0E1231] px-2.5 py-1">
                        {cert.durationOrType}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership: Awl Code */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
                <h3 className="font-mono text-sm uppercase tracking-wider text-[#FBBF24] font-bold">
                  LEADERSHIP &amp; COMMUNITY INITIATIVES
                </h3>
              </div>

              <div className="border border-[#FBBF24]/40 bg-[#0E1231] p-5 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{LEADERSHIP_DATA.initiative}</span>
                    <span className="text-xs font-mono text-[#FBBF24] border border-[#FBBF24] px-1.5 py-0.5">
                      FOUNDER
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#9CA3AF]">2023 - Present</span>
                </div>
                <div className="text-sm font-semibold text-[#FBBF24] mb-2">
                  {LEADERSHIP_DATA.role}
                </div>
                <p className="text-xs text-[#D1D5DB] leading-relaxed mb-3">
                  {LEADERSHIP_DATA.description}
                </p>
                <div className="font-mono text-xs text-[#9CA3AF] border-t border-[#232952] pt-2.5">
                  <strong className="text-white">Core Mission:</strong> {LEADERSHIP_DATA.impact}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
