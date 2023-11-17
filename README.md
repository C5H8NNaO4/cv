# A Data Driven CV for Web Developers

A multi-lingual data driven CV for web developers that keeps track of your experience. Just configure some starting data and you are good to go. The project uses _i18n_ to interpolate markdown files. You can add your own Biography to the _/src/data/bio/\*.md_ files.

## Demo

https://justmycv.com/en
![alt text](public/ss.png 'Screenshot')

## How to use

This is a boilerplate template to quickly host an interactive always up-to-date CV on Vercel.

You will need to replace _skills, projects, work experience, and education data_ with your own data.

Experience with TypeScript, React and MUI is recommended.

This project uses [react-to-pdf](https://www.npmjs.com/package/react-to-pdf) to render your CV to pdf on desktop. You can use pre-rendered files for each language on mobile e.g. https://justmycv.com/en.pdf

# Getting Started

1. Clone the repo `git clone https://github.com/C5H8NNaO4/cv.git`
2. Install dependencies. `cd cv && yarn install`
3. Update the files under _/src/data/\*_
4. Start the development server. `yarn dev`
5. Deploy your project to vercel.
6. Enjoy your CV!
7. Apply for a job!