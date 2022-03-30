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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
