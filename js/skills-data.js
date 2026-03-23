/* Student Learning Roadmaps - Skills Data (Pakistan Market) */
const skills = [
  {
    id: "wp-theme",
    name: "WordPress Custom Theme Development",
    category: "Web Development",
    difficulty: "medium",
    salaryPKR: "80k–200k",
    freelanceRate: "$20–$60/hr",
    whyLearn: "Massive freelance demand on Upwork & Fiverr. Local agencies constantly need custom themes. Pakistan has 50k+ WordPress freelancers earning solid income.",
    overview: "WordPress powers 43% of the web. Custom theme development means converting HTML/CSS designs into fully functional WordPress themes using PHP, hooks, template hierarchy, and the loop. You'll build child themes, custom post types, and plugin integrations.",
    roadmap: [
      { title: "HTML / CSS / JS", duration: "3 weeks", desc: "Semantic HTML5, CSS Flexbox/Grid, basic JavaScript interactions", icon: "🌐" },
      { title: "PHP Basics", duration: "2 weeks", desc: "Variables, arrays, functions, loops, OOP fundamentals", icon: "🐘" },
      { title: "WordPress Core", duration: "2 weeks", desc: "Installation, dashboard, posts, pages, template hierarchy", icon: "📝" },
      { title: "Theme Structure", duration: "2 weeks", desc: "index.php, style.css header, functions.php, wp_head/footer hooks", icon: "🏗️" },
      { title: "The Loop & Templates", duration: "2 weeks", desc: "Custom page templates, the WP loop, conditional tags", icon: "🔄" },
      { title: "Advanced Hooks & Filters", duration: "3 weeks", desc: "add_action, add_filter, custom post types, taxonomies", icon: "⚙️" },
      { title: "Child Themes & Plugins", duration: "2 weeks", desc: "Child theme development, plugin integration, WooCommerce basics", icon: "🔌" }
    ],
    demand: {
      jobsMonthly: 600,
      freelancePercent: 85,
      topPlatforms: ["Upwork", "Fiverr", "Freelancer.pk"],
      growth: "+22% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Faisalabad"]
    },
    resources: [
      { type: "free", title: "WordPress Theme Dev – Full Course", url: "https://www.youtube.com/watch?v=2Gy5nN5XNDI", platform: "YouTube", duration: "8 hrs" },
      { type: "free", title: "The Odin Project – Web Foundations", url: "https://www.theodinproject.com/", platform: "The Odin Project", duration: "Self-paced" },
      { type: "free", title: "WordPress.org Official Docs", url: "https://developer.wordpress.org/themes/", platform: "WordPress.org", duration: "Self-paced" },
      { type: "paid", title: "Complete WordPress Developer Course", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Advanced WordPress Theme Development", url: "https://www.coursera.org/", platform: "Coursera", price: "PKR 3,000/mo" }
    ]
  },
  {
    id: "react",
    name: "React.js Frontend Development",
    category: "Web Development",
    difficulty: "medium",
    salaryPKR: "120k–350k",
    freelanceRate: "$30–$80/hr",
    whyLearn: "React is the #1 demanded frontend skill in Pakistan's tech industry. Companies like Arbisoft, Netsol, and 10Pearls actively hire React developers. Excellent for remote jobs at US/EU companies.",
    overview: "React is a JavaScript library for building modern, component-based user interfaces. You'll learn JSX, state management, hooks, routing, and connect to REST APIs to build production-grade web apps.",
    roadmap: [
      { title: "JavaScript ES6+", duration: "3 weeks", desc: "Arrow functions, destructuring, modules, async/await, Promises", icon: "✨" },
      { title: "React Fundamentals", duration: "3 weeks", desc: "Components, JSX, props, state, event handling, conditional rendering", icon: "⚛️" },
      { title: "React Hooks", duration: "2 weeks", desc: "useState, useEffect, useContext, useRef, custom hooks", icon: "🪝" },
      { title: "React Router", duration: "1 week", desc: "Client-side routing, dynamic routes, protected routes", icon: "🗺️" },
      { title: "State Management", duration: "2 weeks", desc: "Context API, Redux Toolkit, Zustand basics", icon: "🗄️" },
      { title: "API Integration", duration: "2 weeks", desc: "Fetch API, Axios, REST APIs, error handling, loading states", icon: "🔗" },
      { title: "Testing & Deployment", duration: "2 weeks", desc: "Jest, React Testing Library, Vercel/Netlify deployment", icon: "🚀" }
    ],
    demand: {
      jobsMonthly: 1200,
      freelancePercent: 60,
      topPlatforms: ["LinkedIn", "Upwork", "Indeed.pk"],
      growth: "+45% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Peshawar"]
    },
    resources: [
      { type: "free", title: "React Official Tutorial", url: "https://react.dev/learn", platform: "React.dev", duration: "Self-paced" },
      { type: "free", title: "Full React Course – FreeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", platform: "YouTube", duration: "10 hrs" },
      { type: "free", title: "The Odin Project – React Path", url: "https://www.theodinproject.com/paths/full-stack-javascript", platform: "The Odin Project", duration: "Self-paced" },
      { type: "paid", title: "React – The Complete Guide (Hooks, Redux)", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Frontend Masters – React Path", url: "https://frontendmasters.com/", platform: "Frontend Masters", price: "$39/mo" }
    ]
  },
  {
    id: "python",
    name: "Python & Django Web Development",
    category: "Backend Development",
    difficulty: "medium",
    salaryPKR: "100k–300k",
    freelanceRate: "$25–$70/hr",
    whyLearn: "Python is the world's most versatile language. Django powers Instagram, Disqus, and thousands of SaaS apps. Pakistani devs use it heavily for automation, data pipelines, and web backends.",
    overview: "Python's clean syntax makes it ideal for beginners and experts alike. Django is the batteries-included web framework that lets you build secure, scalable web applications rapidly. Covers ORM, authentication, REST APIs with DRF.",
    roadmap: [
      { title: "Python Fundamentals", duration: "3 weeks", desc: "Syntax, data types, OOP, file I/O, error handling", icon: "🐍" },
      { title: "Python Intermediate", duration: "2 weeks", desc: "Decorators, generators, comprehensions, standard library", icon: "📚" },
      { title: "Django Basics", duration: "3 weeks", desc: "MVT pattern, models, views, templates, URL routing", icon: "🌿" },
      { title: "Django ORM & DB", duration: "2 weeks", desc: "Models, migrations, querysets, PostgreSQL integration", icon: "🗃️" },
      { title: "Authentication & Security", duration: "2 weeks", desc: "User auth, permissions, CSRF, session management", icon: "🔐" },
      { title: "Django REST Framework", duration: "3 weeks", desc: "Serializers, viewsets, JWT auth, API documentation", icon: "📡" },
      { title: "Deployment", duration: "1 week", desc: "Gunicorn, Nginx, AWS/DigitalOcean, Docker basics", icon: "☁️" }
    ],
    demand: {
      jobsMonthly: 800,
      freelancePercent: 55,
      topPlatforms: ["LinkedIn", "Upwork", "Glassdoor.pk"],
      growth: "+38% YoY",
      topCities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"]
    },
    resources: [
      { type: "free", title: "Python for Everybody – Dr. Chuck", url: "https://www.py4e.com/", platform: "py4e.com", duration: "Self-paced" },
      { type: "free", title: "Django Official Tutorial", url: "https://docs.djangoproject.com/en/stable/intro/tutorial01/", platform: "Django Docs", duration: "Self-paced" },
      { type: "free", title: "CS50 Web with Python & JS", url: "https://cs50.harvard.edu/web/", platform: "Harvard/edX", duration: "12 weeks" },
      { type: "paid", title: "Python & Django Full Stack Bootcamp", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Arbisoft Academy Python Track", url: "https://academy.arbisoft.com/", platform: "Arbisoft Academy", price: "PKR 15,000" }
    ]
  },
  {
    id: "seo",
    name: "SEO & Digital Marketing",
    category: "Digital Marketing",
    difficulty: "easy",
    salaryPKR: "60k–180k",
    freelanceRate: "$15–$50/hr",
    whyLearn: "Every business needs SEO. Pakistan's e-commerce boom (Daraz, local stores) drives massive demand. Easiest high-income skill to start – no coding needed. Fiverr Pakistan's top earning niche.",
    overview: "SEO (Search Engine Optimization) is optimizing websites to rank higher on Google. Covers on-page, off-page, technical SEO, keyword research, content strategy, and local SEO for Pakistani businesses.",
    roadmap: [
      { title: "SEO Fundamentals", duration: "1 week", desc: "How search engines work, crawling, indexing, ranking factors", icon: "🔍" },
      { title: "Keyword Research", duration: "1 week", desc: "Google Keyword Planner, Ubersuggest, search intent, competition analysis", icon: "🔑" },
      { title: "On-Page SEO", duration: "2 weeks", desc: "Title tags, meta descriptions, headings, image alt, internal linking", icon: "📄" },
      { title: "Technical SEO", duration: "2 weeks", desc: "Site speed, Core Web Vitals, schema markup, XML sitemaps, robots.txt", icon: "⚙️" },
      { title: "Off-Page & Link Building", duration: "3 weeks", desc: "Backlinks, guest posting, domain authority, local citations", icon: "🔗" },
      { title: "Content Strategy", duration: "2 weeks", desc: "Content marketing, blogging, E-E-A-T, topical authority", icon: "✍️" },
      { title: "Analytics & Reporting", duration: "1 week", desc: "Google Analytics 4, Search Console, rank tracking, client reports", icon: "📊" }
    ],
    demand: {
      jobsMonthly: 900,
      freelancePercent: 90,
      topPlatforms: ["Fiverr", "Upwork", "PeoplePerHour"],
      growth: "+30% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Multan"]
    },
    resources: [
      { type: "free", title: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", platform: "Google", duration: "Self-paced" },
      { type: "free", title: "Moz SEO Learning Center", url: "https://moz.com/learn/seo", platform: "Moz", duration: "Self-paced" },
      { type: "free", title: "Ahrefs SEO Course for Beginners", url: "https://ahrefs.com/academy/seo-training-course", platform: "Ahrefs Academy", duration: "2 hrs" },
      { type: "paid", title: "Complete SEO Bootcamp 2024", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "SEMrush Academy Advanced SEO", url: "https://www.semrush.com/academy/", platform: "SEMrush Academy", price: "PKR 8,000/yr" }
    ]
  },
  {
    id: "flutter",
    name: "Flutter Mobile App Development",
    category: "Mobile Development",
    difficulty: "medium",
    salaryPKR: "100k–280k",
    freelanceRate: "$25–$75/hr",
    whyLearn: "Flutter lets you build iOS + Android + Web from one codebase. Massive demand in Pakistan's growing startup ecosystem. Used by companies like Bykea, Careem, Airlift. Google-backed with 160k+ GitHub stars.",
    overview: "Flutter is Google's UI toolkit for building natively compiled, multi-platform apps from a single Dart codebase. You'll learn Dart, widgets, state management, Firebase integration, and publishing to app stores.",
    roadmap: [
      { title: "Dart Programming", duration: "2 weeks", desc: "Syntax, OOP, async/await, null safety, collections", icon: "🎯" },
      { title: "Flutter Widgets", duration: "3 weeks", desc: "Stateless/Stateful widgets, layout widgets, Material Design", icon: "🧩" },
      { title: "State Management", duration: "2 weeks", desc: "setState, Provider, Riverpod, GetX basics", icon: "🗄️" },
      { title: "Navigation & Routing", duration: "1 week", desc: "Navigator 2.0, GoRouter, deep linking", icon: "🗺️" },
      { title: "Firebase Integration", duration: "2 weeks", desc: "Auth, Firestore, Storage, Push Notifications (FCM)", icon: "🔥" },
      { title: "REST APIs", duration: "2 weeks", desc: "HTTP package, Dio, JSON parsing, local storage", icon: "🔗" },
      { title: "App Store Deployment", duration: "2 weeks", desc: "Play Store, App Store, signing, CI/CD with Codemagic", icon: "📱" }
    ],
    demand: {
      jobsMonthly: 700,
      freelancePercent: 65,
      topPlatforms: ["Upwork", "LinkedIn", "Toptal"],
      growth: "+55% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Peshawar"]
    },
    resources: [
      { type: "free", title: "Flutter Official Codelabs", url: "https://docs.flutter.dev/codelabs", platform: "Flutter.dev", duration: "Self-paced" },
      { type: "free", title: "Flutter Full Course – FreeCodeCamp", url: "https://www.youtube.com/watch?v=VPvVD8t02U8", platform: "YouTube", duration: "37 hrs" },
      { type: "free", title: "Dart Language Tour", url: "https://dart.dev/guides/language/language-tour", platform: "Dart.dev", duration: "Self-paced" },
      { type: "paid", title: "The Complete Flutter & Dart Developer", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Flutter + Firebase Course", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 2,000" }
    ]
  },
  {
    id: "nodejs",
    name: "Node.js & Express Backend",
    category: "Backend Development",
    difficulty: "medium",
    salaryPKR: "100k–280k",
    freelanceRate: "$25–$70/hr",
    whyLearn: "Node.js enables JavaScript on the server. Full-stack JS with React + Node is the most demanded combo in Pakistani tech companies. Used by Netflix, LinkedIn, and hundreds of local startups.",
    overview: "Node.js is a runtime that lets you run JavaScript outside the browser. Express.js is the de-facto web framework for building REST APIs and web servers. Learn to build scalable backends with MongoDB, authentication, and real-time features.",
    roadmap: [
      { title: "Node.js Core", duration: "2 weeks", desc: "Event loop, modules, fs, path, http, npm ecosystem", icon: "🟢" },
      { title: "Express.js", duration: "2 weeks", desc: "Routing, middleware, error handling, serving static files", icon: "🚂" },
      { title: "MongoDB & Mongoose", duration: "2 weeks", desc: "NoSQL concepts, CRUD, schemas, relationships, indexing", icon: "🍃" },
      { title: "REST API Design", duration: "2 weeks", desc: "RESTful principles, HTTP methods, status codes, versioning", icon: "📡" },
      { title: "Authentication", duration: "2 weeks", desc: "JWT, bcrypt, OAuth2, session management, role-based access", icon: "🔐" },
      { title: "Real-time with Socket.io", duration: "1 week", desc: "WebSockets, chat apps, live notifications, rooms", icon: "⚡" },
      { title: "Deployment & DevOps", duration: "2 weeks", desc: "Heroku, Railway, DigitalOcean, PM2, Nginx, CI/CD", icon: "☁️" }
    ],
    demand: {
      jobsMonthly: 850,
      freelancePercent: 58,
      topPlatforms: ["LinkedIn", "Upwork", "Indeed.pk"],
      growth: "+40% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Faisalabad"]
    },
    resources: [
      { type: "free", title: "Node.js Official Docs & Guides", url: "https://nodejs.org/en/docs/guides", platform: "Node.js", duration: "Self-paced" },
      { type: "free", title: "Node.js Full Course – Traversy Media", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", platform: "YouTube", duration: "90 min" },
      { type: "free", title: "The Odin Project – NodeJS Path", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs", platform: "The Odin Project", duration: "Self-paced" },
      { type: "paid", title: "Node.js, Express, MongoDB Bootcamp", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Zero to Mastery Node Developer", url: "https://zerotomastery.io/", platform: "ZTM Academy", price: "$39/mo" }
    ]
  },
  {
    id: "graphic-design",
    name: "Graphic Design (Adobe & Figma)",
    category: "Design",
    difficulty: "easy",
    salaryPKR: "50k–150k",
    freelanceRate: "$10–$40/hr",
    whyLearn: "Graphic design is Pakistan's #1 Fiverr skill category. Minimal investment – just a laptop + free software. Every business, NGO, and influencer needs design work. Creative career with great work-life balance.",
    overview: "Graphic design covers visual communication using tools like Adobe Photoshop, Illustrator, and Figma. You'll learn design principles, typography, color theory, branding, social media graphics, and UI mockups.",
    roadmap: [
      { title: "Design Principles", duration: "1 week", desc: "Balance, contrast, hierarchy, alignment, proximity, color theory", icon: "🎨" },
      { title: "Adobe Photoshop", duration: "3 weeks", desc: "Layers, masks, photo editing, compositing, retouching", icon: "🖼️" },
      { title: "Adobe Illustrator", duration: "3 weeks", desc: "Vector graphics, logos, icons, typography, print design", icon: "✏️" },
      { title: "Figma for UI/UX", duration: "2 weeks", desc: "Wireframes, components, auto-layout, prototyping", icon: "🎯" },
      { title: "Branding & Identity", duration: "2 weeks", desc: "Logo design, brand guidelines, business cards, letterheads", icon: "💼" },
      { title: "Social Media Design", duration: "1 week", desc: "Instagram posts, YouTube thumbnails, banners, stories", icon: "📱" },
      { title: "Portfolio & Freelancing", duration: "2 weeks", desc: "Behance portfolio, Fiverr gig setup, client communication", icon: "💰" }
    ],
    demand: {
      jobsMonthly: 1500,
      freelancePercent: 92,
      topPlatforms: ["Fiverr", "Upwork", "99designs"],
      growth: "+18% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Faisalabad"]
    },
    resources: [
      { type: "free", title: "Adobe Express Free Tutorials", url: "https://www.adobe.com/learn/photoshop.html", platform: "Adobe", duration: "Self-paced" },
      { type: "free", title: "Figma Crash Course", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", platform: "YouTube", duration: "2 hrs" },
      { type: "free", title: "Canva Design School", url: "https://www.canva.com/designschool/", platform: "Canva", duration: "Self-paced" },
      { type: "paid", title: "Adobe Photoshop CC – MasterClass", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Graphic Design Bootcamp", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 2,000" }
    ]
  },
  {
    id: "data-science",
    name: "Data Science & Machine Learning",
    category: "Data Science",
    difficulty: "hard",
    salaryPKR: "150k–500k",
    freelanceRate: "$40–$120/hr",
    whyLearn: "AI/ML is transforming every industry. Pakistan's tech companies (Careem, Bazaar, Jazz) are building data teams. Remote jobs at US companies pay $80k–$150k. Future-proof career with exploding demand.",
    overview: "Data Science involves extracting insights from data using statistics, machine learning, and visualization. You'll learn Python for data analysis (pandas, NumPy), ML algorithms (scikit-learn), deep learning (TensorFlow), and data visualization (Matplotlib, Seaborn).",
    roadmap: [
      { title: "Python & Math Foundations", duration: "4 weeks", desc: "Python, linear algebra, statistics, probability basics", icon: "🐍" },
      { title: "Data Analysis", duration: "3 weeks", desc: "NumPy, pandas, data cleaning, EDA, Jupyter notebooks", icon: "📊" },
      { title: "Data Visualization", duration: "2 weeks", desc: "Matplotlib, Seaborn, Plotly, storytelling with data", icon: "📈" },
      { title: "Machine Learning", duration: "4 weeks", desc: "scikit-learn, regression, classification, clustering, model evaluation", icon: "🤖" },
      { title: "Deep Learning", duration: "4 weeks", desc: "Neural networks, TensorFlow/Keras, CNNs, transfer learning", icon: "🧠" },
      { title: "NLP Basics", duration: "2 weeks", desc: "Text processing, sentiment analysis, transformers intro", icon: "💬" },
      { title: "MLOps & Deployment", duration: "2 weeks", desc: "MLflow, FastAPI, Docker, model deployment, monitoring", icon: "🚀" }
    ],
    demand: {
      jobsMonthly: 500,
      freelancePercent: 40,
      topPlatforms: ["LinkedIn", "Upwork", "Kaggle"],
      growth: "+70% YoY",
      topCities: ["Karachi", "Lahore", "Islamabad"]
    },
    resources: [
      { type: "free", title: "Andrew Ng – ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", platform: "Coursera (Audit)", duration: "3 months" },
      { type: "free", title: "Kaggle Learn – ML Micro-courses", url: "https://www.kaggle.com/learn", platform: "Kaggle", duration: "Self-paced" },
      { type: "free", title: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai/", platform: "fast.ai", duration: "Self-paced" },
      { type: "paid", title: "Data Science Bootcamp 2024", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Deep Learning Specialization", url: "https://www.coursera.org/", platform: "Coursera", price: "$49/mo" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Ethical Hacking",
    category: "Security",
    difficulty: "hard",
    salaryPKR: "120k–400k",
    freelanceRate: "$35–$100/hr",
    whyLearn: "Pakistan's banking and fintech sector desperately needs security professionals. Bug bounty programs on HackerOne/Bugcrowd pay $500–$50,000 per vulnerability. Government initiatives (NCSS) are creating thousands of new positions.",
    overview: "Cybersecurity protects systems and networks from digital attacks. Ethical hacking involves legally testing systems for vulnerabilities. Covers networking, Linux, penetration testing, web application security (OWASP), and incident response.",
    roadmap: [
      { title: "Networking Fundamentals", duration: "3 weeks", desc: "OSI model, TCP/IP, DNS, HTTP/S, firewalls, VPNs", icon: "🌐" },
      { title: "Linux Mastery", duration: "3 weeks", desc: "Command line, file permissions, bash scripting, services", icon: "🐧" },
      { title: "Security Concepts", duration: "2 weeks", desc: "CIA triad, threat modeling, encryption, PKI, authentication", icon: "🔒" },
      { title: "Web Application Security", duration: "3 weeks", desc: "OWASP Top 10, SQL injection, XSS, CSRF, Burp Suite", icon: "🕷️" },
      { title: "Penetration Testing", duration: "4 weeks", desc: "Kali Linux, Nmap, Metasploit, enumeration, exploitation", icon: "💻" },
      { title: "Bug Bounty Hunting", duration: "3 weeks", desc: "HackerOne, Bugcrowd, recon techniques, responsible disclosure", icon: "🏆" },
      { title: "Certifications Path", duration: "4 weeks", desc: "CompTIA Security+, CEH, OSCP preparation", icon: "📜" }
    ],
    demand: {
      jobsMonthly: 350,
      freelancePercent: 50,
      topPlatforms: ["LinkedIn", "HackerOne", "Bugcrowd"],
      growth: "+65% YoY",
      topCities: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"]
    },
    resources: [
      { type: "free", title: "TryHackMe Free Rooms", url: "https://tryhackme.com/", platform: "TryHackMe", duration: "Self-paced" },
      { type: "free", title: "Cybrary Free Security Courses", url: "https://www.cybrary.it/", platform: "Cybrary", duration: "Self-paced" },
      { type: "free", title: "OWASP WebGoat (Practice App)", url: "https://owasp.org/www-project-webgoat/", platform: "OWASP", duration: "Self-paced" },
      { type: "paid", title: "Complete Ethical Hacking Bootcamp", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "OSCP – PEN-200 Course", url: "https://www.offensive-security.com/pwk-oscp/", platform: "Offensive Security", price: "$1,499" }
    ]
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Shopify Development",
    category: "E-Commerce",
    difficulty: "easy",
    salaryPKR: "70k–180k",
    freelanceRate: "$20–$60/hr",
    whyLearn: "Pakistan's e-commerce market is growing at 30% annually. Shopify has 2M+ stores globally. Setup stores for local businesses (Daraz sellers, boutiques) or international dropshipping clients. Quick to learn, quick to earn.",
    overview: "E-commerce development covers building and managing online stores using Shopify, WooCommerce, or custom platforms. Includes theme customization, product management, payment gateways, SEO, and conversion optimization.",
    roadmap: [
      { title: "E-Commerce Fundamentals", duration: "1 week", desc: "Business models, dropshipping, print-on-demand, private label", icon: "🛒" },
      { title: "Shopify Basics", duration: "2 weeks", desc: "Store setup, products, collections, themes, apps", icon: "🏪" },
      { title: "Shopify Liquid", duration: "2 weeks", desc: "Liquid templating, theme customization, sections, blocks", icon: "💧" },
      { title: "Payment & Shipping", duration: "1 week", desc: "Payment gateways (JazzCash, Easypaisa, Stripe), shipping zones", icon: "💳" },
      { title: "Marketing Integration", duration: "2 weeks", desc: "Facebook Pixel, Google Analytics, email marketing, SEO", icon: "📣" },
      { title: "Conversion Optimization", duration: "2 weeks", desc: "A/B testing, upsells, abandoned cart, landing pages", icon: "📈" },
      { title: "Scaling & Automation", duration: "2 weeks", desc: "Shopify Flow, inventory management, multi-channel selling", icon: "⚡" }
    ],
    demand: {
      jobsMonthly: 750,
      freelancePercent: 88,
      topPlatforms: ["Fiverr", "Upwork", "Shopify Partners"],
      growth: "+35% YoY",
      topCities: ["Lahore", "Karachi", "Islamabad", "Sialkot"]
    },
    resources: [
      { type: "free", title: "Shopify Academy Free Courses", url: "https://www.shopify.com/learn", platform: "Shopify Academy", duration: "Self-paced" },
      { type: "free", title: "Shopify Liquid Documentation", url: "https://shopify.dev/docs/api/liquid", platform: "Shopify Dev", duration: "Self-paced" },
      { type: "free", title: "E-Commerce Fundamentals – YouTube", url: "https://www.youtube.com/", platform: "YouTube", duration: "3 hrs" },
      { type: "paid", title: "Shopify Dropshipping Masterclass", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 1,500" },
      { type: "paid", title: "Complete Shopify Development Course", url: "https://www.udemy.com/", platform: "Udemy", price: "PKR 2,000" }
    ]
  }
];
