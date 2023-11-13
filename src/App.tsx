import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './lib/i18n';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolIcon from '@mui/icons-material/School';
import Markdown from './components/Markdown/Markdown';
import {
  Paper,
  Grid,
  Card,
  Link,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemIcon,
  CircularProgress,
  Typography,
  ListItemButton,
  Chip,
  Box,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardActionArea,
  CardActions,
  Button,
} from '@mui/material';
import { capitalCase } from 'change-case';
import { HighlightedText } from './components/HighlightedText/HighlightedText';
import { age, durStr, duration, map, projectExperience } from './lib/util';
import { BIRTHDAY, REACT_START, TRAINING_START } from './const';

const projects = [
  {
    name: 'maxon online presence',
    description: `A modern website for the maxon company to showcase and sell their products. A world-wide digital presence using state of art technology to power the website. Coremedia as CMS and Salesforce as commerce engine ensure a scalable backend infrastructure. Next.js and React provide a modern headless frontend.`,
    href: 'https://preview.maxongroup.com/de-de',
    duration: 2.5,
    stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'GraphQL'],
  },
  {
    name: 'React Server',
    href: 'https://state-less.cloud',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
  },
  {
    name: 'Lists App',
    href: 'https://lists.state-less.cloud',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React Server', 'React'],
  },
  {
    name: 'Reflect.js',
    repo: 'https://lists.state-less.cloud',
    duration: 1.5,
    stack: ['JavaScript'],
  },
  { name: 'Online CV', description: 'My interactive online CV.', href: 'https://state-less.cloud/cv', stack: []},
];
const data = {
  skills: [
    { name: 'TypeScript', experience: 7, stack: true, tags: ['language'] },
    { name: 'JavaScript', start: TRAINING_START, tags: ['language'] },
    {
      name: 'React',
      experience: age(REACT_START),
      stack: true,
      tags: ['frontend', 'framework'],
    },
    {
      name: 'Vue',
      experience: 2.5,
      tags: ['frontend', 'framework'],
    },
    {
      name: 'serverless',
      experience: 2,
      tags: ['frontend', 'framework'],
    },
    {
      name: 'MUI',
      experience: 5,
      stack: true,
      tags: ['frontend', 'framework'],
    },
    {
      name: 'Next.js',
      experience: projectExperience(projects, 'Next.js'),
      stack: true,
      tags: ['frontend'],
    },
    { name: 'Node.js', experience: 7, tags: ['backend'] },
    { name: 'GraphQL', experience: 3, stack: true, tags: ['backend'] },
    { name: 'PSQL', experience: 3, tags: ['backend'] },
    { name: 'AWS Lambda', experience: 3, tags: ['backend'] },
    { name: 'Scrum', experience: 3, tags: ['agile'] },
    { name: 'Git', experience: 11, tags: ['misc'] },
    { name: 'ESLint', experience: 10, tags: ['misc'] },
    { name: 'Docker', experience: 5, tags: ['misc'] },
  ],
  projects,
};

const experience = data.skills.reduce((acc, cur) => {
  acc[cur.name.replace(/\./g, '-')] = cur.experience || age(cur.start);
  return acc;
}, {});
function App() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card square>
            <CardHeader
              avatar={<Avatar src="/pp.jpg" />}
              title="Moritz Roessler"
              subheader="Senior Fullstack Developer"
            />
          </Card>
          <Card square>
            <CardContent>
              <Description />
            </CardContent>
          </Card>
          <Card square>
            <CardHeader title="Stack"></CardHeader>
            <Stack skills={data.skills} />
          </Card>

          <Card square>
            <CardHeader title="Skills" />
            <Grid container spacing={1}>
              <SkillCards skills={data.skills} />
              <Grid item xs={12}>
                <Card square>
                  <CardHeader title="Spoken" subheader="Languages" />
                  <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <ListItem sx={{ flexShrink: 1, width: '50%' }}>
                      <ListItemIcon>
                        <Avatar sx={{ mr: '-40px' }}>G</Avatar>
                        <CircularProgress
                          value={100}
                          variant="determinate"
                        ></CircularProgress>
                      </ListItemIcon>
                      <ListItemText primary="German" secondary="Native" />
                    </ListItem>
                    <ListItem sx={{ flexShrink: 1, width: '50%' }}>
                      <ListItemIcon>
                        <Avatar sx={{ mr: '-40px' }}>E</Avatar>
                        <CircularProgress value={80} variant="determinate" />
                      </ListItemIcon>
                      <ListItemText primary="English" secondary="C1" />
                    </ListItem>
                    <ListItem sx={{ flexShrink: 1, width: '50%' }}>
                      <ListItemIcon>
                        <Avatar sx={{ mr: '-40px' }}>S</Avatar>

                        <CircularProgress value={50} variant="determinate" />
                      </ListItemIcon>
                      <ListItemText primary="Spanish" secondary="B1" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card square>
            <CardHeader title="Education" />
            <List>
              <EducationEntry
                degree="FIAE"
                end="2012"
                school="Walther Rhathenau"
                start="2019"
              />
              <EducationEntry
                degree="Fachhochschulreife"
                end="2009"
                school="Kepler Gymnasium"
                start="2001"
              />
            </List>
          </Card>
          <Card>
            <CardHeader title="Work History" />
            <List>
              <EducationEntry
                degree="FIAE"
                end="2012"
                school="Walther Rhathenau"
                start="2019"
              />
              <WorkHistoryEntry
                company="Bechtle"
                position="Trainee"
                end="2012"
                start="2014"
              />
            </List>
          </Card>
          <Card square>
            <CardHeader title="Portfolio"></CardHeader>
            <Projects projects={data.projects} />
          </Card>
          <Card square sx={{ mt: 1 }}>
            <CardHeader title="Expected Benefits" />
            <ListItem>
              <ListItemIcon>
                <EuroSymbolIcon />
              </ListItemIcon>
              <ListItemText primary="100k €" secondary="Salary" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="100% Remote" secondary="Homeoffice" />
            </ListItem>
            <CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link href="tel://+4917620350106">Call</Link>
                </Button>
                <Button size="small" color="primary">
                  <Link href="mailto://moritz.roessler@gmail.com">Contact</Link>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
}
export const EducationEntry = (props: EducationEntry) => {
  const { school, degree, start, end } = props;
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${degree} at ${school}`}
      />
    </ListItem>
  );
};

export interface WorkHistoryEntry {
  company: string;
  position: string;
  start: string;
  end: string;
}
export const WorkHistoryEntry = (props: WorkHistoryEntry) => {
  const { company, position, start, end } = props;
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${position} at ${company}`}
      />
    </ListItem>
  );
};
export default App;

export const Skills = ({ skills, tag }) => {
  return (
    <List dense disablePadding>
      {skills
        .filter(({ tags }) => {
          return tags.includes(tag);
        })
        .map((skill) => {
          return (
            <ListItemButton dense>
              <ListItemText
                sx={{ my: 0 }}
                primary={skill.name}
                secondary={`${skill.experience || age(skill.start)} years`}
              ></ListItemText>
            </ListItemButton>
          );
        })}
    </List>
  );
};

export const Stack = ({ skills }) => {
  return (
    <Box sx={{ m: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {skills
        .sort((a, b) => b.experience - a.experience)
        .filter((skill) => skill.stack)
        .map((skill) => {
          return (
            <Chip
              label={skill.name}
              color={skill.experience > 10 ? 'primary' : 'secondary'}
            />
          );
        })}
    </Box>
  );
};

const chunks = (arr, n) => {
  return arr.reduce((acc, item, i) => {
    acc[i % n] = [...(acc[i % n] || []), item];
    return acc;
  }, []);
};
export const SkillCards = ({ skills }) => {
  const tags = [
    ...new Set(skills.reduce((acc, skill) => [...acc, ...skill.tags], [])),
  ];

  const chunked = chunks(tags, 2);
  return (
    <Grid item container xs={12} spacing={1}>
      {chunked.map((chunk) => {
        return (
          <Grid item container xs={6} spacing={1} alignContent={'start'}>
            {chunk.map((tag) => {
              return (
                <Grid item xs={12} spacing={1}>
                  <Card square>
                    <CardHeader title={capitalCase(tag)} />
                    <Skills skills={skills} tag={tag} />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </Grid>
  );
};

export const Projects = ({ projects }) => {
  return (
    <Card>
      <Grid container spacing={1}>
        {projects.map((project) => {
          return (
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={project.name}
                  subheader={durStr(
                    project.duration || duration(project.start, project.end)
                  )}
                />
                <Box sx={{ m: 1, gap: 0.5, display: 'flex', flexWrap: 'wrap' }}>
                  {project.stack.map((tech) => {
                    return <Chip label={tech} size="small" />;
                  })}
                </Box>

                <ListItem dense>
                  <ListItemText
                    primary={<Link href={project.href}>{project.href}</Link>}
                    secondary={'Website'}
                  />
                </ListItem>
                {project.description && (
                  <Accordion>
                    <AccordionSummary>
                      {project.description?.slice(0, 50)}...
                    </AccordionSummary>
                    <AccordionDetails>
                      <Markdown>
                        {'...' + project.description?.slice(50)}
                      </Markdown>
                    </AccordionDetails>
                  </Accordion>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export const Description = () => {
  const { t } = useTranslation();
  return (
    <Markdown>
      {t('description', {
        age: age(BIRTHDAY),
        experience,
        consts: map({ BIRTHDAY, TRAINING_START }, (date: string) => age(date)),
        tags: {
          frameworks: data.skills
            .filter((skill) => {
              return (skill.tags || []).includes('framework');
            })
            .sort((a, b) => (b.experience || 0) - (a.experience || 0))
            .slice(0, 5)
            .map((skill) => skill.name)
            .join(', '),
        },
      })}
    </Markdown>
  );
};
