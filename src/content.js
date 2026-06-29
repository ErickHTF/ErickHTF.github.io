import mpq from "./assets/images/mpq.webp";
import zapif from "./assets/images/zapif.webp";
import java from "./assets/images/java.png";
import springBoot from "./assets/images/spring-boot.png";
import aws from "./assets/images/aws.png";
import cloud from "./assets/images/cloud.png";
import postgresql from "./assets/images/postgresql.png";
import database from "./assets/images/database.png";
import jenkins from "./assets/images/jenkins.png";
import docker from "./assets/images/docker.png";
import jira from "./assets/images/jira.png";
import github from "./assets/images/github.png";

export const content = {
  name: "Erick Henrique",
  brand: "Portfolio Fortunato",

  social: [
    { icon: "github",   label: "GitHub",   href: "https://github.com/ErickHTF" },
    { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/erickhentf" },
  ],

  testimonials: [
    {
      quote: "Adapts quickly to different contexts and brings real drive to new challenges. His technical growth has been notably fast.",
      name: "Matheus Marques",
      role: "Senior Software Engineer",
    },
    {
      quote: "Joined as an intern. Three months in, we hired him full-time — on his own merit. Over the year-plus he was with us, he handled everything we put in front of him.",
      name: "Genesio Junior",
      role: "Owner, Gc2net",
    },
    {
      quote: "Always focused and consistent. Participated actively, met every deadline, and landed his first IT job before finishing the course.",
      name: "Reinaldo do Valle Junior",
      role: "Professor, IFSP",
    },
  ],

  eyebrow: "Software Engineer",
  intro: "Software engineer working on Core Banking systems.",

  experience: [
    {
      title: "Core Banking Operations",
      blurb: "Sustaining and evolving critical Core Banking services in Java and Spring Boot. Day-to-day: production incident response, SQL optimization across PostgreSQL and MySQL, AWS integration maintenance (Lambda, EC2, S3), and vendor coordination when issues cross system boundaries.",
      stack: ["Java 17", "Spring Boot", "AWS Lambda", "EC2", "S3"],
    },
  ],

  experienceDraft: [
    {
      title: "Database Operations",
      blurb: "Query optimization and schema work across PostgreSQL and MySQL for a banking platform. Production troubleshooting, performance tuning, and data support for operational teams.",
      stack: ["PostgreSQL", "MySQL", "SQL"],
    },
    {
      title: "CI/CD & Delivery Pipelines",
      blurb: "CI/CD pipelines with Jenkins and GitHub Actions for a financial services team. Docker containerization for consistent, repeatable deployments across environments.",
      stack: ["Jenkins", "GitHub Actions", "Docker", "Linux"],
    },
  ],

  features: [
    { tag: "#1 Java",    title: "Java & Spring Boot",    logos: [java, springBoot],
      blurb: "Building and maintaining production Spring Boot services: REST APIs, AWS SDK integration, and service lifecycle management." },
    { tag: "#2 AWS",     title: "Cloud & AWS",           logos: [aws, cloud],
      blurb: "Lambda, EC2, and S3 integrated with Java services in a live banking environment. Infrastructure that needs to stay up." },
    { tag: "#3 SQL",     title: "SQL & Databases",       logos: [postgresql, database],
      blurb: "Writing and optimizing queries in PostgreSQL and MySQL. Schema analysis, slow query troubleshooting, and operational data support." },
    { tag: "#4 CI/CD",   title: "DevOps & CI/CD",        logos: [jenkins, docker],
      blurb: "Pipelines with Jenkins and GitHub Actions. Docker containerization for consistent environments across staging and production." },
    { tag: "#5 Agile",   title: "Agile Delivery",        logos: [jira, github],
      blurb: "Scrum and Kanban in a technical team. Incremental delivery with a focus on clear communication and not breaking what's already running." },
    { tag: "#6 Systems", title: "Core Banking Systems",
      blurb: "Distributed, fault-tolerant services in a financial domain. High availability and auditability are non-negotiable." },
  ],

  projects: [
    {
      title: "My Party Quests",
      img: mpq,
      href: "https://github.com/ErickHTF/My-Party-Quests",
      blurb: "Gamified task management app with RPG mechanics. REST API with Spring Boot 3, JWT authentication via Spring Security, PostgreSQL in Docker, and OpenAPI docs via Swagger.",
      stack: ["Java 17", "Spring Boot 3", "Spring Security (JWT)", "PostgreSQL", "Docker", "Swagger"],
    },
    {
      title: "ZapIF",
      img: zapif,
      href: "https://github.com/ErickHTF/ZapIF",
      blurb: "Chat app built in raw Java, no frameworks. TCP sockets with one thread per client, JavaFX for the desktop side. Passwords hashed with PBKDF2 before touching SQLite.",
      stack: ["Java 17", "JavaFX 21", "TCP Sockets", "SQLite", "Maven", "PBKDF2"],
    },
  ],

  links: [
    { label: "code",    title: "GitHub",   href: "https://github.com/ErickHTF",           cta: "View",    icon: "github" },
    { label: "contact", title: "Email",    href: "mailto:erick.henrique4@outlook.com",         cta: "Send",    icon: "email" },
    { label: "network", title: "LinkedIn", href: "https://linkedin.com/in/erickhentf",     cta: "Connect", icon: "linkedin" },
  ],

  footer: "// available for new challenges · erick.henrique4@outlook.com",
};

export const pick = (field, mode) =>
  field && typeof field === "object" && ("tech" in field || "simple" in field) ? field[mode] : field;
