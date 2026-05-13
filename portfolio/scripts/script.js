const projectData = [
    {
        title: "Arabic Text Diacritization",
        subtitle: "NLP Competition - 1st Place",
        description:
            "Dual-model BiLSTM architecture combining character- and word-level signals for Arabic diacritization.",
        highlights: [
            "Frozen AraBERT embeddings + task-specific Word2Vec",
            "Ensemble of 9 models with 1.90% DER",
            "Ablation of CRF, attention, and rule-based post-processing"
        ],
        stack: ["Python", "PyTorch", "BiLSTM", "AraBERT", "Word2Vec", "NLTK", "CAMeL Tools"],
        tags: ["NLP", "ML"]
    },
    {
        title: "Telecom Churn Intelligence",
        subtitle: "Big Data and Cloud",
        description:
            "End-to-end churn intelligence pipeline built on 594K records with distributed analytics.",
        highlights: [
            "Custom MapReduce K-Means via RDDs (no MLlib KMeans)",
            "FPGrowth association rules and MLlib classifiers",
            "Identified month-to-month contracts and fiber optic as churn drivers"
        ],
        stack: ["PySpark", "Spark MLlib", "Databricks", "Pandas", "Matplotlib", "Seaborn"],
        tags: ["Data", "ML"]
    },
    {
        title: "Credit Lending Classification",
        subtitle: "Deployed ML Pipeline",
        description:
            "Credit risk classification with portfolio-value optimization and MLflow tracking.",
        highlights: [
            "938K records enriched with FRED macroeconomic indicators",
            "SMOTE + class-weight tuning and threshold optimization",
            "Best model delivered +$23.6M portfolio value over baseline"
        ],
        stack: ["Python", "XGBoost", "CatBoost", "MLflow", "FastAPI", "Docker"],
        tags: ["ML", "MLOps", "Deployment"],
        links: {
            model: "https://huggingface.co/spaces/adhhus/loan-default-api?logs=container"
        }
    },
    {
        title: "PATHly",
        subtitle: "Learning Roadmap Aggregator",
        description:
            "Roadmap generation with knowledge graphs and NLP pipelines across multiple content sources.",
        highlights: [
            "NER, relation extraction, sentiment, and feature classification",
            "Knowledge graph with prerequisite and coverage edges",
            "Explainable roadmap generation with graph traversal and GNN ranking"
        ],
        stack: ["Python", "BiLSTM-CRF", "Knowledge Graph", "GNN"],
        tags: ["NLP", "Graphs"]
    },
    {
        title: "C++ Subset Compiler",
        subtitle: "Academic Systems Project",
        description:
            "Custom compiler for a C/C++ subset using Flex and Bison with robust diagnostics.",
        highlights: [
            "Quadruple IR, scoped symbol table, and semantic validation",
            "Buffered semantic diagnostics with deterministic output",
            "Automated test suite ~1.2k LOC covering 50+ features"
        ],
        stack: ["C", "Flex", "Bison", "Compilers"],
        tags: ["Systems"]
    },
    {
        title: "Telegram Clone QA",
        subtitle: "QA Team Lead",
        description:
            "QA leadership for a mobile and web clone with end-to-end and integration coverage.",
        highlights: [
            "Led a 2-person testing team",
            "Cypress web E2E + Flutter integration tests",
            "Selectors isolated for GUI-change resilience"
        ],
        stack: ["Cypress", "Flutter", "Testing"],
        tags: ["QA", "Testing"]
    },
    {
        title: "Souq 3oqaz",
        subtitle: "E-Commerce Platform",
        description:
            "Auction and barter marketplace with multi-role flows and marketplace management.",
        highlights: [
            "Frontend pages and reusable components",
            "Contributed to database design",
            "Team build with React and PostgreSQL"
        ],
        stack: ["React", "PostgreSQL"],
        tags: ["Web"],
        links: {
            repo: "https://github.com/code-crafters-cmp26/Souq-3qaz"
        }
    },
    {
        title: "Searchlock Holmes",
        subtitle: "Multi-Threaded Search Engine",
        description:
            "Search engine with crawler orchestration, indexing, and phrase search capabilities.",
        highlights: [
            "Crawler seed initialization and duplicate detection",
            "Resume and start-over support",
            "Query engine with phrase search"
        ],
        stack: ["Java", "Spring Boot", "Jsoup", "MongoDB"],
        tags: ["Systems", "Data"],
        links: {
            repo: "https://github.com/The-White-Hats/Resumeness"
        }
    },
    {
        title: "Resumeness",
        subtitle: "Resume Builder",
        description:
            "Resume builder with live previews, user auth, and export-ready templates.",
        highlights: [
            "Redux slices for structured data flow",
            "Resume preview and download pipeline",
            "Backend routes and MongoDB schema validation"
        ],
        stack: ["React", "TypeScript", "Node.js", "MongoDB"],
        tags: ["Web"],
        links: {
            repo: "https://github.com/The-White-Hats/Resumeness"
        }
    },
    {
        title: "Pixel Rush",
        subtitle: "x86 Assembly Racing Game",
        description:
            "Procedurally generated racing game with multiplayer support in x86 assembly.",
        highlights: [
            "Track generation algorithms",
            "Obstacle and power-up placement",
            "Serial communication for multiplayer"
        ],
        stack: ["x86 Assembly"],
        tags: ["Hardware", "Systems"],
        links: {
            repo: "https://github.com/The-White-Hats/Pixel-Rush/"
        }
    },
    {
        title: "AES Encryption Module",
        subtitle: "Verilog + SPI Integration",
        description:
            "FPGA-ready AES encryption core integrated with SPI communication.",
        highlights: [
            "Precise clock timing alignment",
            "Component count optimized for FPGA deployment",
            "Protocol integration for SPI IO"
        ],
        stack: ["Verilog", "SPI", "FPGA"],
        tags: ["Hardware", "Systems"]
    },
    {
        title: "Paint for Kids",
        subtitle: "Desktop OOP App",
        description:
            "Kid-friendly paint app with structured OOP design and extensible tools.",
        highlights: [
            "Object-oriented architecture for drawing tools",
            "Intuitive GUI for younger users",
            "Extensible feature set"
        ],
        stack: ["C++", "OOP"],
        tags: ["OOP"],
        links: {
            repo: "https://github.com/Adham-hussin/Paint-for-Kids"
        }
    },
    {
        title: "Processes Scheduler",
        subtitle: "Multiprocessor Simulation",
        description:
            "Multiprocessor scheduler simulator comparing multiple scheduling strategies.",
        highlights: [
            "Accurate scheduling algorithm simulation",
            "Optimized processor utilization",
            "Data-structure-driven design"
        ],
        stack: ["C++", "Data Structures"],
        tags: ["OOP", "Systems"],
        links: {
            repo: "https://github.com/Adham-hussin/Processes-Scheduler"
        }
    },
    {
        title: "BookStore Desktop App",
        subtitle: "OOP + PyQt5",
        description:
            "Desktop bookstore application with Firebase-backed inventory workflows.",
        highlights: [
            "GUI built with PyQt5",
            "Invoice persistence to Firebase",
            "Object-oriented architecture"
        ],
        stack: ["Python", "PyQt5", "Firebase"],
        tags: ["OOP"],
        links: {
            repo: "https://github.com/Adham-hussin/SDA-Task-Solution"
        }
    },
    {
        title: "Restaurant Popularity Predictor",
        subtitle: "Clustering + Geo Analytics",
        description:
            "K-means clustering of NYC restaurants to identify high-potential launch zones.",
        highlights: [
            "Clustered by popularity and location",
            "Insights for site selection",
            "End-to-end exploratory pipeline"
        ],
        stack: ["Python", "scikit-learn"],
        tags: ["ML", "Data"],
        links: {
            repo: "https://github.com/Adham-hussin/Restaurant-Popularity-Predictor"
        }
    },
    {
        title: "Cat and Dog Classifier",
        subtitle: "CNN Image Classification",
        description:
            "CNN-based image classifier optimized for accuracy and inference speed.",
        highlights: [
            "Convolutional neural network pipeline",
            "Image preprocessing and augmentation",
            "Evaluation-driven iteration"
        ],
        stack: ["Python", "CNN"],
        tags: ["ML"],
        links: {
            repo: "https://github.com/Adham-hussin/cat-dog_img-classifier"
        }
    },
    {
        title: "Quantum Physics Landing Page",
        subtitle: "Web UI Build",
        description:
            "Minimalist landing page with smooth animations and modern UI styling.",
        highlights: [
            "Custom HTML, CSS, and JS",
            "Subtle motion and interaction design",
            "Mobile-friendly layout"
        ],
        stack: ["HTML", "CSS", "JavaScript"],
        tags: ["Web"],
        links: {
            repo: "https://github.com/Adham-hussin/quantum-physics_landing-page"
        }
    },
    {
        title: "Hardware Calculator",
        subtitle: "Digital Logic Design",
        description:
            "Functional calculator implemented in Logisim with discrete IC logic.",
        highlights: [
            "IC-based arithmetic design",
            "Functional logic simulation",
            "Hardware-focused implementation"
        ],
        stack: ["Logisim", "Digital Logic"],
        tags: ["Hardware"]
    }
];

const DEFAULT_THEME = "dark";
const THEME_STORAGE_KEY = "portfolio-theme";

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.textContent = theme === "dark" ? "Theme: Dark" : "Theme: Light";
        toggle.setAttribute("aria-pressed", theme === "dark");
    }
}

function initThemeToggle() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = storedTheme || DEFAULT_THEME;
    setTheme(initialTheme);

    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || DEFAULT_THEME;
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    });
}

const filters = new Set();
projectData.forEach((project) => project.tags.forEach((tag) => filters.add(tag)));

const filterContainer = document.getElementById("projectFilters");
const projectGrid = document.getElementById("projectGrid");
const projectCount = document.getElementById("projectCount");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

const tagOrder = [
    "NLP",
    "ML",
    "Data",
    "MLOps",
    "Deployment",
    "QA",
    "Testing",
    "Web",
    "Systems",
    "OOP",
    "Hardware",
    "Graphs"
];
const allTags = Array.from(filters).sort((a, b) => {
    const indexA = tagOrder.indexOf(a);
    const indexB = tagOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
});

let activeTag = "All";

function renderFilters() {
    if (!filterContainer) return;
    filterContainer.innerHTML = "";
    ["All", ...allTags].forEach((tag) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = tag;
        button.className = tag === activeTag ? "active" : "";
        button.addEventListener("click", () => {
            activeTag = tag;
            renderFilters();
            renderProjects();
        });
        filterContainer.appendChild(button);
    });
}

function renderProjects() {
    if (!projectGrid || !projectCount) return;
    const visibleProjects =
        activeTag === "All"
            ? projectData
            : projectData.filter((project) => project.tags.includes(activeTag));

    projectGrid.innerHTML = "";
    projectCount.textContent = visibleProjects.length.toString();

    visibleProjects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card reveal";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const subtitle = document.createElement("p");
        subtitle.className = "kicker";
        subtitle.textContent = project.subtitle;

        const description = document.createElement("p");
        description.className = "project-desc";
        description.textContent = project.description;

        const highlightList = document.createElement("ul");
        highlightList.className = "project-highlights";
        project.highlights.forEach((highlight) => {
            const item = document.createElement("li");
            item.textContent = highlight;
            highlightList.appendChild(item);
        });

        const tagWrapper = document.createElement("div");
        tagWrapper.className = "project-tags";
        project.tags.forEach((tag) => {
            const tagEl = document.createElement("span");
            tagEl.textContent = tag;
            tagWrapper.appendChild(tagEl);
        });

        const stack = document.createElement("p");
        stack.className = "project-stack";
        stack.textContent = `Stack: ${project.stack.join(", ")}`;

        const linkRow = document.createElement("div");
        linkRow.className = "project-links";
        const linkConfig = [
            { key: "repo", label: "Repository" },
            { key: "demo", label: "Live Demo" },
            { key: "paper", label: "Paper" },
            { key: "model", label: "HF Space" }
        ];

        if (project.links) {
            linkConfig.forEach(({ key, label }) => {
                if (!project.links[key]) return;
                const link = document.createElement("a");
                link.href = project.links[key];
                link.target = "_blank";
                link.rel = "noopener";
                link.textContent = label;
                linkRow.appendChild(link);
            });
        }

        card.appendChild(subtitle);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(highlightList);
        card.appendChild(tagWrapper);
        card.appendChild(stack);
        if (linkRow.children.length > 0) {
            card.appendChild(linkRow);
        }

        projectGrid.appendChild(card);
        revealObserver.observe(card);
    });
}

function initReveal() {
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

function initSectionObserver() {
    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = Array.from(document.querySelectorAll("section[data-section]"));

    if (!navLinks.length || !sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
}

function initFooterYear() {
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear().toString();
    }
}

initReveal();
renderFilters();
renderProjects();
initSectionObserver();
initFooterYear();
initThemeToggle();