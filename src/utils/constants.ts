export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

export const navLinks: { label: string; href: SectionId }[] = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

export const skills = [
  {
    id: 'python',
    title: 'Python',
    focus: 'Automation & APIs',
    bullets: ['FastAPI & Flask microservices', 'Automation scripts & data tooling', 'Async pipeline orchestration'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    focus: 'React, Vite, Tailwind',
    bullets: ['Design systems & component libraries', 'Interactive UX with Framer Motion', 'Performance-first, mobile UX'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    focus: 'Docker, CI/CD, Kubernetes',
    bullets: ['GitHub Actions pipelines', 'Dockerized microservices', 'Observability & IaC foundations'],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'Inferno-Club',
    description: 'Inferno Club is a stylish frontend web project built with HTML, CSS, and JavaScript. It features sections like Our Team, Gallery, Events, and Registration, offering an exclusive club-like experience with a modern, secret-society vibe',
    tags: ['HTML', 'CSS', 'JS'],
    tech: ['HTML', 'CSS', 'JS'],
    link: 'https://en4128.github.io/IC/',
  },
  {
    title: 'Face-Recognition-Based-Attendance-Management-System',
    description: ' The system automates attendance marking by recognizing students’ faces through a webcam in real-time using OpenCV, Python, and Machine Learning.',
    tags: ['python', 'Opencv', 'Machine Learning'],
    tech: ['OpenCV', 'python', 'Machine Learning'],
    link: 'https://github.com/En4128/Face-Recognition-Based-Attendance-Management-System.git',
  },
  {
    title: 'Anime Website',
    description: 'A Simple anime website which is used to watch anime made with MERN STACK and deployed using aws & Devops',
    tags: ['AWS', 'Mongodb', 'Express'],
    tech: ['Docker', 'Github-Actions', 'MERN'],
    link: 'https://github.com/En4128/Docker-voting-app.git',
  },

  {
    title: 'Spring PetClinic',
    description: 'DevOps control plane deployments with GitHub,Docker and Kubernetes.',
    tags: ['Jenkins', 'Kubernetes', 'Helm'],
    tech: ['Docker', 'Kubernetes', 'Github', 'Jenkins'],
    link: 'https://github.com/En4128/spring-petclinic-project.git',
  },
  {
    title: 'multi-container application ',
    description: 'A full-stack app is work with Docker,containerization, and microservices architecture to run in localhost',
    tags: ['Docker', 'Github', 'containerization'],
    tech: ['Docker', 'Git', 'microservices'],
    link: 'https://github.com/En4128/Docker-MultiContainer-App.git',
  },
  {
    title: 'Voting App',
    description: 'A Simple Voting App uses Python, Node.js, .NET, with Redis for messaging and Postgres for storage and Docker and k8s-specifications contains the YAML specifications of the Voting Apps services..',
    tags: ['Kubernetes', 'Python', 'Workers'],
    tech: ['Python', 'Redis', 'Step Functions'],
    link: 'https://github.com/En4128/Docker-voting-app.git',
  },


]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/En4128' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/elangovan-n-4b4445285' },
  { label: 'Insta', href: 'https://www.instagram.com/_elango.27?igsh=eGI3NDRqbGZ2ajZn' },
  { label: 'Email', href: 'mailto:elango200327@gmail.com' },
  { label: 'Phone', href: 'tel:+918056125873' },
]


