import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.jpg";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Create User Authentication System",
        description: "Develop a user registration and login system using JWT.",
        priority: "high",
        deadline: 30,
        image: taskImage2,
        alt: "Authentication Task",
        tags: [
          { title: "Backend", ...getRandomColors() },
          { title: "Security", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Design UI Mockups",
        description: "Create UI mockups for the new dashboard interface.",
        priority: "medium",
        deadline: 20,
        tags: [
          { title: "Design", ...getRandomColors() },
          { title: "UI/UX", ...getRandomColors() },
        ],
      },
    ],
  },
  pending: {
    name: "Pending",
    items: [
      {
        id: uuidv4(),
        title: "Implement API Endpoints",
        description: "Develop RESTful API endpoints for user data.",
        priority: "high",
        deadline: 15,
        tags: [
          { title: "API", ...getRandomColors() },
          { title: "Development", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Conduct User Testing",
        description: "Gather feedback from users on the new features implemented.",
        priority: "medium",
        deadline: 10,
        image: taskImage,
        alt: "User Testing Task",
        tags: [
          { title: "Testing", ...getRandomColors() },
          { title: "Feedback", ...getRandomColors() },
        ],
      },
    ],
  },
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "Set Up Continuous Integration",
        description: "Configure CI/CD pipeline using GitHub Actions.",
        priority: "high",
        deadline: 25,
        image: taskImage3,
        alt: "CI Task",
        tags: [
          { title: "DevOps", ...getRandomColors() },
          { title: "Automation", ...getRandomColors() },
        ],
      },
    ],
  },
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "Refactor Codebase",
        description: "Improve code quality and remove technical debt.",
        priority: "medium",
        deadline: 5,
        tags: [
          { title: "Refactoring", ...getRandomColors() },
          { title: "Maintenance", ...getRandomColors() },
        ],
      },
      {
        id: uuidv4(),
        title: "Integrate Payment Gateway",
        description: "Implement payment processing using Stripe API.",
        priority: "high",
        deadline: 12,
        tags: [
          { title: "Payments", ...getRandomColors() },
          { title: "Integration", ...getRandomColors() },
        ],
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Launch MVP",
        description: "Release the Minimum Viable Product to early adopters.",
        priority: "high",
        deadline: 0,
        image: taskImage,
        alt: "MVP Launch Task",
        tags: [
          { title: "Launch", ...getRandomColors() },
          { title: "Product", ...getRandomColors() },
        ],
      },
    ],
  },
};
