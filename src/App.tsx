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
  Award
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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
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

  const skills = [
    'Python (Pandas, NumPy)',
    'SQL',
    'Power BI',
    'Excel',
    'MySQL',
    'Data Cleaning & Preprocessing'
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE7] text-[#1F2937] font-sans antialiased selection:bg-[#66A3BF] selection:text-white">

      {/* =========================================================================
          1. HEADER (Navbar) - Fixed Top
          Background: #3368A0, Text: #F2EFE7
          ========================================================================= */}
      <header 
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 bg-[#3368A0] text-[#F2EFE7] border-b border-[#3368A0] shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a 
            href="#hero" 
            className="font-bold text-lg text-[#F2EFE7] hover:text-white transition-colors tracking-tight"
          >
            Ahmed Yasser
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-[8px] text-sm font-medium text-[#F2EFE7] hover:bg-[#66A3BF]/40 hover:text-white transition-all"
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
              className="p-2 text-[#F2EFE7] hover:text-white focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#3368A0] border-t border-[#66A3BF]/40 px-4 pt-2 pb-4 space-y-1 shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-[8px] text-sm font-medium text-[#F2EFE7] hover:bg-[#66A3BF]/40"
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
            Left: Profile picture using user-attached image (retouch_2026090902121057.jpg.jpeg)
            Right: "Ahmed Yasser, Data Analyst"
                   About Me text integrated directly under name and title
                   Tagline: "Unlocking Insights. Driving Results."
                   Button: "View Projects"
            ========================================================================= */}
        <section 
          id="hero" 
          className="bg-[#F2EFE7] py-20 sm:py-24 md:py-28 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
              
              {/* Left Column: Neatly cropped profile picture with subtle 8px border-radius */}
              <div className="w-full md:w-5/12 flex justify-center md:justify-start">
                <div className="w-[280px] sm:w-[320px] md:w-[350px] aspect-square overflow-hidden rounded-[8px] border border-[#C8DFDB] bg-white card-subtle">
                  <img
                    src="retouch_2026090902121057.jpg.jpeg"
                    alt="Ahmed Yasser"
                    className="w-full h-full object-cover object-center rounded-[8px]"
                    onError={(e) => {
                      e.currentTarget.src = "placeholder-profile.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Name, Title, About Me, Tagline, Action */}
              <div className="w-full md:w-7/12 text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] tracking-tight leading-[1.1] mb-2">
                  Ahmed Yasser
                </h1>

                <div className="text-2xl sm:text-3xl font-semibold text-[#3368A0] mb-5">
                  Data Analyst
                </div>

                {/* About Me summary integrated directly under name and title */}
                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6 max-w-xl">
                  I am a Data Analyst &amp; AI Engineer Trainee passionate about using data to solve complex problems. Founder of Awl Code.
                </p>

                {/* Tagline */}
                <div className="border-l-2 border-[#3368A0] pl-4 py-1 mb-8">
                  <p className="text-lg sm:text-xl font-medium text-[#1F2937] italic">
                    &ldquo;Unlocking Insights. Driving Results.&rdquo;
                  </p>
                </div>

                {/* Primary CTA Button */}
                <div>
                  <a
                    href="#projects"
                    id="hero-view-projects-btn"
                    className="interactive-hover inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#3368A0] text-[#F2EFE7] font-semibold text-sm tracking-wide shadow-sm hover:bg-[#2b5685] transition-all"
                  >
                    <span>View Projects</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. EXPERIENCE & EDUCATION (Background: #F2EFE7)
            Clean, structured card layout with subtle shadows and 1px #C8DFDB borders
            ========================================================================= */}
        <section 
          id="experience" 
          className="bg-[#F2EFE7] py-20 sm:py-24 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-10">
              Experience &amp; Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Education Card */}
              <div className="bg-white p-7 sm:p-9 rounded-[8px] border border-[#C8DFDB] card-subtle">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#C8DFDB]">
                  <div className="p-2.5 rounded-[8px] bg-[#3368A0] text-[#F2EFE7]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937]">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#3368A0] pl-4">
                    <div className="font-bold text-base text-[#1F2937]">
                      Bachelor&apos;s student in Information Systems
                    </div>
                    <div className="text-sm text-[#4B5563] mt-1">
                      Faculty of Computers and Artificial Intelligence, Beni Suef University
                    </div>
                  </div>

                  <div className="border-l-2 border-[#66A3BF] pl-4">
                    <div className="font-bold text-base text-[#1F2937]">
                      DEPI Data Analysis Track
                    </div>
                    <div className="text-sm text-[#4B5563] mt-1">
                      Digital Egypt Pioneers Initiative
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Card */}
              <div className="bg-white p-7 sm:p-9 rounded-[8px] border border-[#C8DFDB] card-subtle">
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#C8DFDB]">
                  <div className="p-2.5 rounded-[8px] bg-[#3368A0] text-[#F2EFE7]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937]">Certifications</h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#3368A0] pl-4">
                    <div className="font-bold text-base text-[#1F2937]">
                      IBM Data Fundamentals
                    </div>
                    <div className="text-sm text-[#4B5563] mt-1">
                      Professional Certified Credential
                    </div>
                  </div>

                  <div className="border-l-2 border-[#66A3BF] pl-4">
                    <div className="font-bold text-base text-[#1F2937]">
                      ITIDA/NTI 120-Hour Summer Training
                    </div>
                    <div className="text-sm text-[#4B5563] mt-1">
                      Intensive practical technical training program
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SKILLS (Light Panel: #C8DFDB)
            Clean grid layout. NO dots and NO numbering.
            ========================================================================= */}
        <section 
          id="skills" 
          className="bg-[#C8DFDB] py-20 sm:py-24 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-10">
              Skills
            </h2>

            {/* Clean grid layout without dots or decorative numbering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="interactive-hover bg-[#F2EFE7] p-6 rounded-[8px] border border-[#C8DFDB] card-subtle"
                >
                  <div className="text-base font-semibold text-[#1F2937]">
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. PROJECTS (Background: #F2EFE7)
            Grid for the two projects with updated workflow and background descriptions
            ========================================================================= */}
        <section 
          id="projects" 
          className="bg-[#F2EFE7] py-20 sm:py-24 md:py-28 border-b border-[#C8DFDB] fade-in-section"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight mb-10">
              Projects
            </h2>

            {/* Grid for exactly TWO projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
              
              {/* Project 1: Fawry Transactions Data Analysis */}
              <div className="interactive-hover bg-white p-7 sm:p-9 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight mb-3">
                    Fawry Transactions Data Analysis
                  </h3>

                  {/* Expanded description highlighting workflow */}
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                    Cleaned a massive dataset of 2M+ records using Python, and utilized Power BI for advanced data modeling and interactive data visualization.
                  </p>

                  <div className="bg-[#F2EFE7] p-4 rounded-[8px] border border-[#C8DFDB] mb-6">
                    <div className="text-xs uppercase tracking-wider font-bold text-[#3368A0] mb-1.5">
                      Highlights
                    </div>
                    <div className="text-sm text-[#1F2937] leading-relaxed">
                      Cleaned dataset, complex DAX metrics.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C8DFDB]">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4B5563] mb-2.5">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-medium">
                      Python
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-medium">
                      Power BI
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2: Al-Abqari School Management System */}
              <div className="interactive-hover bg-white p-7 sm:p-9 rounded-[8px] border border-[#C8DFDB] card-subtle flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight mb-3">
                    Al-Abqari School Management System
                  </h3>

                  {/* Updated with background problem and solution */}
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-6">
                    School administrators were struggling to efficiently retrieve student and teacher info from the official website. I used Selenium and Excel VBA to web scrape the data directly into the program. The app now supports and automates every feature available on the official school site.
                  </p>

                  <div className="bg-[#F2EFE7] p-4 rounded-[8px] border border-[#C8DFDB] mb-6">
                    <div className="text-xs uppercase tracking-wider font-bold text-[#3368A0] mb-1.5">
                      Highlights
                    </div>
                    <div className="text-sm text-[#1F2937] leading-relaxed">
                      Automated form submissions.
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C8DFDB]">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#4B5563] mb-2.5">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-medium">
                      Excel VBA
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-[6px] bg-[#F2EFE7] border border-[#C8DFDB] text-[#3368A0] font-medium">
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
            ========================================================================= */}
        <footer 
          id="contact" 
          className="bg-[#3368A0] text-[#F2EFE7] py-20 sm:py-24 border-t border-[#3368A0]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F2EFE7] tracking-tight mb-10">
              Contact
            </h2>

            <div className="space-y-4">
              {/* Email Block with direct mailto link & copy button */}
              <div className="bg-[#2b5685] p-5 sm:p-6 rounded-[8px] border border-[#66A3BF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-subtle">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-[8px] bg-[#3368A0] text-[#F2EFE7]">
                    <Mail className="w-5 h-5 text-[#F2EFE7]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase text-[#C8DFDB] font-medium">
                      Email
                    </div>
                    <a
                      href="mailto:ahmedyasser5902@gmail.com"
                      className="text-base sm:text-lg font-semibold text-[#F2EFE7] hover:underline"
                    >
                      ahmedyasser5902@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="interactive-hover px-4 py-2 rounded-[8px] bg-[#66A3BF] text-[#F2EFE7] text-xs font-semibold hover:bg-[#5794b0] transition-all inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>

              {/* LinkedIn & GitHub Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ahmedd-yasserr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-hover bg-[#2b5685] p-5 rounded-[8px] border border-[#66A3BF]/40 flex items-center justify-between group card-subtle"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#F2EFE7]" />
                    <span className="font-semibold text-base text-[#F2EFE7]">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#F2EFE7] opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ahmedyasseerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-hover bg-[#2b5685] p-5 rounded-[8px] border border-[#66A3BF]/40 flex items-center justify-between group card-subtle"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-[#F2EFE7]" />
                    <span className="font-semibold text-base text-[#F2EFE7]">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#F2EFE7] opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Minimal footer note */}
            <div className="mt-14 pt-6 border-t border-[#66A3BF]/30 text-xs text-[#C8DFDB] text-left">
              &copy; {new Date().getFullYear()} Ahmed Yasser &mdash; Data Analyst
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
