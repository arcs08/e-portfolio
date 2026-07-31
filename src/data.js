// ============================================================
//  All portfolio content lives here. Edit this one file to
//  update text, projects, links, etc.
// ============================================================

export const profile = {
  name: 'Anand Anto',
  roles: ['Aspiring Data Scientist', 'Machine Learning Practitioner', 'Data Mining & Analytics', 'ex-Banking Analyst'],
  location: 'Victoria, BC',
  email: 'mranandanto@gmail.com',
  phone: '+16729743009',
  github: 'https://github.com/arcs08',
  linkedin: 'https://www.linkedin.com/in/anand-anto8',
  kicker: 'Master of Engineering in Applied Data Science · UVic',
  heroImg: 'anand-hero.jpg',
  avatarImg: 'anand-avatar.jpg',
  stats: [
    { n: '11', l: 'PROJECTS' },
    { n: '2', l: 'DEGREES' },
    { n: '2+ yrs', l: 'ANALYST XP' },
  ],
}

export const about = [
  "I'm a **graduate student** and aspiring **Data Scientist**, currently pursuing my **Master of Engineering in Applied Data Science (MADS)** at the University of Victoria, with a strong focus and expertise in **data science and machine learning**. I work comfortably across the whole data workflow, from cleaning and preparing messy real-world data to engineering features, building and tuning models, and presenting results clearly enough that they hold up to tough questions.",
  "Before starting my Master's, I spent two years working in the **banking industry as an analyst**, where I analyzed financial data, profiled credit risk, and tracked transaction anomalies for fraud and anti-money-laundering, while also looking after the administrative side of running a branch. It was high-stakes, compliance-heavy work that carries over directly into analytics. At UVic I now work as a **Tutor TA for Numerical Analysis** and help coordinate the department's testing lab, and I'm currently focused on deepening my skills in **data science** itself, while exploring **cloud computing** alongside.",
  "What ties my projects together is a simple preference: I enjoy the parts other people tend to skip. The careful data work and the honest evaluation matter more to me than a number that just happens to look good on a slide.",
]

export const infoCard = [
  ['role', '"Aspiring DS"'],
  ['degree', '"MEng · MADS"'],
  ['based', '"Victoria, BC"'],
  ['expertise', '"Data Science & ML"'],
  ['learning', '"Exploring Cloud"'],
  ['status', '"co-op / full-time"'],
]

export const skills = [
  { h: 'Languages', items: ['Python', 'C / C++', 'Java', 'SQL', 'R', 'LaTeX'] },
  { h: 'Machine Learning', items: ['scikit-learn', 'Ensembles', 'Neural Networks', 'Bayesian Networks', 'Simulated Annealing', 'Class Imbalance'] },
  { h: 'Data & Systems', items: ['pandas', 'NumPy', 'PySpark', 'ETL', 'DBMS', 'Feature Engineering'] },
  { h: 'Statistics', items: ['Descriptive Statistics', 'Hypothesis Testing', 'Regression Analysis', 'ANOVA', 'Bayesian Inference', 'Probability & Distributions', 'A/B Testing', 'Confidence Intervals', 'Correlation', 'Chi-Square Test', 'Kruskal-Wallis', "Cramér's V", 'FDR Control', 'Pattern Recognition'] },
  { h: 'Analysis & Viz', items: ['matplotlib', 'seaborn', 'ROC / PR', 'Data Analysis', 'Reporting'] },
  { h: 'Cloud & Tools', items: ['Cloud Computing', 'Git', 'Jupyter', 'Hugging Face', 'Project Management'] },
]

// size: 'feat' (span 4), 'wide' (span 3), or default (span 2)
export const projects = [
  {
    idx: '/01', cat: '2026', tag: 'ml', size: 'feat',
    title: 'ThresholdX · Cost-Sensitive Churn Ensemble',
    sub: 'simulated annealing · Bayesian network',
    desc: 'A telco churn system (7,043 customers) that blends Logistic Regression, Decision Tree, Random Forest, and SVM. Simulated annealing tunes the ensemble weights and decision threshold against a 5·FN + FP cost function. Instrumenting the pipeline surfaced two silent label-alignment bugs and a biased baseline, and fixing them honestly turned out to beat the flashier headline number.',
    res: '▸ Lowest cost (672) and best F1 (0.507) of every system tested',
    tags: ['Python', 'scikit-learn', 'Bayesian nets', 'SA'],
  },
  {
    idx: '/02', cat: '2026', tag: 'ds', size: 'wide',
    title: 'SkillBridge · Canadian Career Navigator',
    sub: 'data mining · recommendation · ETL',
    desc: 'Mines four fragmented public labour-market sources (roughly 175k Canadian LinkedIn postings, the OaSIS skills taxonomy, COPS 10-year projections, and the federal Job Bank) and turns them into personalised career guidance. It brings together five machine-learning problem families: cold-start recommendation, imbalanced classification, regression, and multi-label skill extraction.',
    res: '▸ Validated ETL joining LinkedIn, OaSIS, COPS, and Job Bank',
    tags: ['Python', 'pandas', 'Recommender', 'Multi-label'],
  },
  {
    idx: '/03', cat: '2026', tag: 'ds', size: 'wide',
    title: 'Counting the Cost of the Coding Machines',
    sub: 'empirical software engineering · big data',
    desc: "An empirical study of AI coding agents (Codex, Copilot, Cursor, Devin, Claude Code) over the AIDev dataset, roughly 1M pull requests across 116k repositories. Does running several agents in one repo change PR outcomes and reviewer effort? My part was the file-overlap analysis and the paper writing, using χ², Kruskal-Wallis, Cliff's δ, Cramér's V, and FDR correction.",
    res: '▸ Pilot finding: merge rate drops from 85% to 58% as agents rise from 1 to 5',
    tags: ['Python', 'Stats', 'Hugging Face', 'MSR'],
  },
  {
    idx: '/04', cat: '2026', tag: 'ml', size: '',
    title: 'Marine Heatwave Detection',
    sub: 'time-series · geoscience ML',
    desc: 'An end-to-end pipeline that pulls NOAA sea-surface-temperature data, labels marine heatwaves using the Hobday et al. (2016) definition (SST above the climatological 90th percentile for at least 5 consecutive days), engineers temporal features, and trains a classifier. A single command runs the whole flow, from download to detection to features to training to plots.',
    res: '▸ Reproducible 4-stage pipeline from raw NOAA data to a trained classifier',
    tags: ['Python', 'scikit-learn', 'NOAA', 'Time-series'],
  },
  {
    idx: '/05', cat: '2026', tag: 'sys', size: '',
    title: 'PSCAN · Cybercrime Vulnerability Clustering',
    sub: 'distributed computing · graph clustering',
    desc: 'Distributed structural graph clustering (PSCAN.mr, a parallel SCAN via MapReduce) in Apache PySpark, built to find demographic vulnerability clusters in cybercrime-victimisation data. Rather than treating attributes in isolation like prior regression studies, it clusters on combinations of factors to surface specific victim profiles.',
    res: '▸ Parallel SCAN on a 5,000-record graph, benchmarked across experiments',
    tags: ['PySpark', 'Spark', 'Graph clustering', 'MapReduce'],
  },
  {
    idx: '/06', cat: '2026', tag: 'research', size: '',
    title: 'Scaling Laws vs. Information Theory',
    sub: 'research critique · information theory',
    desc: 'A research project that puts AI "scaling laws" on trial using information theory that predates modern AI. The central tool is the Data Processing Inequality, which says processing can never increase the information data carries about its source, backed by Shannon source coding and Kolmogorov complexity. The thesis: scale extracts latent structure but cannot create information that was never there.',
    res: '▸ "A bigger photocopier is still a photocopier"',
    tags: ['Information theory', 'DPI', 'Shannon', 'Writing'],
  },
  {
    idx: '/07', cat: '2026', tag: 'ml', size: '',
    title: 'Unsupervised Recommender Systems',
    sub: 'clustering · PCA · recommendation',
    desc: "Built three course-recommendation systems from different angles: an interest-score recommender over user-profile and course-genre matrices, a course-similarity-matrix recommender, and a clustering-based recommender using K-means and PCA over group members' enrollment history.",
    res: '▸ Three complementary recommender approaches compared',
    tags: ['Python', 'K-means', 'PCA', 'Similarity'],
  },
  {
    idx: '/08', cat: '2026', tag: 'ml', size: '',
    title: 'Supervised Recommender Systems',
    sub: 'neural networks · regression',
    desc: 'Predicted course ratings with neural networks that learn latent user and item features at the same time. Course-interaction feature vectors feed a regression model that estimates numerical rating scores, predicting whether a student will audit or complete a course.',
    res: '▸ Neural latent-factor model predicting audit vs. complete',
    tags: ['Python', 'Neural nets', 'Regression', 'Latent factors'],
  },
  {
    idx: '/09', cat: '2023', tag: 'web', size: '',
    title: 'Blockchain Confidential Data-Sharing Platform',
    sub: 'decentralized app · cryptography',
    desc: 'A decentralized application for secure chat, confidential file sharing, and encrypted information storage. It uses blockchain principles to guarantee data integrity, privacy, and accountability across parties that do not fully trust each other.',
    res: '▸ Integrity, privacy, and accountability by design',
    tags: ['Blockchain', 'Encryption', 'DApp', 'Security'],
  },
  {
    idx: '/10', cat: '2022', tag: 'web', size: '',
    title: 'Emergency Indoor Navigation System',
    sub: 'location-aware web app · real-time mapping',
    desc: "A location-aware web application that detects a user's position during emergencies and routes them to the nearest exit or safe point, with a focus on getting the real-time indoor mapping and location-tracking logic right.",
    res: '▸ Real-time indoor routing to the nearest safe exit',
    tags: ['Web', 'Geolocation', 'Routing', 'Real-time'],
  },
  {
    idx: '/11', cat: '2021', tag: 'web', size: '',
    title: 'Car Rental Platform',
    sub: 'Java · backend logic',
    desc: 'A Java-based system that lets users list and rent vehicles, with extras like emergency assistance. The backend logic handles vehicle availability, user verification, and rental tracking.',
    res: '▸ Availability, verification, and rental tracking',
    tags: ['Java', 'Backend', 'OOP', 'CRUD'],
  },
]

export const filters = [
  { f: 'all', label: 'All' },
  { f: 'ml', label: 'Machine Learning' },
  { f: 'ds', label: 'Data Science' },
  { f: 'sys', label: 'Distributed Systems' },
  { f: 'web', label: 'Web & Blockchain' },
  { f: 'research', label: 'Research' },
]

export const experience = [
  {
    h: 'Tutor TA · Numerical Analysis',
    org: 'University of Victoria · Dept. of Computer Science Engineering',
    when: 'Victoria, Canada',
    p: "Tutor for Numerical Analysis, supporting students with numerical methods, algorithms, and problem-solving. I also coordinate the department's testing lab facility, overseeing scheduling, setup, and smooth day-to-day operation.",
  },
  {
    h: 'Lab TA · Design Engineering',
    org: 'University of Victoria · Victoria, Canada',
    when: 'Jan 2026 – Apr 2026',
    p: 'Facilitated weekly design labs, coached students through hands-on design tasks and professional documentation, and coordinated with professors and TAs on consistent instruction and grading standards.',
  },
  {
    h: 'Assistant Manager',
    org: 'South Indian Bank · Kerala, India',
    when: 'Oct 2023 – Nov 2025',
    p: 'Analyzed customer financial data for portfolio management, investment planning, and risk profiling. Supported fraud detection and AML by tracking transaction anomalies, maintained structured reporting of high-value client interactions, and supervised branch operations and clerical staff.',
  },
]

export const education = [
  {
    h: 'Master of Engineering in Applied Data Science (MADS)',
    org: 'University of Victoria · Victoria, Canada',
    when: '2026 – 2027',
    courses: ['Data Analysis & Pattern Recognition', 'Applied Data Analysis', 'Optimization for ML', 'Systems for Massive Datasets', 'Algorithms & Data Models', 'Data Mining'],
  },
  {
    h: 'B.Tech, Computer Science Engineering',
    org: 'APJ Abdul Kalam University · Kerala, India',
    when: '2019 – 2023',
    courses: ['Machine Learning', 'Design Engineering', 'Data Structures & Algorithms', 'DBMS', 'Computer Networks', 'Software Engineering', 'Cloud Computing', 'Network Security'],
  },
]

export const certs = [
  { ic: '◆', t: 'IBM Machine Learning · Basics to Advanced' },
  { ic: '◆', t: 'Mathematics for ML & Data Science · Coursera' },
  { ic: '◆', t: 'Python Programming Certificate · PerfectPlanB' },
  { ic: '★', t: 'Member · Victoria Data Society (VDS)' },
  { ic: '★', t: 'Judge · Vancouver Island Regional Science Fair (VIRSF)' },
  { ic: '★', t: 'National Finalist · Robotics, IIT Bombay' },
  { ic: '★', t: 'University Lead · "Finding Kalam" Innovation Contest' },
  { ic: '★', t: 'Placement Representative · APJ Abdul Kalam Univ.' },
  { ic: '◆', t: 'UI/UX Bootcamp · Completion' },
  { ic: '★', t: 'Runner-Up · Talent Competition, Extramarks' },
]
