import TalentSync from "./Assets/Projects/TalentSync.png"
import TT from "./Assets/Projects/TT.png";
import sql from "./Assets/Projects/sql-project.png";
import memoryGame from "./Assets/Projects/memory game.png";


export const PROJECTS = [
  {
    image: TalentSync,
    name: "TalentSync – Recruitment Platform",
    technologyUsed: "Node.js, Express.js, MongoDB, EJS, NLP (TF-IDF)",
    description: "Developed a full-stack recruitment platform using the MVC architecture. Implemented JWT-based authentication, resume upload, and analysis using TF-IDF and Cosine Similarity to match candidates with job descriptions. Enabled recruiters to post jobs, view applicants, and shortlist candidates based on relevance scoring.",
    url: "https://github.com/vaishpande27/TalentSync",
  },
  {
    image: TT,
    name: "Travel Treasury",
    technologyUsed: "HTML, CSS, Javascript, Node js, MongoDB",
    description: "The Expense Tracker is a full-stack web application that allows users to manage expenses by inputting participant names and their respective expenses. Built using HTML, CSS, JavaScript, Node.js, and MongoDB, it features a dynamic table that updates in real-time with each expense entry and stores all data persistently in a MongoDB database.",
    url: "https://github.com/vaishpande27/Travel_Treasury",
  },
  {
    image: memoryGame,
    name: "Memory Game",
    technologyUsed: "HTML, CSS, Javascript",
    description: "Developed an interactive memory game using HTML, CSS, and JavaScript. Features dynamic card flipping, a matching logic, and a timer for an engaging user experience. Built with smooth animations and responsive design for seamless gameplay across devices.",
    url: "https://github.com/vaishpande27/Memory-Game",
  },
  {
    image: sql,
    name: "Retail Sales Analysis SQL Project",
    technologyUsed: "SQL",
    description: "Designed and implemented a retail sales analysis project using SQL. Performed data cleaning, exploratory analysis, and business-driven queries to extract key insights. Analyzed sales trends, customer behavior, and category performance using aggregation, ranking, and time-based queries.",
    url: "https://github.com/vaishpande27/SQL-Project",
  }
];

export const SKILLS = [
  { name: "C++", initialRating: 4 },
  { name: "JAVA", initialRating: 3 },
  { name: "HTML", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Reactjs", initialRating: 3 },
  { name: "Nodejs", initialRating: 3 },
  { name: "SQL", initialRating: 3 },
  { name: "MongoDB", initialRating: 3 },
  { name: "Git", initialRating: 3 },
  { name: "Python", initialRating: 3 },
  { name: "Figma", initialRating: 3 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Npm (Node Package Manager)", "Postman", "IntelliJ Idea"]
