import type { Roadmap, Topic } from "../types/roadmap";
const t = (
  id: string,
  title: string,
  description?: string,
  children?: Topic[],
): Topic => ({ id, title, description, children });
export const roadmaps: Roadmap[] = [
  {
    slug: "frontend",
    title: "Frontend Developer",
    category: "Role",
    level: "Beginner to Advanced",
    duration: "6–9 months",
    description:
      "Build accessible, responsive interfaces and learn the browser platform.",
    accent: "#63d6b0",
    topics: [
      t(
        "html",
        "HTML & Web Foundations",
        "Semantic structure, forms and accessibility.",
        [
          t("html-sem", "Semantic HTML"),
          t("html-forms", "Forms and validation"),
          t("html-a11y", "Accessibility basics"),
        ],
      ),
      t("css", "CSS", "Layout, responsive design and styling.", [
        t("css-box", "Box model and cascade"),
        t("css-flex", "Flexbox and Grid"),
        t("css-responsive", "Responsive design"),
      ]),
      t("js", "JavaScript", "Language fundamentals and browser APIs.", [
        t("js-core", "Language fundamentals"),
        t("js-dom", "DOM and events"),
        t("js-async", "Promises and async/await"),
      ]),
      t("ts", "TypeScript", "Static types and safer application contracts."),
      t("react", "React", "Components, state, hooks and routing.", [
        t("react-comp", "Components and props"),
        t("react-state", "State and data flow"),
        t("react-hooks", "Hooks and effects"),
        t("react-router", "Routing"),
      ]),
      t(
        "test",
        "Testing and Quality",
        "Unit tests, end-to-end tests and performance.",
      ),
      t("ship", "Build and Deploy", "Production builds, CI and deployment."),
    ],
  },
  {
    slug: "backend",
    title: "Backend Developer",
    category: "Role",
    level: "Beginner to Advanced",
    duration: "6–10 months",
    description:
      "Design APIs, work with databases, secure services and operate systems.",
    accent: "#9b8cff",
    topics: [
      t(
        "be-found",
        "Backend fundamentals",
        "HTTP, networking, runtimes and architecture.",
      ),
      t("be-lang", "Choose a language", "Java, JavaScript, Python, Go or C#."),
      t(
        "be-api",
        "API design",
        "REST, validation, pagination and documentation.",
        [
          t("be-rest", "REST principles"),
          t("be-errors", "Error handling"),
          t("be-openapi", "OpenAPI"),
        ],
      ),
      t(
        "be-db",
        "Databases",
        "SQL, indexes, transactions and document stores.",
      ),
      t("be-sec", "Security", "Authentication, authorization and OWASP risks."),
      t("be-test", "Testing", "Unit, integration and contract tests."),
      t("be-ops", "Operations", "Logging, metrics, containers and CI/CD."),
    ],
  },
  {
    slug: "react",
    title: "React",
    category: "Skill",
    level: "Beginner to Advanced",
    duration: "8–12 weeks",
    description:
      "Learn React from component basics to scalable application patterns.",
    accent: "#61c9ef",
    topics: [
      t(
        "r-start",
        "React foundations",
        "JSX, components, props and rendering.",
      ),
      t(
        "r-state",
        "State and events",
        "Forms, lifting state and derived values.",
      ),
      t("r-hooks", "Hooks", "State, effects, memoization and custom hooks."),
      t("r-route", "Routing", "Nested routes and route parameters."),
      t("r-data", "Data fetching", "Loading states, caching and server state."),
      t("r-arch", "Architecture", "Feature folders and reusable components."),
      t("r-test", "Testing", "Component and browser testing."),
    ],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    category: "Skill",
    level: "Beginner to Advanced",
    duration: "8–10 weeks",
    description:
      "Understand the language, runtime, async behavior and modern tooling.",
    accent: "#f2ce63",
    topics: [
      t("j-core", "Core syntax", "Values, functions, scope and control flow."),
      t(
        "j-object",
        "Objects and prototypes",
        "Object model, classes and composition.",
      ),
      t(
        "j-async",
        "Asynchronous JavaScript",
        "Event loop, promises and concurrency.",
      ),
      t("j-browser", "Browser APIs", "DOM, events, storage and fetch."),
      t("j-modules", "Modules and tooling", "ES modules, npm and bundlers."),
    ],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    category: "Skill",
    level: "Beginner to Advanced",
    duration: "4–6 weeks",
    description:
      "Build safer JavaScript projects with practical type modeling.",
    accent: "#6f9df4",
    topics: [
      t("t-basics", "Type system basics", "Inference, unions and narrowing."),
      t(
        "t-objects",
        "Objects and functions",
        "Interfaces, aliases and function types.",
      ),
      t("t-generic", "Generics", "Constraints and utility types."),
      t("t-app", "Application patterns", "API types and discriminated unions."),
      t("t-config", "Tooling", "Strict mode and project configuration."),
    ],
  },
  {
    slug: "devops",
    title: "DevOps Engineer",
    category: "Role",
    level: "Intermediate to Advanced",
    duration: "6–12 months",
    description:
      "Automate delivery and build reliable, observable infrastructure.",
    accent: "#e5a56d",
    topics: [
      t("d-linux", "Linux and scripting", "Shell, processes and automation."),
      t("d-git", "Version control", "Git workflows and release conventions."),
      t("d-ci", "CI/CD", "Pipelines, artifacts and deployment strategies."),
      t("d-container", "Containers", "Docker and orchestration basics."),
      t(
        "d-cloud",
        "Cloud fundamentals",
        "Identity, compute, storage and networking.",
      ),
      t(
        "d-observe",
        "Observability",
        "Logs, metrics, alerts and incident response.",
      ),
    ],
  },
  {
    slug: "fullstack",
    title: "Full-Stack Developer",
    category: "Role",
    level: "Beginner to Advanced",
    duration: "8–14 months",
    description:
      "Connect frontend applications to APIs, data stores and delivery workflows.",
    accent: "#e28db6",
    topics: [
      t("f-web", "Web foundations", "HTML, CSS and JavaScript."),
      t("f-ui", "Frontend framework", "Components, routing and state."),
      t(
        "f-server",
        "Server development",
        "API design and service architecture.",
      ),
      t("f-data", "Data layer", "SQL, schema design and caching."),
      t("f-auth", "Authentication", "Sessions, tokens and authorization."),
      t("f-test", "Testing", "Frontend, API and integration tests."),
      t("f-delivery", "Delivery", "CI, monitoring and deployment."),
    ],
  },
  {
    slug: "sql",
    title: "SQL & Database Design",
    category: "Skill",
    level: "Beginner to Intermediate",
    duration: "4–8 weeks",
    description:
      "Query data confidently and design relational schemas that scale.",
    accent: "#69b7a4",
    topics: [
      t(
        "s-query",
        "Query fundamentals",
        "SELECT, filtering, joins and aggregates.",
      ),
      t(
        "s-design",
        "Relational design",
        "Keys, constraints and normalization.",
      ),
      t("s-advanced", "Advanced SQL", "CTEs, window functions and subqueries."),
      t("s-perf", "Performance", "Indexes and query plans."),
      t("s-reliable", "Reliability", "Transactions and migrations."),
    ],
  },
];
