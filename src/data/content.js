const content = {
  name: "Giridhar B",
  title: "Software Engineer",

  about:
    "**Software Engineer** focused on **backend engineering**, **full-stack development**, and **intelligent recommendation systems**. Worked as a **Software Developer Intern** at 3i Infotech Limited building **REST-driven alert automation workflows** and **enterprise integrations**. Built scalable projects using **React.js**, **Node.js**, **FastAPI**, **Redis**, **PostgreSQL**, and **Graph Neural Networks**.",

  portfolioLink: "https://giridhar-portfolio-eosin.vercel.app/",

  education: [
    {
      institute: "VIT Chennai",
      degree: "MCA",
      duration: "2023 - 2025"
    },
    {
      institute: "Bishop Heber College",
      degree: "BCA",
      duration: "2019 - 2022"
    }
  ],

  photo: "/profile-photo.png",

  skills: [
    {
      category: "Programming Languages",
      color: "blue",
      items: ["Java", "Python", "JavaScript"]
    },

    {
      category: "Frontend",
      color: "green",
      items: ["HTML", "CSS", "React.js", "Tailwind CSS"]
    },

    {
      category: "Backend",
      color: "orange",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "REST APIs",
        "JWT"
      ]
    },

    {
      category: "Databases & Caching",
      color: "red",
      items: ["SQL", "MongoDB", "Redis", "PostgreSQL"]
    },

    {
      category: "ML / AI",
      color: "purple",
      items: [
        "Numpy",
        "Pandas",
        "PyTorch",
        "PyTorch Geometric",
        "GNNs",
        "LightGCN",
        "ST-GCN",
        "OpenCV",
        "MediaPipe"
      ]
    },

    {
      category: "Tools",
      color: "gray",
      items: ["Git", "GitHub", "Postman", "Vercel", "Render"]
    },

    {
      category: "CS Fundamentals",
      color: "brown",
      items: [
        "Data Structures",
        "Algorithms",
        "Object Oriented Programming",
        "Database Management System",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ],

  experience: [
    {
      company: "3i Infotech Limited",
      role: "Software Developer Intern",
      duration: "6 months",
      timeline: "Sep 2024 - Mar 2025",

      certificate: "public/certificates/Internship_Certificate.pdf",

      content:
        "Built **REST-driven alert automation** and enterprise monitoring workflows. Integrated **Zabbix** monitoring system with **ManageEngine ServiceDesk Plus** to automate incident ticket creation and alert processing using **JavaScript** and **REST APIs**.",

      points: [
        "Worked on monitoring and automation of **IT infrastructure alerts** by integrating **Zabbix** with **ManageEngine ServiceDesk Plus** using **JavaScript** and **REST APIs** to automate incident creation workflows.",

        "Built logic to detect **duplicate alerts** for the same server or issue and consolidate them into existing tickets, reducing redundant incident creation and improving **operational efficiency**.",

        "Designed **rule-based alert classification** across server utilization, network issues, application errors, and database monitoring to standardize incident handling.",

        "Developed **REST-driven workflows** for alert processing, **payload transformation**, and automated ticket updates across systems.",

        "Implemented **structured error handling** and robust **data parsing** to improve integration stability and ensure consistent ticket creation across environments.",

        "Collaborated with senior engineers in staging environments to validate **alert ingestion**, **API responses**, and **ticket automation workflows**. Participated in **code reviews** and improved integration reliability based on feedback.",

        "Documented **integration architecture**, **API workflows**, and **rule configurations** for internal engineering reference."
      ]
    }
  ],

  projects: [
    {
      id: "gnn-movie-recommendation",
      title: "GNN-Based Movie Recommendation System",

      intro:
        "Built a real-time movie recommendation system using **LightGCN** trained on MovieLens 1M dataset, delivering personalized recommendations with **FastAPI backend** and **Redis caching**.",

      description:
        "Built a real-time movie recommendation system using **LightGCN** trained on MovieLens 1M dataset, delivering personalized recommendations through a scalable **graph-based architecture** with **FastAPI backend** and **Redis caching**. The system learns user-item interactions using **graph embeddings** and ranks results using **cosine similarity**, enabling high-quality personalized recommendations.",

      github: "https://github.com/Giridhar-B/movie-recommendation-system",

      live: "https://movie-recommendation-system-flax-nine.vercel.app",

      video: "/videos/RecomSystem.mp4",

      tags: [
        "PyTorch Geometric",
        "LightGCN",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "React.js"
      ]
    },

    {
      id: "gestosense",
      title: "GestoSense",

      intro:
        "Real-time sign language recognition system using **ST-GCN** and **MediaPipe** for gesture classification from live video input.",

      description:
        "Built a real-time sign language recognition system using **ST-GCN** and **MediaPipe**, where hand landmarks are converted into **spatial-temporal graph structures** for gesture classification. The system captures both **spatial joint relationships** and **temporal motion patterns**, enabling accurate real-time gesture recognition using OpenCV-based inference.",

      github: "https://github.com/Giridhar-B/sign-language-gnn",

      tags: ["PyTorch", "ST-GCN", "MediaPipe", "OpenCV", "Python"]
    },

    {
      id: "url-shortener",
      title: "URL Shortener",

      intro:
        "Production-ready URL shortener with **JWT authentication**, **Redis caching**, analytics dashboard, QR generation, and real-time click tracking.",

      description:
        "Built a full-stack URL shortener system using **Node.js** and **Express.js**, with **JWT authentication**, **Redis caching**, and **rate limiting** for scalable and secure request handling. Implemented REST APIs for URL shortening, redirection, and analytics, along with a real-time dashboard for click tracking and QR code generation.",

      github: "https://github.com/Giridhar-B/url-shortener",

      live: "https://url-shortener-one-lemon.vercel.app",

      video: "/videos/URLShort.mp4",

      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "JWT",
        "React.js"
      ]
    }
  ],

  media: {
    certificates: [
      "/images/Certificates/GFG.png",
      "/images/Certificates/InternshipCertificate.png",
    ],

    urlShort: [
      "/images/URLShort/analytics.png",
      "/images/URLShort/analytics7.png",
      "/images/URLShort/analytics30.png",
      "/images/URLShort/analyticsall.png",
      "/images/URLShort/dashboard1.png",
      "/images/URLShort/dashboard2.png",
      "/images/URLShort/dashboardinactive.png",
      "/images/URLShort/dashboardlogout.png",
      "/images/URLShort/dashboardwithlink.png",
      "/images/URLShort/inactivelink.png",
      "/images/URLShort/loginPage.png",
    ],

    recommendationSystem: [
      "/images/Recommendation System/RS1.png",
      "/images/Recommendation System/RS2.png",
      "/images/Recommendation System/RS3.png",
      "/images/Recommendation System/RS4.png",
      "/images/Recommendation System/RS5.png",
      "/images/Recommendation System/RS6.png",
      "/images/Recommendation System/RS7.png",
      "/images/Recommendation System/RS8.png",
      "/images/Recommendation System/RS9.png",
    ],

    videos: [
      {
        title: "URL Shortener Demo",
        video: "/videos/URLShort.mp4",
      },
      {
        title: "Recommendation System Demo",
        video: "/videos/RecomSystem.mp4",
      },
    ],
  },

  videos: [
    {
      title: "URL Shortener Demo",
      description: "Full-stack URL shortening service with custom links, redirect handling, and usage tracking.",
      video: "/videos/URLShort.mp4"
    },
    {
      title: "GNN Recommendation System Demo",
      description: "Graph Neural Network-based recommender system for personalized predictions using user–item graph modeling.",
      video: "/videos/RecomSystem.mp4"
    }
  ],

  contact: {
    email: "giridhar7703@gmail.com",
    linkedin: "https://www.linkedin.com/in/giridhar-balasubramanian/",
    github: "https://github.com/Giridhar-B",
    leetcode: "https://leetcode.com/u/giri_7703/",
    codeforces: "https://codeforces.com/profile/Giridhar21",
    location: "Tiruchirappalli, Tamil Nadu, India"
  }
};

export default content;