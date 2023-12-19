import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";

import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.png";
import Project4 from "./assets/Project4.png";
import Project5 from "./assets/Project5.png";
import Project6 from "./assets/Project6.png";
import Project7 from "./assets/Project7.png";
import Project8 from "./assets/Project8.png";
import Project9 from "./assets/Project9.png";
import Project10 from "./assets/Project10.png";
import Project11 from "./assets/Project11.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/About",
  },

  {
    id: 3,
    name: "Skills",
    icon: <GiSkills className="nav_icon" />,
    path: "/Skills",
  },

  {
    id: 4,
    name: "Projects",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/Projects",
  },

  {
    id: 5,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/Contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Nitesh",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Malviya",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Address : ",
    description: "🏡Nikol, Ahmedabad, Gujarat",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "📞+91 7374866730",
  },

  {
    id: 7,
    title: "Email : ",
  description: "📫 Niteshmalvi74@gmail.com",
  },

  {
    id: 8,
    title: "Langages : ",
    description: "English, Hindi, Gujarati",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "97+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "10th <span>SSC</span>",
    grade: "75%",
    plc: "A.V.M. School Rajasthan",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "12th <span>HSC </span>",
    grade: "65%",
    plc: "Gov. High Sr. School Rajasthan ",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019-2023",
    title: "Bachelor Degree <span> Computer Engineering </span>",
    grade: "8.0 CGPA",
    plc: "Gujarat Technology Univercity",
  },
  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Internship <span> Python Developer </span>",
    plc: "Brainybeam, Ahmedabad",
  },

  {
    id: 5,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Internship <span> ReactJs </span>",
    plc: "Technotery, Ahmedabad",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
  },

  {
    id: 2,
    title: "Css",
    percentage: "100",
  },

  {
    id: 3,
    title: "Bootstrap",
    percentage: "80",
  },

  {
    id: 4,
    title: "JavaScript",
    percentage: "80",
  },

  {
    id: 5,
    title: "React",
    percentage: "80",
  },

  {
    id: 6,
    title: "Redux",
    percentage: "70",
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    title: "Tic Tac Toe",
    details: [
      {
        desc: "Tic Tac Toe is a classic two-player game where opponents take turns marking a 3x3 grid with their symbol, aiming to form a lineof three of their symbols vertically, horizontally, or diagonallyto win.",
      },
    ],
  },

  {
    id: 2,
    img: Project2,
    title: "To-Do List",
    details: [
      {
        desc: "A to-do list app lets you easily organize tasks and stay on top of your priorities by adding, editing, and deleting tasks with simplicity and efficiency.",
      },
    ],
  },

  {
    id: 3,
    img: Project3,
    title: "Pokedex App",
    details: [
      {
        desc: "Pokedex app: Your ultimate pocket guide to explore and identify many Pokémon species, with detailed information and stats at your fingertips.",
      },
    ],
  },

  {
    id: 4,
    img: Project4,
    title: "Quiz App",
    details: [
      {
        desc: "Test your knowledge against the clock! Answer questions with 4 options in 30 seconds. Score points for correct answers, and see your earned score if you choose incorrectly.",
      },
    ],
  },

  {
    id: 5,
    img: Project5,
    title: "Food Reciepe",
    details: [
      {
        desc: "This is Food Recipe App that allows users to search for recipes by typing the name of the food or selecting the first letter from the keyboard.",
      },
    ],
  },

  {
    id: 6,
    img: Project6,
    title: "News Monkey",
    details: [
      {
        desc: "NewsMonkey is a news app that provides top general headlines in a user-friendly interface.",
      },
    ],
  },
  {
    id: 7,
    img: Project7,
    title: "Music Player",
    details: [
      {
        desc: " This is a Music Player app that allows users to listen to their favorite songs. It has a sleek and modern design.",
      },
    ],
  },

  {
    id: 8,
    img: Project8,
    title: "CRUD Form App",
    details: [
      {
        desc: " This is a Form App created using CRUD methods and API.The page has an Add user button.It has a table with fields for Name, Email, Password and Contact no. The table has edit, view and remove buttons. The table has pagination to go to specific pages.",
      },
    ],
  },

  {
    id: 9,
    img: Project9,
    title: "Note App",
    details: [
      {
        desc: "Note App is a versatile task management app that allows users to easily create, store, and organize their tasks. Users can add, delete, archive, and restore tasks, making it a convenient tool for efficient task management and organization.",
      },
    ],
  },

  {
    id: 10,
    img: Project10,
    title: "Gme Dashboard",
    details: [
      {
        desc: "Explore a world of gaming at your fingertips with our game-dashboard app. Dive into the Home section for detailed game information, navigate through Categories to find and organize your favorites, curate your Library with liked games, and keep track of your gaming wishlist in the Bag.",
      },
    ],
  },

  {
    id: 11,
    img: Project11,
    title: "Movie App",
    details: [
      {
        desc: "Explore a cinematic universe at our movies and TV shows hub, featuring a user-friendly search bar. Immerse yourself in each film with trailers, director and writer details, ratings, and cast information. Discover the latest trends, popular picks, and top-rated gems for an unparalleled entertainment experience.",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
