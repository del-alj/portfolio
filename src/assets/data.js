import keyboard from "./keyboard.png";

export const header = {
  logo: "Douae Elalj",
  list: ["About", "projects", 
  // "Contact"
],
  button: "Resume"
};

export const home = {
  titel0: "Hello, My name is",
  titel1: "Douae elalj.",
  titel2: "software engineer and frontend developer.",
  text: "i create interfaces and experiences for businesses big and small i'm currently available.",
};

export const about = {
  paragraph: <span>Hello! My name is Douae and I enjoy creating things.
  My interest in programming started in 2018 when I decided to enter 1337 school. 
 I was fascinated by how we can create complex things by tapping on {<span><img src={keyboard} width={19} /></span>}. I feel alive when I code end i enjoy learning new things. Here are some of the tools I've been working with lately;</span>,
  tags: ["html/css", "Javascript", "React", "Node.Js", "Postgresql"],
  gif: ""
};

export const projects = [
  {
    name: "Red-Tetris",
    text: "Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field.",
    tags: ["React", "Axios", "Node.Js", "Socket.io", "Redux", "Expres.Js", "Js"],
    link: "https://github.com/del-alj/Red-Tetris",
  },
  {
    name: "Matcha",
    text: `Matcha is an online dating and geosocial networking application. Matcha uses a "double opt-in" system where both users must like each other before they can exchange messages.`,
    tags: [
      "React",
      "Axios",
      "Node.Js",
      "Socket.io",
      "Expres.Js",
      "Js",
      "styled-Component"
    ],
    link: "https://github.com/del-alj/client_matcha",
  },
  {
    name: "Corware",
    text: "Core War is a programming game in which two (or more) computer programs compete for control of a virtual machine called MARS, for Memory Array Redcode Simulator.",
    tags: ["C", "Assembel"],
    link: "https://github.com/mohamedLazyBob/corewar",
  },
  {
    name: "Lem-In",
    text: "In Lem-in, you’ll receive a map that can consist of thousands of rooms that are connected. The map will have a starting room and an end room. You have to find all valid paths from smallest to largest.",
    tags: ["C", "Python"],
    link: "https://github.com/del-alj/lem-in",
  }
];

export const resume = {};
