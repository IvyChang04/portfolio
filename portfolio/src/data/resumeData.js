// All data sourced verbatim from resume.md

export const education = [
  {
    school: 'California State University, Fullerton',
    degree: 'M.S, Computer Science',
    gpa: '3.93/4.0',
    highlights: [
      'Blue Team in Offensive Security Society (OSS) at CSUF',
      'WRCCDC (Western Regional Collegiate Cyber Defense Competition)',
    ],
  },
  {
    school: 'National Central University',
    degree: 'B.S, Computer Science and Information Engineering',
    gpa: '3.94/4.0',
    highlights: [
      "Judge's Award (Special Project Competition)",
      '2nd place (Future Network App Contest)',
    ],
  },
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'Sweep Digital Inc.',
    time: 'Jul. 2025 — Present',
    location: 'Remote, New Jersey',
    description: 'Led the architecture and development of an AI-powered full-stack analytics platform, delivering a cohesive user experience across a React browser extension and a React Native mobile application. A core focus of this role was engineering an event-driven Retrieval-Augmented Generation (RAG) system utilizing Supabase edge functions, message queues (pgmq), and Google Cloud Run. This complex pipeline successfully transformed over 30,000 raw browsing events via GPT-5 into structured psychological insights for a live beta group. To ensure enterprise scalability and cost-efficiency, I also designed a context-optimization layer using a fine-tuned SetFit model, compressing input data by over 80% prior to LLM ingestion to drastically reduce latency and API overhead.',
    tags: ['React', 'React Native', 'Supabase', 'GPT-5', 'Cloud Run', 'pgmq', 'SetFit', 'RAG Archetecture'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Eumius Inc.',
    time: 'Jan. 2024 — Aug. 2024',
    location: 'Los Angeles, California',
    description: 'Spearheaded the development of core features for a highly sensitive caregiving mobile application, taking full ownership of critical modules including secure user authentication, complex task scheduling, and medical record management. To optimize mobile performance for users in varying network conditions, I re-architected the frontend-to-backend integration using GraphQL. This strategic implementation eliminated data over-fetching and successfully reduced network payload sizes by 50%, resulting in a significantly smoother and faster user experience. Operating in a fast-paced environment, I rapidly adapted to this new mobile tech stack, delivering robust, production-ready code within the initial two-week development cycle.',
    tags: ['React Native', 'GraphQL', 'Xcode', 'Mobile Development'],
  },
];

export const projects = [
  {
    title: 'GPU Acceleration for Administrative Role-Based Access Control',
    description:
      'Conducted academic research focused on leveraging GPU acceleration to significantly enhance the performance and scalability of Administrative Role-Based Access Control (ARBAC) policy analysis. Designed and implemented custom, GPU-optimized algorithms to parallelize complex access control evaluations, drastically reducing computational bottlenecks and execution time associated with verifying large-scale enterprise security policies.',
    tech: ['C/C++', 'CUDA'],
  },
  {
    title: 'Parametric Spectral Clustering (PSC) Library',
    description:
      'Developed a novel Parametric Spectral Clustering (PSC) library designed to overcome the traditional limitations of spectral clustering. This versatile framework significantly reduces memory consumption and improves computational efficiency for large datasets. Crucially, it introduces online learning capabilities, allowing the clustering model to dynamically update with new data streams without the need for expensive full retraining.',
    tech: ['Pytorch', 'Numpy', 'SciPy', 'Pypi'],
  },
  {
    title: 'WRCCDC Invitational Network Environment',
    description:
      'A fully functional mock enterprise network architected to simulate a realistic SMB infrastructure for competitive cybersecurity exercises. This environment features a multi-machine setup including a core router and DNS server, a web server hosting an intentionally misconfigured PHP application, and a distributed database server, providing a complex and realistic attack surface for red/blue team engagement.',
    tech: ['Alpine Linux', 'BIND9', 'Fedora', 'PHP', 'MySQL'],
  },
  {
    title: 'Tech Trend Tracker (TTT)',
    description:
      'An insight platform designed to bridge the gap between job seekers and Applicant Tracking Systems (ATS). The platform scrapes real-time job postings from major boards like LinkedIn and Indeed, processes the data through a distributed big data pipeline to extract in-demand skills via LLMs, and visualizes the trends to help developers optimize their resumes for specific roles.',
    tech: ['Go', 'PostgreSQL', 'HTMX', 'JavaScript', 'PySpark', 'GPT-5 API'],
  },
  {
    title: 'Skin Tone Analysis',
    description:
      'An end-to-end machine learning pipeline that provides personalized skin care and cosmetic recommendations through real-time computer vision analysis. The application integrates face segmentation to isolate skin regions and employs k-means clustering to determine precise color profiles. By leveraging Gemini-Nano for on-device LLM inference, the platform delivers intelligent, adaptive feedback locally—ensuring total user privacy, zero cloud latency, and full offline functionality.',
    tech: ['React', 'JavaScript', 'MediaPipe', 'Gemini-Nano', 'Vercel'],
  },
  {
    title: 'Launch Footprint — 3D Geospatial Emissions Visualization',
    description:
      'An interactive, 3D globe-based web platform designed to track and display the estimated carbon footprint of historical rocket launches. The application maps geospatial data to a custom-rendered WebGL globe, utilizing dynamically scaled, color-coded rings to represent greenhouse gas emission levels. By integrating a Flask REST API for data processing with a React-based Three.js frontend, the tool transforms complex environmental datasets into an intuitive narrative, allowing users to visually explore the hidden climate costs of global space exploration.',
    tech: ['React', 'Three.js', 'WebGL', 'Python', 'Flask', 'REST API'],
  },
  {
    title: 'Few-Shot Chinese Font Generator',
    description:
      'Designed and trained a custom Generative Adversarial Network (GAN) to automate and streamline the traditionally labor-intensive process of Chinese typography design. The model utilizes a few-shot learning architecture, requiring only a minimized dataset of reference characters to accurately learn and generate an entire, cohesive set of Chinese characters matching the target stylistic font.',
    tech: ['Pytorch', 'Deep Learning', 'GAN', 'Computer Vision'],
  },
  {
    title: 'Discord PM Bot',
    description:
      'A Discord bot that streamlines task and project management directly within Discord servers. Users can create, assign, and update tasks using slash commands, with interactive buttons to track status changes (Todo → In Progress → Done). The bot is fully database-backed for persistent data storage.',
    tech: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Discord API'],
  },
  {
    title: 'Packet Sniffer',
    description:
      'A packet sniffing tool written in C++ that captures and analyzes network packets in real-time on specified interfaces. The application parses Ethernet, IPv4, IPv6, TCP, UDP, ICMP, and ARP headers, logging detailed packet information including protocol types, source/destination addresses, ports, and packet size to both console and file for network analysis and debugging.',
    tech: ['C++', 'cmake', 'libcap', 'cxxopts'],
  },
  {
    title: 'UML Editor',
    description:
      'A desktop GUI application engineered to create and manage Unified Modeling Language (UML) diagrams. Architected with a strict adherence to core object-oriented design patterns, the editor features a fully interactive canvas that allows users to generate class and use-case nodes, draw complex relationship lines (composition, generalization, association), group/ungroup elements, and manipulate objects in real time.',
    tech: ['Java Swing', 'OOD Patterns'],
  },
  {
    title: 'Automated System Testing Pipeline',
    description:
      'Engineered a comprehensive end-to-end automated testing suite for a full-stack blog application. The project involved designing both white-box and black-box test cases to evaluate system reliability, building a custom test agent for automated execution, and seamlessly integrating the testing framework into a GitLab CI/CD pipeline to ensure continuous integration and software validation.',
    tech: ['Vue.js', 'MongoDB', 'GitLab CI/CD', 'Selenium'],
  },
  {
    title: 'Mini-LISP Interpreter',
    description:
      'Engineered a custom interpreter for Mini-LISP, a functional subset of the LISP programming language. Built utilizing Lex for lexical analysis and Yacc for abstract syntax tree parsing, the interpreter successfully processes and evaluates core language constructs. The system implements rigorous syntax validation, complex numerical and logical operations, conditional control flow (if expressions), and dynamic variable binding, demonstrating a strong foundational understanding of compiler design and execution environments.',
    tech: ['Lex', 'Yacc', 'LISP', 'Compiler Theory'],
  },
  {
    title: 'BMP to ASCII Art Converter',
    description:
      'Engineered a low-level image processing utility entirely in x86 Assembly language that parses and converts .bmp photo files into grayscale ASCII art for terminal display. The application directly manipulates binary file structures to load image data into memory, performs mathematical matrix transformations to flip the image, and maps pixel luminance values to a custom ASCII character set for terminal rendering, demonstrating a deep understanding of memory management and system-level programming.',
    tech: ['x86 Assembly', 'WinDbg', 'System Architecture'],
  },
];

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'Go', 'JavaScript/TypeScript', 'C/C++', 'Java', 'SQL', 'HTML/CSS'],
    span: 2,
  },
  {
    name: 'Frontend & Mobile',
    skills: ['React', 'React Native', 'Tailwind CSS', 'HTMX', 'Android Studio', 'Xcode'],
    span: 2,
  },
  {
    name: 'Backend & Database',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'Supabase', 'Firebase', 'RabbitMQ', 'pgmq'],
    span: 1,
  },
  {
    name: 'Cloud & Devops',
    skills: ['Docker', 'GCP', 'Cloud Run', 'AWS', 'GitLab CI/CD', 'Linux', 'GitHub Action'],
    span: 1,
  },
  {
    name: 'AI & Data Processing',
    skills: ['PyTorch', 'Event-driven RAG', 'Llama 3', 'SetFit', 'MCP', 'AI Workflows & Skills'],
    span: 1,
  },
  {
    name: 'Security & HPC',
    skills: ['CompTIA Security+', 'CUDA', 'Access Control', 'Wireshark', 'Linux Machine Hardening'],
    span: 1,
  },
];
