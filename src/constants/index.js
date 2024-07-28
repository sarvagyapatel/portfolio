import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Currently, I am a pre-final year B.Tech student majoring in Computer Science and Engineering. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Currently, I am a pre-final year B.Tech student majoring in Computer Science and Engineering. Besides web development, I enjoy problem-solving in data structures and algorithms, having attended multiple coding contests on various platforms and achieved commendable ranks. My journey in web development began with a deep curiosity about how things work, and it has evolved into a continuous pursuit of learning and adapting to new challenges. I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js, and MongoDB. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active and explore new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Machine Learning Trainee",
    company: "IBM",
    description: `Achieved successful implementation of machine learning models to predict diamond prices and carat weights with over 90% accuracy. Engineered, trained, and evaluated over 10 regression models, achieving R Squared values consistently above 0.85. Exhibited expertise in handling large datasets and optimizing model performance, leading to a 15% improvement in predictive accuracy.`,
    technologies: ["Python", "Jupyter", "Regression"],
  },
];

export const PROJECTS = [
  {
    title: "Mystery Message",
    link: "https://www.mysterymessage.sarvagyapatel.in/",
    image: project1,
    description:
      "A fully functional anonymous messaging platform, allowing users to receive messages with a unique link and allowing senders to send messages through that link anonymously.",
    technologies: ["NextJs", "Tailwind", "TypeScript", "Node.js", "MongoDB", "Next-Auth"],
  },
  {
    title: "TravelEase",
    link: "https://www.travelease.sarvagyapatel.in/",
    image: project3,
    description:
      "A website to offer users a comprehensive travel exprience, with features such as providing travel locations at the destination, offering the prices of flights and much more.",
    technologies: ["NextJs", "Tailwind", "TypeScript", "WebApi"],
  },
  {
    title: "TodoList",
    link: "https://www.todolist.sarvagyapatel.in/",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, status and deletion.",
    technologies: ["ReactJs", "Tailwind", "JavaScript", "Appwrite"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Lucknow, Uttar Pradesh, India",
  phoneNo: "+91 7238055043",
  email: "patelsarvagya5@gmail.com",
};
