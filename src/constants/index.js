import {
  
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    system_architecture,
    machine_learning,
    content_creation,
    beNovelty,
    ztp,
    cvpr,
    androidApp,
    oocl,
    preface,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Development",
      icon: web,
    },
    {
      title: "System Architecture",
      icon: system_architecture,
    },
    {
      title: "Machine Learning Engineering",
      icon: machine_learning,
    },
    {
      title: "Content Creation",
      icon: content_creation,
    },
  ];
  
  const technologies = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern (Infrastructure)",
      company_name: "OOCL",
      icon: oocl,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      website:"https://www.oocl.com/eng/aboutoocl/companyprofile/informationtechnology/Pages/default.aspx",
      points: [
        "Developed a Zero Touch Provisioning application, to allow clients and colleagues to search, reserve and apply new network switch to the Data Centers.",
        "Researched and implemented Cross-Tenant Synchronisation (Cross-organisational on-premise and cloud resources synchronisation.",
        "Developed 3 automation tools that streamlined infrastructure deployment processes using PowerShell scripting language",
        "Managed 5 Microsoft Azure Active Accounts, including setup and congifuration of Azure Active Directory, Automation Books, Azure SQL Database.",
        "Participated in Agile and provided constructive feedback to other developers, product managers in multiple teams.",
      ],
    },
    {
      title: "Backend Software Engineer Intern",
      company_name: "beNovelty Limited",
      icon: beNovelty,
      iconBg: "#E6DEDD",
      date: "June 2022 - September 2022",
      website:"https://www.benovelty.com/",
      points: [
        "Developed and maintained web API using NodeJs, ReactJs and other related technologies.",
        "Built, tested and deployed high-quality aplications on AWS Cloud Ecosystem.",
        "Created and Published OpenAPI-related tutorial contents via WordPress",
        "Conceived and deployed automated reports regarding the performance of the web which saved 48 hours of manual reporting each month.",
      ],
    },
    {
      title: "Summer Intern (Curriculum Team)",
      company_name: "Preface Coding",
      icon: preface,
      iconBg: "#383E56",
      date: "June 2021 - August 2021",
      website:"https://www.preface.ai",
      points: [
        "Built and Deployed a 3D Unity First-Person Game and Inventory Web application for educational use.",
        "Collaborating with cross-functional teams including designers, business analyst, product managers, and other developers to produce on-demand App product. ",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Zero Touching Provisioning",
      description:
        "Web-based platform that allows users to search, reserve, and apply new network access switch on the a company architecture, providing a convenient and efficient solution for network installation needs.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "pysftp",
          color: "pink-text-gradient",
        },
      
      ],
      image: ztp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Classification on Chest X-Ray with ResNet-18",
      description:
        "Deep Learning Model that enables users to classify Chest X-Ray with Covid-19 among normal, pneumonia and Covid.",
      tags: [
        {
          name: "PyTorch",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
        {
          name: "ResNet/CNN Architecture",
          color: "pink-text-gradient",
        },
      ],
      image: cvpr,
      source_code_link: "https://github.com/",
    },
    {
      name: "Android Inventory Application",
      description:
      "Android Application platform that allows users to search, reserve, and return assets from School Library, providing a convenient and efficient solution for invenrory needs.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: androidApp,
      source_code_link: "https://github.com/chesterchan1119/Inventory-Application-with-Android-Studio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };