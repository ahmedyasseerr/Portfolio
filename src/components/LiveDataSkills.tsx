import React, { useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

type SortField = 'name' | 'proficiency' | 'experienceYears' | 'projectCount';
type SortOrder = 'asc' | 'desc';
type ViewMode = 'chart' | 'table';

export const LiveDataSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>('proficiency');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [viewMode, setViewMode] = useState<ViewMode>('chart');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Languages & Querying', 'BI & Visualization', 'Automation & Tools', 'Data Engineering & Methods'];

  // Filter and sort skills
  const processedSkills = useMemo(() => {
    let result = SKILLS_DATA.filter((skill) => {
      const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.topTools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    result.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === 'string') {
        return sortOrder === 'asc'
          ? (valA as string).localeCompare(valB as string)
          : (valB as string).localeCompare(valA as string);
      }

      return sortOrder === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

    return result;
  }, [activeCategory, searchQuery, sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // High level live statistics
  const avgProficiency = Math.round(
    SKILLS_DATA.reduce((acc, curr) => acc + curr.proficiency, 0) / SKILLS_DATA.length
  );
  const totalProjectsAcrossSkills = SKILLS_DATA.reduce((acc, curr) => acc + curr.projectCount, 0);

  return (
    <section
      id="skills-section"
      className="w-full border-t border-[#1E2346] py-14 px-6 sm:px-10 md:px-16 max-w-[1440px] mx-auto text-left"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-6 border-b border-[#1E2346]">
        <div>
          <span className="font-mono text-xs text-[#FBBF24] uppercase tracking-wider font-bold">
            // INTERACTIVE CAPABILITY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
            The Live Data Skill Matrix
          </h2>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 max-w-2xl">
            A transparent, data-driven visualization of technical proficiencies, production projects delivered, and real experience metrics.
          </p>
        </div>

        {/* Live Aggregation Ticker */}
        <div className="flex items-center gap-3">
          <div className="border border-[#232952] bg-[#0A0D28] px-3.5 py-2 font-mono text-xs">
            <span className="text-[#9CA3AF]">AVG PROFICIENCY: </span>
            <span className="text-[#FBBF24] font-bold">{avgProficiency}%</span>
          </div>
          <div className="border border-[#232952] bg-[#0A0D28] px-3.5 py-2 font-mono text-xs hidden sm:block">
            <span className="text-[#9CA3AF]">DEPLOYED USAGES: </span>
            <span className="text-white font-bold">{totalProjectsAcrossSkills}</span>
          </div>
        </div>
      </div>

      {/* Control Toolbar: View Switcher, Category Filters, Search */}
      <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-[#FBBF24] bg-[#FBBF24] text-[#07081E] font-bold'
                  : 'border-[#232952] bg-[#0A0D28] text-[#9CA3AF] hover:text-white hover:border-[#333A6B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode & Search Input */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 lg:w-60">
            <input
              type="text"
              placeholder="Filter skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0A0D28] border border-[#232952] text-white text-xs font-mono px-3 py-2 outline-none focus:border-[#FBBF24]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-[#9CA3AF] hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Toggle: Bar Chart vs. Data Table */}
          <div className="flex border border-[#232952] bg-[#0A0D28] font-mono text-xs">
            <button
              type="button"
              onClick={() => setViewMode('chart')}
              className={`px-3 py-1.5 transition-colors ${
                viewMode === 'chart'
                  ? 'bg-[#FBBF24] text-[#07081E] font-bold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              📊 BAR CHART
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 border-l border-[#232952] transition-colors ${
                viewMode === 'table'
                  ? 'bg-[#FBBF24] text-[#07081E] font-bold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              📋 DATA TABLE
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          VIEW 1: Interactive Bar Chart Visualization
          ========================================================================= */}
      {viewMode === 'chart' && (
        <div className="mt-6 border border-[#232952] bg-[#0A0D28] p-6 text-left">
          {/* Sort Controls for Chart */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#1E2346] font-mono text-xs">
            <div className="flex items-center gap-2 text-[#9CA3AF]">
              <span>SORT CHART BY:</span>
              <button
                type="button"
                onClick={() => handleSort('proficiency')}
                className={`px-2 py-1 border ${
                  sortField === 'proficiency'
                    ? 'border-[#FBBF24] text-[#FBBF24] font-bold'
                    : 'border-[#232952] text-[#9CA3AF]'
                }`}
              >
                Proficiency {sortField === 'proficiency' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </button>
              <button
                type="button"
                onClick={() => handleSort('experienceYears')}
                className={`px-2 py-1 border ${
                  sortField === 'experienceYears'
                    ? 'border-[#FBBF24] text-[#FBBF24] font-bold'
                    : 'border-[#232952] text-[#9CA3AF]'
                }`}
              >
                Years {sortField === 'experienceYears' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </button>
              <button
                type="button"
                onClick={() => handleSort('projectCount')}
                className={`px-2 py-1 border ${
                  sortField === 'projectCount'
                    ? 'border-[#FBBF24] text-[#FBBF24] font-bold'
                    : 'border-[#232952] text-[#9CA3AF]'
                }`}
              >
                Projects {sortField === 'projectCount' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </button>
            </div>

            <div className="text-[#9CA3AF] text-[11px]">
              SHOWING {processedSkills.length} SKILLS // HOVER FOR DEEP METRICS
            </div>
          </div>

          {/* Interactive Bars Stack */}
          <div className="space-y-4">
            {processedSkills.map((skill) => {
              const isHovered = hoveredSkill?.id === skill.id;
              return (
                <div
                  key={skill.id}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-3.5 border transition-all ${
                    isHovered
                      ? 'border-[#FBBF24] bg-[#0E1231]'
                      : 'border-[#1E2346] bg-[#07081E]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#FBBF24] inline-block"></span>
                      <span className="font-bold text-white text-sm">{skill.name}</span>
                      <span className="text-[#9CA3AF] text-[11px] border border-[#232952] px-1.5 py-0.2">
                        {skill.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-[#9CA3AF]">
                      <span>
                        <strong className="text-white">{skill.experienceYears}</strong> yrs exp
                      </span>
                      <span>
                        <strong className="text-[#FBBF24]">{skill.projectCount}</strong> projects
                      </span>
                      <span className="font-bold text-[#FBBF24] min-w-[40px] text-right">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Visual Bar Track */}
                  <div className="w-full bg-[#1A1F40] h-3 rounded-none overflow-hidden relative">
                    <div
                      className="h-full bg-[#FBBF24] transition-all duration-500 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>

                  {/* Expanded tool tags on hover or standard view */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-[#9CA3AF] mr-1">Tools &amp; Sub-modules:</span>
                    {skill.topTools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-white border border-[#232952] px-2 py-0.5 bg-[#0A0D28]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: Sortable Live Data Table
          ========================================================================= */}
      {viewMode === 'table' && (
        <div className="mt-6 border border-[#232952] bg-[#0A0D28] overflow-x-auto text-left">
          <table className="w-full border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-[#232952] bg-[#0E1231] text-[#9CA3AF]">
                <th
                  onClick={() => handleSort('name')}
                  className="p-3.5 text-left font-bold cursor-pointer hover:text-white"
                >
                  SKILL IDENTIFIER {sortField === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th className="p-3.5 text-left font-bold">CATEGORY</th>
                <th
                  onClick={() => handleSort('proficiency')}
                  className="p-3.5 text-right font-bold cursor-pointer hover:text-[#FBBF24]"
                >
                  PROFICIENCY {sortField === 'proficiency' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th
                  onClick={() => handleSort('experienceYears')}
                  className="p-3.5 text-right font-bold cursor-pointer hover:text-white"
                >
                  YEARS {sortField === 'experienceYears' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th
                  onClick={() => handleSort('projectCount')}
                  className="p-3.5 text-right font-bold cursor-pointer hover:text-white"
                >
                  PROJECTS {sortField === 'projectCount' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                </th>
                <th className="p-3.5 text-left font-bold">KEY MODULES / LIBRARIES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2346]">
              {processedSkills.map((skill) => (
                <tr
                  key={skill.id}
                  className="hover:bg-[#0E1231] transition-colors"
                >
                  <td className="p-3.5 text-white font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FBBF24] inline-block"></span>
                    <span>{skill.name}</span>
                  </td>
                  <td className="p-3.5 text-[#9CA3AF]">{skill.category}</td>
                  <td className="p-3.5 text-right font-bold text-[#FBBF24]">
                    {skill.proficiency}%
                  </td>
                  <td className="p-3.5 text-right text-white">
                    {skill.experienceYears} yrs
                  </td>
                  <td className="p-3.5 text-right text-white">
                    {skill.projectCount}
                  </td>
                  <td className="p-3.5">
                    <div className="flex flex-wrap gap-1">
                      {skill.topTools.map((t) => (
                        <span
                          key={t}
                          className="border border-[#232952] text-[#9CA3AF] px-1.5 py-0.5 text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
