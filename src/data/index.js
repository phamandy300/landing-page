import {
  wbp,
  ims,
  vwp,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  // {
  //   id: "Links",
  //   title: "Links",
  // },
];

const experiences = [
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter",
    date: "July - Aug, 2024",
    details: [
      "<span style='color: white;'>Built</span> 5+ AI apps and APIs using NextJS, OpenAI, PineCone, StripeAPI with 98% accuracy as seen by 1000 users",
      "<span style='color: white;'>Developed</span> projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
      "<span style='color: white;'>Networked</span> with industry experts and peers, gaining hands-on experience in the gaming industry.",
    ],
  },
  {
    title: "Extern",
    company_name: "Mobalytics Remote Extern",
    date: "May - June, 2024",
    details: [
      "<span style='color: white;'>Researched</span> Risk of Rain 2, Enter the Gungeon, and the Roguelike genre to analyze player personas, experiences, psychology, and revenue models",
      "<span style='color: white;'>Constructed</span> and <span style='color: white;'>presented</span> reports with findings and recommendations, enhancing market research and strategic planning skills",
      "<span style='color: white;'>Coached</span> by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git and microservice patterns",
    ],
  },
];

const portfolio = [
  {
    name: "Virtual Webcam Painter",
    description:
      "Developed a Python application using OpenCV and MediaPipe to enable hand gesture-based painting via webcam, achieving 90% accuracy in gesture recognition for painting, color/tool selection, and erasing, and implemented a user-friendly interface with a visual toolbar for seamless interaction.",
    image: vwp,
    url: "https://www.youtube.com/watch?v=OqOSG__sOo4&feature=youtu.be"
  },
  {
    name: "Inventory Management System",
    description:
      "Designed and implemented a modern inventory management web application with Next.js and Material UI, featuring a responsive interface and advanced search capabilities, a scalable Firebase backend for efficient CRUD operations, and integrated TensorFlow.js COCO-SSD object recognition model for 95% accurate real-time image classification to enhance inventory tracking.",
    image: ims,
    url: "https://www.youtube.com/watch?v=6DMt9kb8yEY"
  },
  {
    name: "Website Builder Project",
    description:
      "Led a diverse team of three students to design and develop a customizable website template for small restaurants using Bootstrap, adapted plans based on user feedback through Agile methodologies, and enhanced team communication and collaboration while tackling real-world design challenges.",
    image: wbp,
    url: "https://gitlab.com/andypham300/ci-102-103-website-builder-project"
  },
];

export { experiences, portfolio };

