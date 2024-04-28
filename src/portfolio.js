const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Pattapusiva/Portfolio.git',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Siva Pattapu',
  role: 'Data Analyst',
  description:
    "Welcome to my data analyst portfolio, where I showcase my expertise in transforming raw data into actionable insights. With a focus on strategic decision-making and business growth, my projects highlight proficiency in exploratory data analysis, predictive modeling, and data visualization. Let's connect and unlock the power of data-driven innovation together.",
  resume: 'https://example.com',
  social: {
    linkedin: 'http://www.linkedin.com/in/pattapu-siva-575574283',
    github: 'https://github.com/Pattapusiva',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CREDIT CARD APPROVAL',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Machine Learning', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'BANK MARKETING',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Machine Learning', 'Python'],
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
  "Bussiness Development Tools",
  "Python",
  "R programming",
  "Power BI Tools",
  "Tableau",
  "Java",
  "C++",
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pattapusiva1@gmail.com',
}

export { header, about, projects, skills, contact }
