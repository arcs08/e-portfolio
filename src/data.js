// ============================================================
//  All portfolio content lives here. Edit this one file to
//  update text, projects, links, etc.
// ============================================================

export const profile = {
  name: 'Anand Anto',
  roles: ['Aspiring Data Scientist', 'Machine Learning Practitioner', 'Data Mining & Analytics', 'ex-Banking Analyst'],
  location: 'Victoria, BC',
  email: 'mranandanto@gmail.com',
  github: 'https://github.com/arcs08',
  linkedin: 'https://www.linkedin.com/in/anand-anto8',
  kicker: 'Master of Engineering in Applied Data Science · UVic',
  heroImg: 'anand-hero.jpg',
  avatarImg: 'anand-avatar.jpg',
  stats: [
    { n: '8', l: 'PROJECTS' },
    { n: '2', l: 'DEGREES' },
    { n: '2+ yrs', l: 'ANALYST XP' },
  ],
}

export const about = [
  "I'm a **graduate student** and aspiring **Data Scientist**, currently pursuing my **Master of Engineering in Applied Data Science (MADS)** at the University of Victoria, with a strong focus and expertise in **data science and machine learning**. I work comfortably across the whole data workflow, from cleaning and preparing messy real-world data to engineering features, building and tuning models, and presenting results clearly enough that they hold up to tough questions.",
  "Before starting my Master's, I spent two years working in the **banking industry as an analyst**, where I analyzed financial data, profiled credit risk, and tracked transaction anomalies for fraud and anti-money-laundering, while also looking after the administrative side of running a branch. It was high-stakes, compliance-heavy work that carries over directly into analytics. At UVic I now work as a **Tutor TA for Numerical Analysis** and help coordinate the department's testing lab, and I'm now moving into **AI and LLM engineering**, building **RAG and agentic systems** (LangChain, LangGraph, vector databases, the Claude API) while continuing to strengthen my data-science and cloud foundations.",
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
  { h: 'Languages', items: ['Python', 'SQL', 'C / C++', 'Java', 'R', 'LaTeX'] },
  { h: 'GenAI / LLM', items: ['Claude & OpenAI APIs', 'RAG', 'LangChain', 'LangGraph agents', 'Chroma vector DB', 'Embeddings', 'Prompt Engineering', 'MCP', 'RAG Evaluation'] },
  { h: 'Machine Learning', items: ['scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'Neural Networks', 'Ensembles', 'Isolation Forest', 'Autoencoders', 'Simulated Annealing', 'Bayesian Networks', 'Class Imbalance'] },
  { h: 'Data & Engineering', items: ['pandas', 'NumPy', 'PySpark / Spark', 'MapReduce', 'ETL', 'Feature Engineering', 'DBMS / SQL', 'Neo4j / Cypher', 'MinHash & LSH'] },
  { h: 'Statistics', items: ['Hypothesis Testing', 'ANOVA', 'Bayesian Inference', 'A/B Testing', 'χ²', 'Kruskal-Wallis', "Cliff's δ", "Cramér's V", 'FDR Control', 'Fairness Auditing'] },
  { h: 'Evaluation & Viz', items: ['ROC / PR', 'AUC', 'NDCG', 'RMSE', 'McNemar', 'matplotlib', 'seaborn', 'Report Writing'] },
  { h: 'Cloud & Tools', items: ['AWS (Cloud Practitioner)', 'Hugging Face', 'Git / GitHub', 'Jupyter', 'Project Management'] },
]

// tag drives the filter; cat shows on the card (year / status)
export const projects = [
  {
    cat: 'In Build', tag: 'genai',
    title: 'Chat with Your Documents · RAG Application',
    sub: 'RAG · LangChain · LangGraph agent',
    desc: 'An end-to-end retrieval-augmented generation app: it ingests PDFs, chunks and embeds them into a Chroma vector database, retrieves the most relevant passages, and answers in structured JSON with citations back to the source. A LangGraph agent layer falls back to web search when retrieval finds nothing relevant, and the system is scored on standard RAG metrics (faithfulness, answer relevancy, context precision and recall).',
    res: '▸ In build: shipping to GitHub and deploying live on Hugging Face Spaces',
    tags: ['Python', 'Claude API', 'LangChain', 'Chroma', 'LangGraph', 'MCP'],
  },
  {
    cat: '2026', tag: 'ml',
    title: 'Multi-Stage IoT Network Intrusion Detection',
    sub: 'two-stage cascade · class imbalance',
    desc: 'A two-stage intrusion-detection cascade for IoT traffic on the CIC IoT-DIAD 2024 dataset (205K packets, roughly 24:1 attack imbalance). An unsupervised anomaly filter (Isolation Forest or autoencoder) flags suspicious traffic for high recall, then a supervised soft-voting ensemble (Random Forest, XGBoost, SVM, MLP) confirms it and clears the false alarms.',
    res: '▸ Cut false positives 95.5% (448 to 20), precision 43.9% to 92.3%, F1 0.82 (McNemar p < 0.001)',
    tags: ['Isolation Forest', 'XGBoost', 'Ensemble', 'Python'],
  },
  {
    cat: '2026', tag: 'ml',
    title: 'ThresholdX · Cost-Sensitive Churn Ensemble',
    sub: 'simulated annealing · Bayesian network',
    desc: 'A churn ensemble that replaces the usual meta-classifier with an AI-search optimizer: simulated annealing tunes model weights to minimize an asymmetric 5·FN + FP business cost, with a Bayesian Belief Network for borderline cases. Built on IBM Telco churn (7,043 customers) and benchmarked against seven baselines.',
    res: '▸ About 35% lower error cost (672 vs 1037), F1 0.507 vs 0.386',
    tags: ['scikit-learn', 'Simulated Annealing', 'Bayesian nets', 'Python'],
  },
  {
    cat: '2026', tag: 'ds',
    title: 'SkillBridge · Canadian Career Recommender',
    sub: 'data mining · recommendation · ETL',
    desc: 'A career recommender that joins four fragmented Canadian public datasets (OaSIS, COPS, the Job Bank feed, and about 55,972 LinkedIn postings) across roughly 500 NOC codes into one reproducible pipeline with executable leakage assertions. It spans five ML tasks: cold-start recommendation, imbalanced classification, regression, multi-label extraction, and ranking, with a fairness audit built in.',
    res: '▸ Matrix factorization NDCG@10 0.890 (vs 0.566); fairness audit surfaced a significant 71% disparity across education tiers',
    tags: ['Matrix Factorization', 'pandas', 'ETL', 'Fairness'],
  },
  {
    cat: '2026', tag: 'ds',
    title: 'Merged Without Review · AI Coding-Agent Study',
    sub: 'empirical study · statistical rigor',
    desc: "A construct-validity study of AI coding-agent acceptance rates over the AIDev corpus of 33,596 pull requests from five agents (Codex, Copilot, Devin, Cursor, Claude Code). My part was the file-overlap analysis and the paper writing, using χ², Kruskal-Wallis, Cliff's δ, and Cramér's V with FDR correction. The finding: acceptance rate reflects a repository's review culture, not code quality.",
    res: '▸ 82.6% of PRs merged unreviewed; tool-outcome effect collapses (Cramér\'s V 0.322 to 0.105) once conditioned on human review',
    tags: ['Python', 'Statistics', 'Hugging Face', 'MSR'],
  },
  {
    cat: '2026', tag: 'sys',
    title: 'PSCAN · Cybercrime Vulnerability Clustering',
    sub: 'distributed computing · graph clustering',
    desc: 'A parallel structural graph-clustering pipeline (PSCAN.mr, SCAN via MapReduce) built end to end in Apache PySpark from MapReduce primitives. Each victim is a node in a weighted similarity graph over nine demographic and behavioural features; a parameter sweep and feature ablation show that single-factor analysis misses combinatorial risk.',
    res: '▸ 9 vulnerability clusters on a 5,000-node graph (55.8% cores, 21% hubs, 23.2% outliers)',
    tags: ['PySpark', 'Spark', 'MapReduce', 'Graph clustering'],
  },
  {
    cat: '2026', tag: 'ml',
    title: 'Marine Heatwave Detection',
    sub: 'time-series · optimization · imbalance',
    desc: 'An L2-regularized logistic-regression detector for marine heatwaves on 24 years of NOAA OISST data (8,761 daily samples, 7.3% positive), labelled by the Hobday et al. (2016) definition and optimized with L-BFGS-B. Handling class imbalance was the key: an unweighted baseline detected zero heatwaves at 92.7% accuracy.',
    res: '▸ AUC 0.9928 and 100% recall, where an unweighted baseline detected nothing',
    tags: ['scikit-learn', 'L-BFGS-B', 'NOAA', 'Python'],
  },
  {
    cat: '2026', tag: 'research',
    title: 'Scale Extracts, It Does Not Create',
    sub: 'research critique · information theory',
    desc: 'An information-theoretic analysis bounding LLM "emergent" capability using the Data Processing Inequality, Shannon source coding, and Fano\'s inequality: scale can extract structure already latent in the data but cannot create information that was never there. Corroborated with a controlled vision-language-model experiment and computational verification (entropy 6.99 to 2.65 bits per pixel).',
    res: '▸ Showed over 92% of claimed "emergent abilities" track discontinuous metrics',
    tags: ['Information Theory', 'DPI', 'Fano', 'LaTeX'],
  },
]

export const filters = [
  { f: 'ml', label: 'Machine Learning' },
  { f: 'genai', label: 'GenAI / LLM' },
  { f: 'ds', label: 'Data Science' },
  { f: 'sys', label: 'Distributed Systems' },
  { f: 'research', label: 'Research' },
  { f: 'all', label: 'All' },
]

export const experience = [
  {
    h: 'Tutor TA · Numerical Analysis',
    org: 'University of Victoria · Dept. of Computer Science Engineering',
    when: 'Victoria, Canada',
    p: "Tutor for Numerical Analysis, supporting students with numerical methods, algorithms, and problem-solving. I also coordinate the department's testing lab facility, overseeing scheduling, setup, and smooth day-to-day operation.",
  },
  {
    h: 'Teaching Assistant · Digital Design',
    org: 'University of Victoria · Victoria, Canada',
    when: 'Sept 2026 – Dec 2026',
    p: 'Teaching assistant for the Digital Design lab, helping students work through the exercises and debug their circuits in coordination with the course instructor. Hold office hours and grade lab deliverables, keeping marking consistent with the rubric.',
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
    h: 'B.Tech · Computer Science Engineering',
    org: 'APJ Abdul Kalam University · Kerala, India',
    when: '2019 – 2023',
    courses: ['Machine Learning', 'Design Engineering', 'Data Structures & Algorithms', 'DBMS', 'Computer Networks', 'Software Engineering', 'Cloud Computing', 'Network Security'],
  },
]

export const certs = [
  { ic: '◆', t: 'AWS Certified Cloud Practitioner (CLF-C02) · 2026' },
  { ic: '◆', t: 'IBM Data Engineering Professional Certificate · in progress' },
  { ic: '◆', t: 'Anthropic · Building with the Claude API · in progress' },
  { ic: '◆', t: 'Anthropic · Introduction to MCP · in progress' },
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
