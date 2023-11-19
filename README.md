# A Data Driven CV for Web Developers

A multi-lingual data driven CV for web developers that keeps track of your experience. Just configure some starting data and you are good to go. The project uses _i18n_ to interpolate markdown files. You can add your own Biography to the _/src/data/bio/\*.md_ files.

## Goals

- Version control for your CV
- Keep track of your skills and experience.
- Effectively communicate your skills and experience
- Automatically mark recent experiences.
- Communicate expectations, growth and benefits.
- Provide optimized visualization of your information.
- Provide a indexable / searchable PDF version of the Website.
- Showcase your language abilities.
- Highlight your stack.
- Break down experience by skills.
- Color Coding and Symbols to increase information density.

## Demo

At https://justmycv.com/en.pdf is the prerendered PDF and at https://justmycv.com/en the up to date website.
![alt text](public/ss.png 'Screenshot')

## Features

- Multi-lingual
- Markdown files
- i18n
- React
- MUI
- Vercel
- 100% Typescript

### Approach

- The CV is based on your data.
- Recent and overall experience is computed based on configured dates / work / project history.
- Use _i18n_ to inline variables in markdown files.
- Use _react-markdown_ to render markdown files.
- Use _Chrome_ to render the CV to PDF.
- Use pre-rendered PDFs for each language.

## How to use

This is a boilerplate template to quickly host an interactive always up-to-date CV on Vercel.

You will need to replace _skills, benefits, projects, work experience, and education data_ with your own data.

Experience with TypeScript, React and MUI is recommended.

# Getting Started

1. Clone the repo `git clone https://github.com/C5H8NNaO4/cv.git`
2. Install dependencies. `cd cv && yarn install`
3. Update all the files under _/src/data/\*\*/\*_
4. Start the development server. `yarn dev`
5. Open each language in your browser. `https://localhost:3000/en`
6. Use your Browsers print feature to print all but the last (empty) page.
7. Put the pre-rendered PDFs in the _/public_ folder.
7. Deploy your project to vercel.
8. Enjoy your CV!
9. Apply for a job.
