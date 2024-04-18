import type {
    TNavLink,
    TService,
    TTechnology,
    TExperience,
    TProject, TTestimonial,
} from "../types";

import {
    web,
    java,
    javascript,
    typescript,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    esterox,
    clustering,
    sourcemind,
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
        id: "contact",
        title: "Contact",
    },
];

const services: TService[] = [
    {
        title: "Junior Node.js Developer",
        icon: web,
    },
    {
        title: "Back-End Engineer Intern",
        icon: java
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
        name: "java",
        icon: java
    }
];

const experiences: TExperience[] = [
    {
        title: "Junior Node.js Developer",
        companyName: "Esterox",
        icon: esterox,
        iconBg: "#383E56",
        date: "August 2023 - up to now",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Back-End Engineer Intern",
        companyName: "Sourcemind (WebbFontaine)",
        icon: sourcemind,
        iconBg: "#383E56",
        date: "June 2022 - November 2022",
        points : [
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
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
];

const projects: TProject[] = [
    {
        name: "Clustering application for BA thesis",
        description:
            "This Python code performs image clustering using K-means clustering. It loads three images, resizes them to have the same dimensions, extracts features from the images, and then applies K-means clustering to the features. Finally, it visualizes the clusters by plotting the clustered pixels and displaying the clustered images.",
        tags: [
            {
                name: "numpy",
                color: "blue-text-gradient",
            },
            {
                name: "cv2",
                color: "green-text-gradient",
            },
            {
                name: "matplotlib",
                color: "pink-text-gradient",
            },
        ],
        image: clustering,
        sourceCodeLink: "https://github.com/gevorggasparyan31/clustering",
    }
];

export {services, technologies, experiences, projects};
