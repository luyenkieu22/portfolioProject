import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "Portfolio Website",
    description:
      "This is a website introducing myself, my projects, and my experience.",
    technologies: ["React", "Redux", "Tailwind css", "Reactstrap"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Personnel management",
    description:
      "Human Resource Management Project A website for managing employees, including those currently working, former employees, and those on leave.",
    technologies: ["React", "Redux toolkit", "Material-UI", ".Net"],
    siteUrl: "https://github.com/luyenkieu22/preProjects.git",
  },
  {
    id: "03",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Todo App",
    description:
      "TodoX is a task management application (Todo App) developed to help users track, organize, and optimize their daily activities!",
    technologies: [
      "ReactJs",
      "Tailwind css",
      "Shadcn-ui",
      "Node.js",
      "MongoDB",
    ],
    siteUrl: "https://github.com/luyenkieu22/luyenkieu_todoX.git",
  },
  {
    id: "04",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "Graduation project",
    description:
      "Construction materials management project allows users to purchase, view statistics, sell at the counter",
    technologies: [
      "React",
      "React Query",
      "Redux",
      "Material UI",
      ".net core",
      "GraphQL",
    ],
  },
];

export default portfolios;
