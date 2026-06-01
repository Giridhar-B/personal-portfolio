import content from "../../src/data/content.js";

export const buildPortfolioContext = () => {
  const skillsSection = content.skills
    .map(
      (skill) => `
${skill.category}:
${skill.items.join(", ")}
`
    )
    .join("\n");

  const experienceSection = content.experience
    .map(
      (exp) => `
Company: ${exp.company}
Role: ${exp.role}
Duration: ${exp.duration}
Timeline: ${exp.timeline}

Summary:
${exp.content}

Responsibilities:
${exp.points.map((point) => `- ${point}`).join("\n")}
`
    )
    .join("\n");

  const projectsSection = content.projects
    .map(
      (project) => `
Project: ${project.title}

Introduction:
${project.intro}

Description:
${project.description}

Technologies:
${project.tags?.join(", ") || "Not specified"}

GitHub:
${project.github || "Not available"}

Live Demo:
${project.live || "Not available"}
`
    )
    .join("\n");

  return `
PERSONAL INFORMATION

Name: ${content.name}

Professional Title:
${content.title}

Portfolio:
${content.portfolioLink}

Professional Summary:
${content.about}

--------------------------------------------------

EDUCATION

${content.education
  .map(
    (edu) => `
Institution: ${edu.institute}
Degree: ${edu.degree}
Academic Period: ${edu.duration}
Status: Completed
`
  )
  .join("\n")}

--------------------------------------------------

SKILLS

${skillsSection}

--------------------------------------------------

PROFESSIONAL EXPERIENCE

${experienceSection}

--------------------------------------------------

PROJECTS

${projectsSection}

--------------------------------------------------

CONTACT INFORMATION

Primary Contact Method:
Use the Contact page available on the portfolio website.

Email:
${content.contact.email}

LinkedIn:
${content.contact.linkedin}

GitHub:
${content.contact.github}

LeetCode:
${content.contact.leetcode}

Codeforces:
${content.contact.codeforces}

Location:
${content.contact.location}

--------------------------------------------------

ADDITIONAL CONTEXT

Giridhar is a Software Engineer focused on:

- Backend Engineering
- Full-Stack Development
- Scalable API Systems
- Machine Learning Applications
- Intelligent Recommendation Systems
- Real-Time Processing Systems

Core technologies frequently used:

- Java
- Python
- JavaScript
- React.js
- Node.js
- Express.js
- FastAPI
- PostgreSQL
- MongoDB
- Redis
- PyTorch
- PyTorch Geometric
- OpenCV
- MediaPipe

Career Goal:

Seeking Software Engineer, Software Developer, Backend Developer, Full-Stack Developer, and related engineering opportunities.
`;
};