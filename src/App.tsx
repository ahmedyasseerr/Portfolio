import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  Check, 
  Copy, 
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Award,
  Code2,
  Database,
  BarChart3,
  FileSpreadsheet,
  Layers,
  Sliders,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Fade-in-on-scroll observer for smooth section entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('ahmedyasser5902@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const skillItems = [
    {
      name: 'Python (Pandas, NumPy)',
      category: 'Data Manipulation',
      icon: Code2,
    },
    {
      name: 'SQL',
      category: 'Relational Queries',
      icon: Database,
    },
    {
      name: 'Power BI',
      category: 'Modeling & DAX',
      icon: BarChart3,
    },
    {
      name: 'Excel',
      category: 'Advanced Analytics',
      icon: FileSpreadsheet,
    },
    {
      name: 'MySQL',
      category: 'Database Architecture',
      icon: Layers,
    },
    {
      name: 'Data Cleaning & Preprocessing',
      category: 'Pipeline & ETL',
      icon: Sliders,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE7] text-[#1F2937] font-sans antialiased selection:bg-[#66A3BF] selection:text-white">

      {/* =========================================================================
          1. HEADER (Navbar) - Fixed Top
          Background: #3368A0, Text: #F2EFE7
          ========================================================================= */}
      <header 
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 bg-[#3368A0] text-[#F2EFE7] border-b border-[#2b5685] shadow-xs"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-[8px] bg-[#2b5685] border border-[#66A3BF]/50 flex items-center justify-center font-mono font-bold text-sm text-[#F2EFE7] group-hover:border-white transition-colors">
              AY
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-[#F2EFE7] group-hover:text-white transition-colors">
                Ahmed Yasser
              </span>
              <span className="text-[11px] font-mono text-[#C8DFDB] leading-none">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-[8px] text-xs font-mono font-medium uppercase tracking-wider text-[#F2EFE7] hover:bg-[#2b5685] hover:text-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F2EFE7] hover:text-white focus:outline-hidden rounded-[8px]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2b5685] border-t border-[#66A3BF]/40 px-4 pt-3 pb-5 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-[8px] text-xs font-mono uppercase tracking-wider font-medium text-[#F2EFE7] hover:bg-[#3368A0]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <div className="pt-16">

        {/* =========================================================================
            2. HERO SECTION (Background: #F2EFE7)
            Elevated, editorial profile presentation:
            - Left: Neatly cropped portrait with crisp architectural backing frame
            - Right: Name, Title, About Me summary, Tagline, Primary action button
            ========================================================================= */}
        <section 
          id="hero" 
          className="bg-[#F2EFE7] py-20 sm:py-24 md:py-32 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left Column: Identity, Title, About Me, Tagline & CTA */}
              <div className="w-full md:w-7/12 text-left space-y-6">
                
                {/* Role Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white border border-[#C8DFDB] card-subtle">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#3368A0]">
                    Data Analyst &amp; AI Engineer Trainee
                  </span>
                </div>

                {/* Main Name Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F2937] tracking-tight leading-[1.08]">
                  Ahmed Yasser
                </h1>

                {/* Subtitle / Role Designation */}
                <div className="text-xl sm:text-2xl font-bold text-[#3368A0]">
                  Data Analyst
                </div>

                {/* About Me summary integrated right under name and title */}
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-xl font-normal">
                  I am a Data Analyst &amp; AI Engineer Trainee passionate about using data to solve complex problems. Founder of Awl Code.
                </p>

                {/* Tagline Box with subtle editorial accent */}
                <div className="border-l-3 border-[#3368A0] pl-4 py-1.5 bg-white/60 rounded-r-[8px] border-y border-r border-[#C8DFDB]/60 max-w-lg">
                  <p className="text-base sm:text-lg font-medium text-[#1F2937] italic">
                    &ldquo;Unlocking Insights. Driving Results.&rdquo;
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    id="hero-view-projects-btn"
                    className="interactive-hover inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#3368A0] text-[#F2EFE7] font-semibold text-sm tracking-wide shadow-xs hover:bg-[#2b5685] transition-all"
                  >
                    <span>View Projects</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="interactive-hover inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-white text-[#3368A0] border border-[#C8DFDB] font-semibold text-sm tracking-wide card-subtle hover:bg-[#F2EFE7] transition-all"
                  >
                    <span>Contact Info</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Architectural Headshot Frame */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                <div className="relative group">
                  {/* Subtle offset geometric backing in #C8DFDB for visual depth */}
                  <div className="absolute -inset-2 rounded-[8px] bg-[#C8DFDB] transform rotate-1 opacity-70 transition-transform group-hover:rotate-0" />
                  
                  {/* Main Portrait Card */}
                  <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[4/5] rounded-[8px] overflow-hidden border border-[#C8DFDB] bg-white card-subtle shadow-md">
                    <img
                      src="retouch_2026090902121057.jpg.jpeg"
                      alt="Ahmed Yasser"
                      className="w-full h-full object-cover object-top rounded-[8px]"
                      onError={(e) => {
                        e.currentTarget.src = "placeholder-profile.jpg";
                      }}
                    />

                    {/* Clean contextual bottom bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs border-t border-[#C8DFDB] px-4 py-2.5 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#3368A0]">
                        Ahmed Yasser
                      </span>
                      <span className="font-mono text-[11px] text-[#4B5563]">
                        Beni Suef, Egypt
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. EXPERIENCE & EDUCATION (Background: #F2EFE7)
            Pristine dual-card layout with high-contrast typography and subtle elevation
            ========================================================================= */}
        <section 
          id="experience" 
          className="bg-[#F2EFE7] py-20 sm:py-24 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            {/* Section Header */}
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-widest text-[#3368A0] font-bold mb-2">
                Background &amp; Credentials
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
                Experience &amp; Education
              </h2>
              <div className="w-12 h-1 bg-[#3368A0] mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Education Card */}
              <div className="bg-white p-8 sm:p-10 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-[#C8DFDB]">
                    <div className="w-10 h-10 rounded-[8px] bg-[#3368A0] text-[#F2EFE7] flex items-center justify-center shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2937]">Education</h3>
                      <p className="text-xs font-mono text-[#4B5563]">Academic Foundation</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Degree */}
                    <div className="border-l-3 border-[#3368A0] pl-4.5 py-0.5">
                      <div className="font-bold text-base sm:text-lg text-[#1F2937] leading-snug">
                        Bachelor&apos;s student in Information Systems
                      </div>
                      <div className="text-sm text-[#4B5563] mt-1.5">
                        Faculty of Computers and Artificial Intelligence, Beni Suef University
                      </div>
                    </div>

                    {/* Track */}
                    <div className="border-l-3 border-[#66A3BF] pl-4.5 py-0.5">
                      <div className="font-bold text-base sm:text-lg text-[#1F2937] leading-snug">
                        DEPI Data Analysis Track
                      </div>
                      <div className="text-sm text-[#4B5563] mt-1.5">
                        Digital Egypt Pioneers Initiative
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C8DFDB]/60 flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#3368A0]">Information Systems</span>
                  <span className="font-mono text-xs text-[#4B5563]">In Progress</span>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="bg-white p-8 sm:p-10 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-[#C8DFDB]">
                    <div className="w-10 h-10 rounded-[8px] bg-[#3368A0] text-[#F2EFE7] flex items-center justify-center shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1F2937]">Certifications</h3>
                      <p className="text-xs font-mono text-[#4B5563]">Professional Training</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Cert 1 */}
                    <div className="border-l-3 border-[#3368A0] pl-4.5 py-0.5">
                      <div className="font-bold text-base sm:text-lg text-[#1F2937] leading-snug">
                        IBM Data Fundamentals
                      </div>
                      <div className="text-sm text-[#4B5563] mt-1.5">
                        Professional Certified Credential
                      </div>
                    </div>

                    {/* Cert 2 */}
                    <div className="border-l-3 border-[#66A3BF] pl-4.5 py-0.5">
                      <div className="font-bold text-base sm:text-lg text-[#1F2937] leading-snug">
                        ITIDA/NTI 120-Hour Summer Training
                      </div>
                      <div className="text-sm text-[#4B5563] mt-1.5">
                        Intensive practical technical training program
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C8DFDB]/60 flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#3368A0]">Verified Credentials</span>
                  <span className="font-mono text-xs text-[#4B5563]">120+ Hours</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SKILLS SECTION
            Elevated data-centric grid.
            NO dots and NO slash numbering.
            ========================================================================= */}
        <section 
          id="skills" 
          className="bg-[#F2EFE7] py-20 sm:py-24 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            {/* Section Header */}
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-widest text-[#3368A0] font-bold mb-2">
                Technical Toolkit
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
                Skills
              </h2>
              <div className="w-12 h-1 bg-[#3368A0] mt-3 rounded-full" />
            </div>

            {/* Structured Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="interactive-hover bg-white p-6 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-[8px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#3368A0]" />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-[#66A3BF] uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      <div className="text-lg font-bold text-[#1F2937] tracking-tight">
                        {item.name}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#C8DFDB]/60 flex items-center justify-between text-xs font-mono text-[#4B5563]">
                      <span>Proficiency</span>
                      <span className="text-[#3368A0] font-semibold">Core Focus</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. PROJECTS (Background: #F2EFE7)
            Grid for the TWO projects formatted as executive analytical case studies
            ========================================================================= */}
        <section 
          id="projects" 
          className="bg-[#F2EFE7] py-20 sm:py-24 md:py-32 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            {/* Section Header */}
            <div className="mb-12">
              <div className="font-mono text-xs uppercase tracking-widest text-[#3368A0] font-bold mb-2">
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
                Projects
              </h2>
              <div className="w-12 h-1 bg-[#3368A0] mt-3 rounded-full" />
            </div>

            {/* Grid for exactly TWO projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Project 1: Fawry Transactions Data Analysis */}
              <div className="interactive-hover bg-white p-8 sm:p-10 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[6px] bg-[#F2EFE7] text-[#3368A0] border border-[#C8DFDB]">
                      Financial Analytics
                    </span>
                    <span className="font-mono text-xs text-[#66A3BF] font-semibold">
                      2M+ Records
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-4 leading-tight">
                    Fawry Transactions Data Analysis
                  </h3>

                  {/* Expanded Description */}
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-6">
                    Cleaned a massive dataset of 2M+ records using Python, and utilized Power BI for advanced data modeling and interactive data visualization.
                  </p>

                  {/* Highlights Panel */}
                  <div className="bg-[#F2EFE7] p-5 rounded-[8px] border border-[#C8DFDB] mb-8">
                    <div className="font-mono text-xs uppercase tracking-wider font-bold text-[#3368A0] mb-2 flex items-center gap-2">
                      <span>Highlights</span>
                    </div>
                    <div className="text-sm text-[#1F2937] leading-relaxed font-medium">
                      Cleaned dataset, complex DAX metrics.
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Footer */}
                <div className="pt-5 border-t border-[#C8DFDB]">
                  <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4B5563] mb-3">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-3.5 py-1.5 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-semibold">
                      Python
                    </span>
                    <span className="font-mono text-xs px-3.5 py-1.5 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-semibold">
                      Power BI
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2: Al-Abqari School Management System */}
              <div className="interactive-hover bg-white p-8 sm:p-10 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-[6px] bg-[#F2EFE7] text-[#3368A0] border border-[#C8DFDB]">
                      System Automation
                    </span>
                    <span className="font-mono text-xs text-[#66A3BF] font-semibold">
                      Web Scraping &amp; VBA
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-4 leading-tight">
                    Al-Abqari School Management System
                  </h3>

                  {/* Expanded Description */}
                  <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-6">
                    School administrators were struggling to efficiently retrieve student and teacher info from the official website. I used Selenium and Excel VBA to web scrape the data directly into the program. The app now supports and automates every feature available on the official school site.
                  </p>

                  {/* Highlights Panel */}
                  <div className="bg-[#F2EFE7] p-5 rounded-[8px] border border-[#C8DFDB] mb-8">
                    <div className="font-mono text-xs uppercase tracking-wider font-bold text-[#3368A0] mb-2 flex items-center gap-2">
                      <span>Highlights</span>
                    </div>
                    <div className="text-sm text-[#1F2937] leading-relaxed font-medium">
                      Automated form submissions.
                    </div>
                  </div>
                </div>

                {/* Tech Stack & Footer */}
                <div className="pt-5 border-t border-[#C8DFDB]">
                  <div className="font-mono text-xs uppercase tracking-wider font-semibold text-[#4B5563] mb-3">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-3.5 py-1.5 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-semibold">
                      Excel VBA
                    </span>
                    <span className="font-mono text-xs px-3.5 py-1.5 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-semibold">
                      Selenium
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CONTACT (Background: #3368A0, Text/Icons: #F2EFE7)
            Elevated closing card with copy toast and external profile links
            ========================================================================= */}
        <footer 
          id="contact" 
          className="bg-[#3368A0] text-[#F2EFE7] py-20 sm:py-24 border-t border-[#2b5685]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            
            <div className="mb-10">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C8DFDB] font-bold mb-2">
                Let&apos;s Connect
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F2EFE7] tracking-tight">
                Contact
              </h2>
              <div className="w-12 h-1 bg-[#66A3BF] mt-3 rounded-full" />
            </div>

            <div className="space-y-4">
              
              {/* Email Block with direct mailto link & copy button */}
              <div className="bg-[#2b5685] p-6 rounded-[8px] border border-[#66A3BF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5 card-subtle">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-[8px] bg-[#3368A0] border border-[#66A3BF]/60 text-[#F2EFE7] flex items-center justify-center shadow-xs">
                    <Mail className="w-6 h-6 text-[#F2EFE7]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase text-[#C8DFDB] font-medium tracking-wider">
                      Email Address
                    </div>
                    <a
                      href="mailto:ahmedyasser5902@gmail.com"
                      className="text-base sm:text-xl font-bold text-[#F2EFE7] hover:text-white transition-colors"
                    >
                      ahmedyasser5902@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="interactive-hover px-4.5 py-2.5 rounded-[8px] bg-[#66A3BF] text-[#F2EFE7] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#5794b0] transition-all inline-flex items-center gap-2 self-start sm:self-auto shadow-xs"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmedd-yasserr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-hover bg-[#2b5685] p-6 rounded-[8px] border border-[#66A3BF]/40 flex items-center justify-between group card-subtle"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[8px] bg-[#3368A0] border border-[#66A3BF]/50 text-[#F2EFE7] flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-[#F2EFE7]" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#F2EFE7] group-hover:text-white transition-colors">
                        LinkedIn
                      </div>
                      <div className="font-mono text-xs text-[#C8DFDB]">
                        /in/ahmedd-yasserr
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#C8DFDB] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ahmedyasseerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-hover bg-[#2b5685] p-6 rounded-[8px] border border-[#66A3BF]/40 flex items-center justify-between group card-subtle"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[8px] bg-[#3368A0] border border-[#66A3BF]/50 text-[#F2EFE7] flex items-center justify-center">
                      <Github className="w-5 h-5 text-[#F2EFE7]" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#F2EFE7] group-hover:text-white transition-colors">
                        GitHub
                      </div>
                      <div className="font-mono text-xs text-[#C8DFDB]">
                        @ahmedyasseerr
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#C8DFDB] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

              </div>
            </div>

            {/* Minimal footer note */}
            <div className="mt-16 pt-6 border-t border-[#66A3BF]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#C8DFDB]">
              <span>&copy; {new Date().getFullYear()} Ahmed Yasser &mdash; Data Analyst</span>
              <span>Built with React &amp; Tailwind CSS</span>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
