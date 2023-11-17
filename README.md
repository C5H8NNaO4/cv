# A Data Driven CV for Web Developers

A multi-lingual data driven CV for web developers that keeps track of your experience. Just configure some starting data and you are good to go. The project uses _i18n_ to interpolate markdown files. You can add your own Biography to the _/src/data/bio/\*.md_ files.

## Demo

https://justmycv.com/en
![alt text](public/ss.png 'Screenshot')

## Features

- Multi-lingual
- Markdown files
- i18n
- React
- MUI
- React To PDF
- Vercel
- 100% Typescript

### Approach

- Use _i18n_ to inline variables in markdown files.
- Use _react-markdown_ to render markdown files.
- Use _react-to-pdf_ to render the CV to pdf on desktop.
- Use _prerendered_ pdfs to render the CV to pdf on mobile
- The CV is based on your data.
- The CV is always up-to-date.
- Recent and overall experience is computed based on work / project history.

## How to use

This is a boilerplate template to quickly host an interactive always up-to-date CV on Vercel.

You will need to replace _skills, benefits, projects, work experience, and education data_ with your own data.

Experience with TypeScript, React and MUI is recommended.

This project uses [react-to-pdf](https://www.npmjs.com/package/react-to-pdf) to render your CV to pdf on desktop. You can use pre-rendered files for each language on mobile e.g. https://justmycv.com/en.pdf

# Getting Started

1. Clone the repo `git clone https://github.com/C5H8NNaO4/cv.git`
2. Install dependencies. `cd cv && yarn install`
3. Update all the files under _/src/data/\*\*/\*_
4. Start the development server. `yarn dev`
5. Deploy your project to vercel.
6. Enjoy your CV!
7. Apply for a job.
