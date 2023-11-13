import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useState } from 'react';
import './App.css';
import { usePDF } from 'react-to-pdf';
import './lib/i18n';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/StarBorder';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Markdown from './components/Markdown/Markdown';
import {
  IconButton,
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
  Tooltip,
} from '@mui/material';
import { capitalCase } from 'change-case';
import { age, durStr, duration, map, projectExperience } from './lib/util';
import { BIRTHDAY, REACT_START, TRAINING_START } from './const';
import { Project, Skill } from './types';
import { Page } from './components/Page';

const projects = [
  {
    name: 'maxon online presence',
    description: 'description.maxon',
    href: 'https://preview.maxongroup.com/de-de',
    duration: 1.5,
    stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'GraphQL'],
  },
  {
    name: 'React Server',
    description: 'description.react-server',
    href: 'https://state-less.cloud',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
  },
  {
    name: 'Lists App',
    description: 'description.lists',
    href: 'https://lists.state-less.cloud',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React Server', 'React'],
  },
  {
    name: 'Reflect.js',
    description: 'description.reflect',
    repo: 'https://github.com/C5H8NNaO4/reflect.js',
    duration: 1.5,
    stack: ['JavaScript'],
  },
  {
    name: 'Online CV',
    description: 'description.mycv',
    href: 'https://justmycv.com',
    stack: [],
  },
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
    { name: 'Kubernetes', experience: 2, tags: ['misc'] },
  ],
  projects,
};

const experience = data.skills.reduce(
  (acc: Record<string, number>, cur: Skill): Record<string, number> => {
    acc[cur.name.replace(/\./g, '-')] = cur.experience || age(cur.start) || 0;
    return acc;
  },
  {} as Record<string, number>
);
function App() {
  const { toPDF, targetRef } = usePDF({ filename: 'CV - Moritz Roessler.pdf' });
  const [clsn, setClsn] = useState('');
  const exporting = clsn === 'exporting';
  const { t } = useTranslation();
  return (
    <div id="root" className={clsn} ref={targetRef}>
      <Page exporting={exporting}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card square>
              <CardHeader
                avatar={<Avatar src="/pp.jpg" />}
                title="Moritz Roessler"
                subheader="Senior Fullstack Developer"
                action={
                  <IconButton
                    sx={{
                      display: {
                        xs: 'none',
                        md: 'flex',
                      },
                    }}
                    onClick={() => {
                      setClsn('exporting');
                      setTimeout(() => {
                        toPDF();
                        setClsn('');
                      }, 0);
                    }}
                  >
                    <DownloadIcon></DownloadIcon>
                  </IconButton>
                }
              />
            </Card>
            <Card square>
              <CardContent>
                <Description />
              </CardContent>
            </Card>
            <Card square>
              <CardHeader title="Stack"></CardHeader>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack skills={data.skills} />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card square>
              <CardHeader title={t('Education')} />
              <List>
                <EducationEntry
                  degree="FIAE"
                  end="2015"
                  school="Walther Rhathenau"
                  start="2012"
                />
                <EducationEntry
                  degree="Fachhochschulreife"
                  end="2009"
                  school="Kepler Gymnasium"
                  start="2001"
                />
              </List>
            </Card>
            <Card square sx={{ mt: 1 }}>
              <CardHeader title={t('Work History')} />
              <Box>
                <List>
                  <EducationEntry
                    degree="FIAE"
                    end="2015"
                    school="Bechtle"
                    start="2012"
                  />
                  <WorkHistoryEntry
                    company="Bechtle"
                    position="Junior Software Engineer"
                    end="2016"
                    start="2015"
                  />
                  <WorkHistoryEntry
                    position="Living abroad in Chile"
                    start="2016"
                    end="2017"
                  />
                  <WorkHistoryEntry
                    company="Bechtle"
                    homepage="https://www.bechtle.com"
                    position="Junior Software Engineer"
                    start="2018"
                    end="2019"
                  />
                  <WorkHistoryEntry
                    company="Spoo"
                    position="Software Engineer"
                    homepage="https://www.spoo-group.com"
                    start="2020"
                    end="2021"
                  />
                  <WorkHistoryEntry
                    company="Cosuno"
                    position="Senior Frontend Developer"
                    homepage="https://www.cosuno.com"
                    start="2022"
                    end="2022"
                  />
                  <WorkHistoryEntry
                    company="Digitas Pixelpark"
                    homepage="https://www.digitaspixelpark.com/"
                    position="Senior IT Developer"
                    start="2022"
                  />
                </List>
              </Box>
            </Card>
            <Card square sx={{ mt: 1 }}>
              <CardHeader title={t('Expected Benefits')} />
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
              {exporting && (
                <List>
                  <ListItem>
                    <ListItemText primary="+4917620350106" secondary="Phone" />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="moritz.roessler@gmail.com"
                      secondary="E-Mail"
                    />
                  </ListItem>
                </List>
              )}
              {!exporting && (
                <CardActionArea>
                  <CardActions>
                    <Tooltip title="+4917620350106" placement="bottom">
                      <Button size="small" color="primary">
                        <Link href="tel://+4917620350106">{t('Call')}</Link>
                      </Button>
                    </Tooltip>
                    <Tooltip
                      title="moritz.roessler@gmail.com"
                      placement="bottom"
                    >
                      <Button size="small" color="primary">
                        <Link href="mailto://moritz.roessler@gmail.com">
                          {t('Contact')}
                        </Link>
                      </Button>
                    </Tooltip>
                  </CardActions>
                </CardActionArea>
              )}
            </Card>
            {/* <Card square sx={{ p: '1px', mt: 1, border: 'unset' }}>
              <CardHeader title="Portfolio"></CardHeader>
              <Projects
                projects={data.projects}
                to={2}
                expanded={clsn !== ''}
                />
            </Card> */}
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card square>
              <CardHeader title="Skills" />
              <Grid container spacing={1}>
                <SkillCards skills={data.skills} />
                <Grid item xs={12}>
                  <Card square>
                    <CardHeader
                      title={capitalCase(t('spoken'))}
                      subheader={capitalCase(t('languages'))}
                    />
                    <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <ListItemButton
                        selected={i18n.language === 'de'}
                        sx={{ flexShrink: 1, width: '50%' }}
                        onClick={() => {
                          i18n.changeLanguage('de');
                          window.history.replaceState({}, '', '/de');
                        }}
                      >
                        <ListItemIcon>
                          <Avatar sx={{ mr: '-40px' }}>G</Avatar>
                          <CircularProgress
                            value={100}
                            variant="determinate"
                          ></CircularProgress>
                        </ListItemIcon>
                        <ListItemText
                          primary={t('German')}
                          secondary="Native"
                        />
                      </ListItemButton>
                      <ListItemButton
                        selected={i18n.language === 'en'}
                        sx={{ flexShrink: 1, width: '50%' }}
                        onClick={() => {
                          i18n.changeLanguage('en');
                          window.history.replaceState({}, '', '/en');
                        }}
                      >
                        <ListItemIcon>
                          <Avatar sx={{ mr: '-40px' }}>E</Avatar>
                          <CircularProgress value={80} variant="determinate" />
                        </ListItemIcon>
                        <ListItemText primary={t('English')} secondary="C1" />
                      </ListItemButton>
                      <ListItemButton
                        selected={i18n.language === 'es'}
                        sx={{ flexShrink: 1, width: '50%' }}
                        onClick={() => {
                          i18n.changeLanguage('es');
                          window.history.replaceState({}, '', '/es');
                        }}
                      >
                        <ListItemIcon>
                          <Avatar sx={{ mr: '-40px' }}>S</Avatar>

                          <CircularProgress value={50} variant="determinate" />
                        </ListItemIcon>
                        <ListItemText primary={t('Spanish')} secondary="B1" />
                      </ListItemButton>
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Portfolio"></CardHeader>
              <Projects
                projects={data.projects}
                from={0}
                to={3}
                expanded={clsn !== ''}
              />
            </Card>
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting}>
        <Card>
          <CardHeader title="Portfolio"></CardHeader>
          <Grid container>
            <Projects
              projects={data.projects}
              from={3}
              expanded={clsn !== ''}
              xs={6}
            />
          </Grid>
        </Card>
      </Page>
    </div>
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
  company?: string;
  position: string;
  start: string;
  end?: string;
  homepage?: string;
}
export const WorkHistoryEntry = (props: WorkHistoryEntry) => {
  const { company, position, start, end, homepage } = props;
  return (
    <ListItem>
      {!end && (
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
      )}
      <ListItemText
        primary={`${start} - ${end || ' now.'}`}
        secondary={
          <span>
            {position}
            {position && ' at '}
            {homepage && (
              <Link href={homepage ? homepage : undefined}>{company}</Link>
            )}
            {!homepage && <span>{company}</span>}
          </span>
        }
      />
    </ListItem>
  );
};
export default App;

export const Skills = ({ skills, tag }: { skills: Skill[]; tag: string }) => {
  const { t } = useTranslation();
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
                secondary={`${skill.experience || age(skill.start)} ${t(
                  'years'
                )}`}
              ></ListItemText>
            </ListItemButton>
          );
        })}
    </List>
  );
};

export const Stack = ({ skills }: { skills: Skill[] }) => {
  return (
    <Box sx={{ m: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {skills
        .sort((a, b) => (b.experience || 0) - (a.experience || 0))
        .filter((skill) => skill.stack)
        .map((skill) => {
          return (
            <Tooltip title={durStr(skill.experience || age(skill.start))}>
              <Chip
                label={skill.name}
                color={(skill.experience || 0) >= 7 ? 'primary' : 'secondary'}
              />
            </Tooltip>
          );
        })}
    </Box>
  );
};

const chunks = (arr: string[], n: number) => {
  return arr.reduce((acc: string[][], item: string, i: number) => {
    acc[i % n] = [...(acc[i % n] || []), item];
    return acc;
  }, [] as string[][]);
};
export const SkillCards = ({ skills }: { skills: Skill[] }) => {
  const allTags = skills.reduce(
    (acc, skill) => [...acc, ...skill.tags],
    [] as string[]
  );
  const tags = [
    ...new Set(allTags.filter((skill) => !['framework'].includes(skill))),
  ];

  const chunked = chunks(tags, 2);
  return (
    <Grid item container xs={12} spacing={1}>
      {chunked.map((chunk: string[]) => {
        return (
          <Grid
            item
            container
            xs={12}
            md={6}
            spacing={1}
            alignContent={'start'}
          >
            {chunk.map((tag: string) => {
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

export const Projects = ({
  projects,
  from,
  to,
  expanded,
  xs = 12,
}: {
  projects: Project[];
  from?: number;
  to?: number;
  expanded?: boolean;
  xs?: number;
}) => {
  const [toggled, setToggled] = useState(false);
  const { t } = useTranslation();
  return (
    <Grid container spacing={1}>
      {projects.slice(from || 0, to).map((project) => {
        const desc = t(project.description || '');
        return (
          <Grid item xs={xs} sx={{ mt: project.mt }}>
            <Card
              square
              sx={{
                border: expanded ? '1px solid black' : 'unset',
                m: expanded ? '-1px' : 0,
                zIndex: 2,
              }}
            >
              <CardHeader
                title={project.name}
                subheader={durStr(
                  project.duration || duration(project.start, project.end)
                )}
              />
              <Box sx={{ m: 1, gap: 0.5, display: 'flex', flexWrap: 'wrap' }}>
                {project.stack.map((tech: string) => {
                  return <Chip label={tech} size="small" />;
                })}
              </Box>

              {project.href && (
                <ListItem dense>
                  <ListItemText
                    primary={<Link href={project.href}>{project.href}</Link>}
                    secondary={'Website'}
                  />
                </ListItem>
              )}
              {project.repo && (
                <ListItem dense>
                  <ListItemText
                    primary={<Link href={project.repo}>{project.repo}</Link>}
                    secondary={'Repo'}
                  />
                </ListItem>
              )}
              {desc && desc?.length <= 50 && <CardContent>{desc}</CardContent>}
              {desc && desc?.length > 50 && (
                <Accordion expanded={expanded || toggled}>
                  <AccordionSummary onClick={() => setToggled(!toggled)}>
                    {desc?.slice(0, 50)}...
                  </AccordionSummary>
                  <AccordionDetails>
                    <Markdown>{'...' + desc?.slice(50)}</Markdown>
                  </AccordionDetails>
                </Accordion>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
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
