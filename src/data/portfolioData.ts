import { SkillItem, ProjectItem, EducationItem, CertificationItem, LeadershipItem } from '../types';

export const PERSONAL_INFO = {
  firstName: 'AHMED',
  lastName: 'YASSER',
  role: 'Data Analyst',
  subRole: 'Problem Solver & Analytics Specialist',
  email: 'ahmedyasser5902@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ahmedd-yasserr/',
  github: 'https://github.com/ahmedyasseerr',
  university: 'Faculty of Computers and Artificial Intelligence, Beni Suef University',
  degreeStatus: 'Bachelor’s degree student in Information Systems',
  tagline: 'I help people finding insights through data',
  summary:
    'Information Systems student at Beni Suef University and Data Analysis Scholar at the Digital Egypt Pioneers Initiative (DEPI). Proven experience handling high-volume production datasets (including 2M+ transaction records), building automated ETL routines with Python & Selenium, designing robust analytical models, and delivering decision-driving Power BI dashboards powered by advanced DAX calculations.'
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python (Pandas / NumPy)',
    category: 'Languages & Querying',
    proficiency: 92,
    experienceYears: 2.5,
    projectCount: 6,
    topTools: ['Pandas', 'NumPy', 'Matplotlib', 'Feature Engineering']
  },
  {
    id: 'sql',
    name: 'SQL & Relational Databases',
    category: 'Languages & Querying',
    proficiency: 90,
    experienceYears: 2.5,
    projectCount: 8,
    topTools: ['PostgreSQL', 'MySQL', 'CTEs', 'Window Functions']
  },
  {
    id: 'powerbi',
    name: 'Power BI & DAX Modeling',
    category: 'BI & Visualization',
    proficiency: 94,
    experienceYears: 2.0,
    projectCount: 5,
    topTools: ['Star Schema', 'DAX Measures', 'Power Query M', 'Interactive KPIs']
  },
  {
    id: 'excel-vba',
    name: 'Excel VBA & UserForms',
    category: 'Automation & Tools',
    proficiency: 88,
    experienceYears: 2.0,
    projectCount: 4,
    topTools: ['VBA Macros', 'UserForms', 'Event Handlers', 'Sheet Automation']
  },
  {
    id: 'selenium',
    name: 'Selenium WebDriver (Chrome)',
    category: 'Automation & Tools',
    proficiency: 85,
    experienceYears: 1.5,
    projectCount: 3,
    topTools: ['Headless Chrome', 'DOM Automation', 'Form Sync', 'Web Scraping']
  },
  {
    id: 'data-cleaning',
    name: 'Data Cleaning & Preprocessing',
    category: 'Data Engineering & Methods',
    proficiency: 95,
    experienceYears: 2.5,
    projectCount: 9,
    topTools: ['Outlier Detection', 'Null Imputation', 'Type Casting', 'Chunking']
  },
  {
    id: 'eda',
    name: 'Exploratory Data Analysis (EDA)',
    category: 'Data Engineering & Methods',
    proficiency: 90,
    experienceYears: 2.5,
    projectCount: 7,
    topTools: ['Hypothesis Testing', 'Correlation Matrices', 'Trend Discovery']
  },
  {
    id: 'git',
    name: 'Git & Version Control',
    category: 'Automation & Tools',
    proficiency: 82,
    experienceYears: 2.0,
    projectCount: 6,
    topTools: ['GitHub', 'Branching', 'Repo Management']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fawry-analysis',
    title: 'Fawry Transactions Data Analysis',
    subtitle: 'End-to-End Analytics on 2,000,000+ Retail Financial Transactions',
    date: '2024',
    category: 'Financial Analytics & BI',
    businessProblem:
      'Digital payment operators process millions of micro-transactions daily. The client needed to audit transaction success vs. failure rates across merchants, identify recurring payment gateway bottlenecks, detect peak hourly surges, and provide management with sub-second visual slice-and-dice capabilities across a massive two-million record raw dataset without experiencing query lag.',
    methodology: [
      'Engineered an automated data extraction and cleaning pipeline in Python, handling 2,000,000 rows with memory-efficient chunking, outlier removal, and datetime parsing.',
      'Created bespoke feature engineering for transaction velocity, customer segmentation cohorts, and merchant revenue categorization.',
      'Constructed a resilient star-schema analytical model inside Power BI with optimized one-to-many relationship structures.',
      'Formulated complex DAX measures including dynamic time-intelligence (YTD, MoM growth), running transaction totals, and payment failure rate diagnostics.',
      'Built an executive dashboard enabling stakeholders to drill through from regional merchant hierarchies directly down to terminal-level failure causes.'
    ],
    keyMetrics: [
      { label: 'Records Processed', value: '2,000,000+' },
      { label: 'ETL Pipeline Memory Cut', value: '64%' },
      { label: 'DAX Measures Created', value: '25+' },
      { label: 'Dashboard Query Latency', value: '< 1.2s' }
    ],
    tags: ['Python', 'Power BI', 'DAX', 'Pandas', 'Data Cleaning', 'Feature Engineering', 'Financial Data'],
    githubUrl: 'https://github.com/ahmedyasseerr',
    previewType: 'fawry-bi'
  },
  {
    id: 'al-abqari-sms',
    title: 'Al-Abqari School Management System',
    subtitle: 'Administrative Desktop Software & Selenium Web Portal Automation',
    date: '2023 - 2024',
    category: 'Workflow Automation & Management',
    businessProblem:
      'School administrators were burdened with dozens of hours of manual, error-prone data entry: tracking student enrollments, teacher schedules, grade records, and repeatedly copying student records into external ministry web portals and internal bookkeeping spreadsheets.',
    methodology: [
      'Architected a comprehensive desktop management system in Microsoft Excel powered by robust VBA modular architecture and interactive UserForms.',
      'Integrated Selenium WebDriver for Google Chrome directly into VBA routines to automatically launch, authenticate, and populate external school web portals with student credentials and records.',
      'Enforced programmatic validation checks to prevent duplicate national IDs, format student phone numbers, and ensure referential integrity.',
      'Created automated report generation exporting cleanly formatted PDF grade rosters, attendance sheets, and teacher assignment rosters with one click.'
    ],
    keyMetrics: [
      { label: 'Manual Entry Time Saved', value: '85%' },
      { label: 'Data Accuracy Rate', value: '99.9%' },
      { label: 'Automated Form Syncs', value: '1,000+ Students' },
      { label: 'Tech Stack', value: 'VBA + Selenium' }
    ],
    tags: ['Excel VBA', 'Selenium WebDriver', 'Chrome Automation', 'UserForms', 'Process Automation', 'Data Integrity'],
    githubUrl: 'https://github.com/ahmedyasseerr',
    previewType: 'abqari-automation'
  },
  {
    id: 'awl-code-initiative',
    title: 'Awl Code — Educational Platform & Student Progress Analytics',
    subtitle: 'Initiative Teaching Programming & CS to Secondary Students',
    date: '2023 - Present',
    category: 'Community Leadership & Education',
    businessProblem:
      'Secondary school students in Egypt often lack accessible, structured foundational training in Computer Science and computational thinking. In addition to curriculum delivery, instructors needed a metric-driven method to assess student comprehension, assignment completion rates, and learning curves.',
    methodology: [
      'Founded and directed "Awl Code", authoring hands-on educational curricula in algorithms, programming fundamentals, and problem-solving.',
      'Conducted structured learning cohorts for secondary students, delivering practical lab sessions and coding exercises.',
      'Built custom analytics tracking spreadsheets to log weekly student submission velocity, topic quiz scores, and conceptual roadblocks to adapt pedagogical pacing.'
    ],
    keyMetrics: [
      { label: 'Role', value: 'Founder & Lead Instructor' },
      { label: 'Target Audience', value: 'Secondary Students' },
      { label: 'Curriculum Focus', value: 'CS & Programming' },
      { label: 'Student Completion', value: 'High Retention' }
    ],
    tags: ['Leadership', 'Computer Science', 'Curriculum Design', 'Student Analytics', 'Public Speaking'],
    githubUrl: 'https://github.com/ahmedyasseerr',
    previewType: 'awl-code'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Faculty of Computers and Artificial Intelligence, Beni Suef University',
    degree: 'Bachelor’s Degree in Information Systems',
    period: 'Undergraduate Student',
    details:
      'Rigorous foundational study in database management systems, data structures & algorithms, systems analysis & design, business intelligence, and software engineering principles.',
    badge: 'Undergraduate Degree'
  },
  {
    institution: 'Digital Egypt Pioneers Initiative (DEPI)',
    degree: 'Data Analysis Track Scholar',
    period: 'Professional Program',
    details:
      'Selective national program advancing practical competencies in end-to-end data analytics, advanced SQL, Python for data science, Power BI visualization, and business problem solving.',
    badge: 'DEPI Scholar'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'IBM Data Fundamentals Certificate',
    issuer: 'IBM',
    durationOrType: 'Professional Credential',
    status: 'Verified'
  },
  {
    title: '120-Hour Summer Training Course',
    issuer: 'ITIDA & NTI (National Telecommunication Institute)',
    durationOrType: '120 Contact Hours',
    status: 'Completed'
  }
];

export const LEADERSHIP_DATA: LeadershipItem = {
  role: 'Founder & Lead Instructor',
  initiative: 'Awl Code',
  description:
    'An educational initiative founded to teach programming and Computer Science fundamentals to secondary school students, equipping young minds with algorithmic thinking and technical confidence.',
  impact: 'Empowering future tech talent through structured curriculum, real coding challenges, and mentorship.'
};
