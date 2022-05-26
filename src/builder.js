import avatar from "./assets/img/avatar.jpg";
import SquareImage from "./assets/img/square.png";

/* Variables */
const ProjectDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus venenatis elit, vitae eleifend felis elementum ut. Nam arcu turpis, volutpat non laoreet a, fermentum eget diam. In hac habitasse.";

export default {
  theme: {
    color: "brew",
  },
  me: {
    firstName: "Jareer",
    lastName: "Abdullah",
    about: "I'm a full-stack Javascript, Typescript, PHP and Lua developer.",
    avatar: avatar,
    age: 14,
    projects: [
      {
        name: "Skyscraper",
        image: SquareImage,
        description: ProjectDescription,
        buttons: [
          { text: "Preview", url: "#" },
          { text: "Download", url: "#", themeColor: true },
        ],
      },
      {
        name: "Skyscraper",
        image: SquareImage,
        description: ProjectDescription,
        buttons: [
          { text: "Preview", url: "#" },
          { text: "Download", url: "#", themeColor: true },
        ],
      },
      {
        name: "Skyscraper",
        image: SquareImage,
        description: ProjectDescription,
        buttons: [
          { text: "Preview", url: "#" },
          { text: "Download", url: "#", themeColor: true },
        ],
      },
    ],
  },
  gallery: {
    data: [
      {
        image: SquareImage,
      },
      {
        long: true,
        image: `https://dummyimage.com/400x128/1F1F2F/1F1F2F`,
      },
      {
        image: SquareImage,
      },
      {
        image: SquareImage,
      },
      {
        image: SquareImage,
      },
      {
        long: true,
        image: `https://dummyimage.com/400x128/1F1F2F/1F1F2F`,
      },
      {
        image: SquareImage,
      },
    ],
  },
  navBox: {
    boxes: [
      {
        url: "/#education",
        name: "#My Projects",
      },
      {
        url: "/#socials",
        name: "#Socials",
      },
    ],
  },
  socials: {
    github: {
      username: "jareer12",
      stats: {},
    },
  },
};