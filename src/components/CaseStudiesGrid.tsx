import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const CaseStudiesGrid: React.FC = () => {
  const [activeFawryTab, setActiveFawryTab] = useState<'kpi' | 'hourly' | 'methods'>('kpi');
  const [vbaLogPlaying, setVbaLogPlaying] = useState(true);

  return (
    <section
      id="projects-section"
      className="w-full border-t border-[#1E2346] py-14 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto text-left"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-[#1E2346]">
        <div>
          <span className="font-mono text-xs text-[#FBBF24] uppercase tracking-wider font-bold">
            // PRODUCTION PORTFOLIO // VERIFIED IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-2xl">
            Real-world end-to-end analytics initiatives spanning high-scale transaction auditing, custom browser automation, and data product engineering.
          </p>
        </div>

        <div className="font-mono text-xs text-[#9CA3AF] border border-[#232952] bg-[#0A0D28] px-3.5 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
          <span>ALL DATA VERIFIED &amp; DOCUMENTED</span>
        </div>
      </div>

      {/* 2-Column CSS Grid as explicitly mandated */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="border border-[#232952] bg-[#0A0D28] flex flex-col justify-between hover:border-[#FBBF24] transition-all p-6 sm:p-7 relative group text-left"
          >
            {/* Top Metadata Strip */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs">
                <span className="text-[#FBBF24] font-bold tracking-wide uppercase">
                  {project.category}
                </span>
                <span className="text-[#9CA3AF] border border-[#232952] px-2.5 py-0.5 bg-[#0E1231]">
                  {project.date}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#FBBF24] mb-6">
                {project.subtitle}
              </p>

              {/* Key Impact Metrics Pill-row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 border-y border-[#1E2346] py-3">
                {project.keyMetrics.map((m, idx) => (
                  <div key={idx} className="font-mono">
                    <div className="text-[10px] uppercase text-[#9CA3AF]">{m.label}</div>
                    <div className="text-base font-bold text-white mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Business Problem Section */}
              <div className="mb-5 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#FBBF24] inline-block"></span>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#FBBF24] font-bold">
                    BUSINESS PROBLEM
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-[#D1D5DB] leading-relaxed pl-3.5 border-l border-[#232952]">
                  {project.businessProblem}
                </p>
              </div>

              {/* Methodology Section */}
              <div className="mb-6 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#FBBF24] inline-block"></span>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#FBBF24] font-bold">
                    METHODOLOGY &amp; EXECUTION
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF] pl-3.5 border-l border-[#232952]">
                  {project.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FBBF24] font-mono font-bold">→</span>
                      <span className="leading-normal">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Placeholder for Data Visualization Screenshot */}
              <div className="mb-6 border border-[#232952] bg-[#07081E] overflow-hidden">
                {/* Visual Header */}
                <div className="bg-[#0E1231] px-3.5 py-2 border-b border-[#232952] flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                    <span className="text-white font-semibold">
                      {project.previewType === 'fawry-bi' && 'POWER BI INTERACTIVE TELEMETRY SCREENSHOT'}
                      {project.previewType === 'abqari-automation' && 'SELENIUM WEBDRIVER + VBA CONSOLE PREVIEW'}
                      {project.previewType === 'awl-code' && 'STUDENT ANALYTICS & COHORT PROGRESSION'}
                    </span>
                  </div>
                  <span className="text-[#9CA3AF]">
                    {project.previewType === 'fawry-bi' ? '2.0M ROWS' : 'LIVE AUDIT'}
                  </span>
                </div>

                {/* Simulated High-Fidelity Data Visualization Screenshot */}
                {project.previewType === 'fawry-bi' && (
                  <div className="p-4 bg-[#07081E] text-left">
                    {/* View Switcher inside preview */}
                    <div className="flex gap-2 mb-3 font-mono text-[10px]">
                      <button
                        type="button"
                        onClick={() => setActiveFawryTab('kpi')}
                        className={`px-2 py-1 border ${
                          activeFawryTab === 'kpi'
                            ? 'border-[#FBBF24] text-[#FBBF24] bg-[#0E1231]'
                            : 'border-[#232952] text-[#9CA3AF]'
                        }`}
                      >
                        REVENUE &amp; SUCCESS KPIs
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveFawryTab('hourly')}
                        className={`px-2 py-1 border ${
                          activeFawryTab === 'hourly'
                            ? 'border-[#FBBF24] text-[#FBBF24] bg-[#0E1231]'
                            : 'border-[#232952] text-[#9CA3AF]'
                        }`}
                      >
                        PEAK HOURLY VOLUME
                      </button>
                    </div>

                    {activeFawryTab === 'kpi' ? (
                      <div className="space-y-2.5 font-mono">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#0E1231] p-2 border border-[#232952]">
                            <span className="text-[10px] text-[#9CA3AF] block">TOTAL VOLUME</span>
                            <span className="text-sm font-bold text-white">2,048,192</span>
                            <span className="text-[9px] text-[#10B981] block">▲ 14.2% MoM</span>
                          </div>
                          <div className="bg-[#0E1231] p-2 border border-[#232952]">
                            <span className="text-[10px] text-[#9CA3AF] block">APPROVAL RATE</span>
                            <span className="text-sm font-bold text-[#FBBF24]">96.84%</span>
                            <span className="text-[9px] text-[#9CA3AF] block">DAX Calculated</span>
                          </div>
                          <div className="bg-[#0E1231] p-2 border border-[#232952]">
                            <span className="text-[10px] text-[#9CA3AF] block">ERROR SURGES</span>
                            <span className="text-sm font-bold text-[#EF4444]">3.16%</span>
                            <span className="text-[9px] text-[#9CA3AF] block">Timeout / Dropped</span>
                          </div>
                        </div>

                        {/* Visual Breakdown Bars */}
                        <div className="bg-[#0E1231] p-2.5 border border-[#232952]">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[#D1D5DB]">POS Card Swipes:</span>
                            <span className="text-[#FBBF24] font-bold">1,120,400 (54.7%)</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-2 mb-2">
                            <div className="bg-[#FBBF24] h-full w-[54.7%]"></div>
                          </div>

                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[#D1D5DB]">E-Wallet Payments:</span>
                            <span className="text-white font-bold">614,200 (30.0%)</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-2 mb-2">
                            <div className="bg-white h-full w-[30%]"></div>
                          </div>

                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[#D1D5DB]">Direct Bank Integrations:</span>
                            <span className="text-[#9CA3AF] font-bold">313,592 (15.3%)</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-2">
                            <div className="bg-[#9CA3AF] h-full w-[15.3%]"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="font-mono text-xs space-y-2 bg-[#0E1231] p-3 border border-[#232952]">
                        <span className="text-[#9CA3AF] text-[10px] block">24-HOUR HOURLY TRANSACTION DISTRIBUTION (SIMULATED DAX AGGREGATE)</span>
                        <div className="h-28 flex items-end gap-1 pt-4 pb-2 border-b border-[#232952]">
                          {[12, 8, 4, 3, 5, 14, 35, 68, 92, 100, 88, 75, 82, 89, 94, 91, 79, 65, 52, 45, 38, 29, 21, 15].map((val, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                              <div
                                style={{ height: `${val}%` }}
                                className={`w-full transition-all ${
                                  val > 85 ? 'bg-[#FBBF24]' : 'bg-[#2E376C] hover:bg-[#FBBF24]'
                                }`}
                                title={`Hour ${i}:00 - Relative Volume: ${val}%`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-[#9CA3AF]">
                          <span>00:00 (Midnight)</span>
                          <span className="text-[#FBBF24] font-bold">PEAK SURGE (09:00 - 14:00)</span>
                          <span>23:00</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {project.previewType === 'abqari-automation' && (
                  <div className="p-4 bg-[#07081E] font-mono text-[11px] text-left">
                    <div className="bg-[#0E1231] p-3 border border-[#232952] space-y-1.5">
                      <div className="text-[#10B981] flex items-center justify-between">
                        <span>[STATUS: ONLINE] Selenium ChromeDriver v122.0</span>
                        <span className="text-[10px] text-[#9CA3AF]">PORT 9222</span>
                      </div>
                      <div className="text-[#D1D5DB]">
                        &gt; Initializing Excel VBA UserForm: <span className="text-[#FBBF24]">frmStudentEnrollment.Show</span>
                      </div>
                      <div className="text-[#9CA3AF]">
                        &gt; Reading batch worksheet: 450 rows detected.
                      </div>
                      <div className="text-[#D1D5DB]">
                        &gt; Injecting DOM elements into School Portal Auth endpoint...
                      </div>
                      <div className="text-[#10B981]">
                        &gt; SUCCESS: 450 / 450 Student records verified &amp; synced in 42.6s.
                      </div>
                      <div className="text-[#FBBF24] pt-1">
                        &gt; PDF Attendance Rosters generated: ./exports/2024_Grade10_Roster.pdf
                      </div>
                    </div>
                  </div>
                )}

                {project.previewType === 'awl-code' && (
                  <div className="p-4 bg-[#07081E] font-mono text-[11px] text-left">
                    <div className="bg-[#0E1231] p-3 border border-[#232952] space-y-2">
                      <div className="flex justify-between text-white font-bold">
                        <span>COHORT PROGRESSION &amp; COMPLETION</span>
                        <span className="text-[#FBBF24]">92% RETENTION</span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        <div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>Module 01: Computational Logic &amp; Flowcharts</span>
                            <span className="text-white">100% Passed</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-1.5 mt-0.5">
                            <div className="bg-[#FBBF24] h-full w-[100%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>Module 02: Python Syntax, Loops, Functions</span>
                            <span className="text-white">94% Passed</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-1.5 mt-0.5">
                            <div className="bg-[#FBBF24] h-full w-[94%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>Module 03: Applied Data Problem Solving</span>
                            <span className="text-white">88% Passed</span>
                          </div>
                          <div className="w-full bg-[#1F2550] h-1.5 mt-0.5">
                            <div className="bg-[#FBBF24] h-full w-[88%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tags Section: Styled as minimalist bordered badges, NO backgrounds */}
            <div className="pt-4 border-t border-[#1E2346] text-left">
              <span className="text-[10px] font-mono uppercase text-[#9CA3AF] block mb-2">
                TECHNOLOGY STACK // BORDERED BADGES (NO BACKGROUND):
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#333A6B] text-white hover:border-[#FBBF24] hover:text-[#FBBF24] font-mono text-xs px-2.5 py-1 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
