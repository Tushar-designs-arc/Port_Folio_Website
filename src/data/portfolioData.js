import movieImg from '../images/3.jfif';
import certImg from '../images/Screenshot.png';
import profileImg from '../images/Image_1.jpg';
export { movieImg, certImg, profileImg };
const imageMap = {
  movie: movieImg,
  '3.jfif': movieImg,
  screenshot: certImg,
  'screenshot.png': certImg,
  image_1: profileImg,
  'image_1.jpg': profileImg,
};
export function resolveImage(img) {
  if (!img) return null;
  if (typeof img === 'string') {
    const key = img.toLowerCase().trim();
    return imageMap[key] || img;
  }
  return img;
}

export const profile = {
  name: 'Tushar Saini',
  firstName: 'Tushar',
  lastName: 'Saini',
  role: 'MERN Stack Developer',
  email: 'sainitushar322@gmail.com',
  phone: '+91 9828972741',
  location: 'Alwar, Rajasthan',
  image: profileImg,
  summary:
    'MERN Stack Developer focused on building responsive web applications, REST APIs, and practical full-stack products with React, Node.js, Express, and MongoDB.',
  about: 'Computer Science undergraduate at Manipal University Jaipur with a focus on full-stack web development. I enjoy turning ideas into responsive, database-driven applications and continuously improving my development skills through hands-on projects.',

  social: {
    github: 'https://github.com/Tushar-designs-arc',
    linkedin: 'https://www.linkedin.com/in/tushar-software-engineer/',
  },
};

export const navItems = [
  'About',
  'Skills',
  'Work',
  'Journey',
  'Interests',
  'Certificates',
  'Contact',
];

export const skillGroups = [
  ['Languages', ['JavaScript', 'C++']],
  ['Frontend', ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'Bootstrap']],
  ['Backend', ['Node.js', 'Express.js']],
  ['Databases', ['MongoDB', 'MySQL (Basic)']],
  ['Tools & Platforms', ['Git', 'GitHub', 'VS Code', 'Postman', 'Notion']],
  [
    'Concepts',
    ['REST API Development', 'CRUD Operations', 'API Integration', 'Responsive Design', 'Database Design', 'HTTP'],
  ],
];

export const projects = [
  {
    title: "Movie's Addict",
    description:
      'Full-stack MERN movie reviewing platform. Browse, submit reviews, and rate films.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'REST APIs',
    ],
    image: movieImg,
    repo: 'https://github.com/Tushar-designs-arc',
    live: 'https://www.linkedin.com/in/tushar-software-engineer/',
  },

  {
    title: 'Library Management & Book Review',
    description:
      'MERN-based system to browse books, submit reviews, and manage records with CRUD.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],

    image: certImg,
    // Replace these later with the actual project URLs.
    repo: 'https://github.com/Tushar-designs-arc',
    live: 'https://www.linkedin.com/in/tushar-software-engineer/',
  },
];

export const certificates = [
  {
    sr: '01',
    name: 'Full-Stack Web Development',
    desc: 'Self-paced / Project-based',
    year: '2025',
    image: certImg,
    description:
      'Completed a comprehensive self-paced Full-Stack Web Development program covering the MERN stack (MongoDB, Express.js, React.js, Node.js). The curriculum included building RESTful APIs, designing responsive UIs with Tailwind CSS, and deploying full-stack applications.',
  },
  {
    sr: '02',
    name: 'Data Structures & Algorithms',
    desc: 'Coursework',
    year: '2025',
    image: certImg,
    description:
      'Completed university coursework in Data Structures & Algorithms as part of the Computer Science undergraduate program at Manipal University Jaipur. Topics covered included arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming.',
  },
];

export const interests = [
  "Exploring New Technologies — I enjoy learning unfamiliar tools, concepts and understanding how they work.",
  "Building Products — I like turning new ideas and concepts into useful, working applications.",
  "Growing Through Projects — Every project gives me an opportunity to improve my technical skills and become a better developer.",
];