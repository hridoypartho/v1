const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'HP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hridoy Partho',
  role: 'Front End Engineer',
  description:
    'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, ThemeForest products at',
  resume: './resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/hriody-halder-partho-0a23151b9/',
    github: 'https://github.com/hridoypartho',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'A Multipurpose web app for Company, built with Html, Scss, Javascript ',
    stack: ['HTML', 'SASS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://zakirsoft.com/',
  },
  {
    name: 'Project 2',
    description:
      'Bestkit - Multipurpose Landing Page HTML Template',
      stack: ['HTML', 'SASS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://bestkit.netlify.app/',
  },
  {
    name: 'Project 3',
    description:
      'Custar - React Next JS Landing Page Template',
      stack: ['React', 'SASS', 'Next JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://custar-next.netlify.app/',
  },
  {
    name: 'Project 4',
    description:
      'Custar - App, Software & SaaS Landing Templates',
      stack: ['HTML', 'SASS', 'Javascript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://finestdevs.com/demos/custar-html',
  },
  {
    name: 'Project 5',
    description:
      'Fastland - React Gatsby JS Landing Page Template',
      stack: ['React', 'SASS', 'Gatsby JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://fastland-gatsby.netlify.app/',
  },
  {
    name: 'Project 6',
    description:
      'A single-page web app for client, built with React Next.js, and SCSS',
      stack: ['React', 'SASS', 'Next JS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://bouldbound.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Nunjucks',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Php',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hridoyhalderpartho@mail.com',
}

export { header, about, projects, skills, contact }
