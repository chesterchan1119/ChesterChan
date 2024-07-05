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
    forbole,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "educations",
      title: "Educations",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Full-Stack Software Development",
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
      title: "Software Engineer (Part-time)",
      company_name: "Forbole Group",
      icon: forbole,
      iconBg: "#383E56",
      date: "January 2024 - April 2024",
      website:"https://www.forbole.com/zh-HK/about",
      points: [
        "Designed, implemented and tested 30+ blockchains and related decentralized applications",
        "Managed and provisioned high performing and robust institutional-grade system",
        "Deployed new blockchain validator nodes and applications"
      ]
    },
    {
      title: "Technical Analyst Intern (DevOps Team)",
      company_name: "OOCL",
      icon: oocl,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      website:"https://www.oocl.com/eng/aboutoocl/companyprofile/informationtechnology/Pages/default.aspx",
      points: [
        "Developed a Zero-Touch Provisioning software (Full Stack Internal Web Application), to enable automation on remote deployment of network switches in data centers",
        "Researched and implemented new solutions with Microsoft Azure Cross-Tenant Synchronization (Cross- organizational on-premises and cloud resources synchronization) between the headquarter and subsidiary companies",
        "Developed 3 automation tools that streamlined infrastructure deployment processes using PowerShell scripting language",
        "Managed Microsoft Azure Active Directory, including setup and congifuration of Azure AD, Automation Books, Azure SQL Database.",
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
        "Built, tested and deployed high-quality applications on AWS CodeBuild.",
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
        "Developed and deployed a 3D Unity-based first-person game and a web-based inventory management application for educational purposes.",
        "Collaborated with cross-functional teams including designers, business analyst, product managers, and other developers to produce on-demand App product. ",
        "Participated in code reviews and providing constructive feedback to other developers and coding instructors.",
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Zero Touching Provisioning",
      description:
        "Web-based platform that allows users to search, reserve, and apply new network access switch on a company architecture, providing a convenient and efficient solution for swift network installation needs.",
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
      source_code_link: "https://github.com/chesterchan1119/ZeroTouchProvisioning",
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
  
  const otherLinks = [
    {  
      name: "myGitHubRepo",
      link: "https://github.com/chesterchan1119?tab=repositories"
    }
  ]
  
  export { services, technologies, experiences, projects, otherLinks };