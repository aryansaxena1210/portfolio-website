import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SnakesXPackmanImg from "@/public/project-pictures/snakes-x-packman-picture.png";
import AbstractMarioImg from "@/public/project-pictures/simple-game-picture.png";
import ModernPortfolioImg from "@/public/project-pictures/modern-portfolio-picture.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MERN Stack Developer - TCIL-it",
    location: "Chandigarh, India",
    description:
      "Completed a 3 months course as a mern stack developer with certification from TCIL-IT.",
    icon:  React.createElement(FaReact),
    date: " June-August 2024",
  },
  {
    title: "DSA in Python - TCIL-it",
    location: "Chandigarh, India",
    description:
      "Completed a 3 months course within Data Structure and Algorithms in Python with certification from TCIL-it.",
    icon: React.createElement(CgWorkAlt),
    date: "June-August 2024",
  },
  {
    title: "BITS-Pilani",
    location: "Pilani, India",
    description:
      "Completed three semesters at BITS Pilani, Pilani Campus, achieving a CGPA of 9.45/10 and receiving a merit scholarship for ranking in the top 2%.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2022 - Jan 2024",
  },
  {
    title: "Backend Developer",
    location: "Chandigarh, India",
    description:
      "Worked as a backend developer for a project, Masawi, that aimed at raising awareness in students about prejudice and racial discrimination . Learned about Node JS, Express JS, MongoDB, and REST APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2021- Aug 2022",
  },

] as const;

export const projectsData = [
  {
    title: "Abstract Mario",
    description:
      "Developed a game with elements like Platform, Moving, Flying, and Follower. Implemented collision detection, scoring, player movement, and game dynamics. Conducted unit testing for reliability.",
    tags: ["OOP", "Inheritance", "Encapsulation", "Polymorphism", "ArrayLists"],
    imageUrl: AbstractMarioImg,
  },
  {
    title: "Snakes x Packman",
    description:
      " The SnakesxPackman project is an innovative and interactive game that combines the classic elements of Snakes and Pac-Man. The game leverages fundamental Object-Oriented Programming (OOP) principles.",
    tags: ["FileReader", "ArrayList", "Data-Structures", "Unit-Testing", "Arrays"],
    imageUrl: SnakesXPackmanImg,
  },
  {
    title: "Modern Portfolio",
    description:
      "Created a minimalist, sleek and responsive portfolio with smooth animations, optimized for all screen sizes.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer-Motion"],
    imageUrl: ModernPortfolioImg,
  },
] as const;

export const skillsData = [

  "C",
  "Java",
  "Jetpack Compose",
  "Kotlin",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "Python",
  "Flask",
  "Express",
  "Framer Motion",
] as const;

