import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  dbmanager,
  aiIntegration
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
   {
    title: "AI/ML Integration",
    icon: aiIntegration,
  },
  {
    title: "Database Management",
    icon: dbmanager,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Axestrack",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feburary 2024 - Present",
    points: [
      "Architected and separated Hardware Service and Alert Service from a legacy monolith into standalone services, enabling independent deployment and improving system scalability by 2.5x and fault isolation",
      "Engineered a robust role-based access control system for multi-role staff and user separation with token-based authentication.",
      " Designed backend service to stream BLE device logs using Apache Kafka; ensured high-throughput real-time event processing.",
      "Built Redis-based location caching layer (TTL: 3s) to serve recent coordinates; improved response times by 60% and reduced database hits by 70%.",
      "Developed triangulation algorithm using RSSI data for accurate location estimation; exposed REST and WebSocket APIs to frontend."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Axestrack",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feburary 2024 - Present",
    points: [
      "Developed analytical dashboards using Angular and TypeScript with lazy loading and standalone components (v19).",
      "Refactored backend services using Node.js and Spring Boot into independent microservices for better scalability.",
      "Integrated REST APIs with PostgreSQL and Redis; optimized caching and performance on high-traffic dashboards.",
      "Collaborated in Agile sprints with UI/UX and product teams to deliver pixel-perfect and responsive interfaces."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dashboard Developement",
    description:
      "Developed multiple interactive dashboards tailored for various user roles such as company admin, plant admin, transporter, and modules like asset management, user tracking, and visitor management. Each dashboard follows an on-demand data loading architecture — meaning only summary or essential data loads initially, and detailed or widget-specific data is fetched dynamically upon user interaction. Integrated real-time tracking and live data updates using WebSockets. The visualizations and analytics were built using Angular, Highcharts, and Chart.js, ensuring responsive and insightful user experiences.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "highcharts",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };