import type {
    TNavLink,
    TService,
    TTechnology,
    TExperience,
    TProject, TTestimonial,
} from "../types";

import {
    javascript,
    typescript,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    esterox,
    websageai,
    complian,
    kodeops,
    sourcemind,
    python,
    iplanner,
    fastapi,
    goldensb,
    aidev,
    code,
    frontend
} from "../assets";

export const navLinks: TNavLink[] = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "tech",
        title: "Technologies",
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services: TService[] = [
    {
        title: "Back-end Development",
        icon: code,
    },
    {
        title: "AI Development",
        icon: aidev
    },
    {
        title: "Client side applications",
        icon: frontend
    }
];

const technologies: TTechnology[] = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "FastAPI",
        icon: fastapi
    }
];

const experiences: TExperience[] = [
    {
        title: "Back-End Developer",
        companyName: "Golden SB Tech Group",
        icon: goldensb,
        iconBg: "#383E56",
        date: "April 2025 - Up to now",
        points: [
            "Developing, implementing, and managing Robotic Process Automation (RPA) solutions for payment system's workflow.",
            "Automating robust and scalable payment systems utilizing Playwright and Webdriver.io frameworks.",
            "Providing maintenance and technical support for Windows and Ubuntu server environments.",
            "Back end applications development using Node.js.",
        ],
    },
    {
        title: "Back-End Developer",
        companyName: "Esterox LLC",
        icon: esterox,
        iconBg: "#383E56",
        date: "August 2023 - March 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developed AI assistant based on RAG model with Python, FastAPI. Used BGE-M3 model for embeddings.",
        ],
    },
    {
        title: "Back-End Engineer Intern",
        companyName: "Sourcemind (WebbFontaine)",
        icon: sourcemind,
        iconBg: "#383E56",
        date: "June 2022 - November 2022",
        points: [
            "Worked under professional staff to contribute to successful development of Backend applications. ",
            "Produced clean, tight code to create well-functioning software applications. ",
            "Organized CI/CD in TeamCity. Built several APIs with Javalin framework and made a full stack web application as a graduation project. ",
            "Used Linux OS for Docker and writing scripts with Bash Script to work with Docker containers.",
            "Worked with PostgreSQL databases and used JDBC for connection with API. "
        ]
    }
];

const testimonials: TTestimonial[] = [
    {
        testimonial:
            "5 stars",
        name: "Alireza Zarei",
        designation: "#Node.js #GraphQL #Neo4J #ApolloFederation",
        company: "FiredStack",
        image: "",
    },
    {
        testimonial:
            "Gevorg has great communications both verbal and written, his code is outstanding and, and he thinks outside of the box when providing a solution.",
        name: "Muhdo Health",
        designation: "#NodeJs #React #MongoDB #AWS",
        company: "NodeJs / React / MongoDB / AWS Full stack developer",
        image: ""
    }
];

const projects: TProject[] = [
    {
        name: "WEBSAGE AI",
        description:
            "AI assistant, aimed at improving customer service with fast, accurate and humanized responses to customer requests-available 24/7. Due to natural language processing, it understands contexts and provides personalized answers, creating a smooth experience for both customers and businesses. Trained on website-specific data, it also offers a customizable environment that aligns with your brand",
        tags: [
            {
                name: "bge-m3",
                color: "blue-text-gradient",
            },
            {
                name: "fastapi",
                color: "green-text-gradient",
            },
            {
                name: "numpy",
                color: "pink-text-gradient",
            },
            {
                name: "llm_rag",
                color: "violet-text-gradient",
            },
            {
                name: "qdrant_vector_db",
                color: "orange-text-gradient",
            },
        ],
        image: websageai
    },
    {
        name: "iPlanner",
        description:
            "This app lets users design their buildings and choose building materials using planner5D. Three different user groups: individual homeowners who wish to build or renovate their homes, construction firms that provide their services and supplies, and consultants who may offer advisory services to customers while the project is being built or planned from the start.",
        tags: [
            {
                name: "express.js",
                color: "orange-text-gradient",
            },
            {
                name: "next.js",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Apache",
                color: "violet-text-gradient",
            },
            {
                name: "stripe_api",
                color: "blue-text-gradient  ",
            },
        ],
        image: iplanner
    },
    {
        name: "ComplianAI",
        description:
            "ComplianAI simplifies compliance processes by automatically extracting key findings from reports, policies, and questionnaires, ensuring quick compliance reviews. With powerful Al integration, the platform streamlines document analysis and offers robust security features for seamless performance.",
        tags: [
            {
                name: "express.js",
                color: "blue-text-gradient",
            },
            {
                name: "next.js",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "openai_api",
                color: "violet-text-gradient",
            },
            {
                name: "typescript",
                color: "orange-text-gradient",
            },
        ],
        image: complian
    },
  {
    name: "Shipkode Kodeops AI",
    description: "Kodeops is an AI-powered solution that simplifies project workflows by analyzing data from chat systems, task management platforms, and Git repositories. It provides actionable insights, generates tasks, and offers guidance on their execution. By leveraging OpenAI and robust backend architecture.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "violet-text-gradient",
      },
      {
        name: "auth0",
        color: "orange-text-gradient",
      },
    ],
    image: kodeops
  }
];

export { testimonials, services, technologies, experiences, projects };
