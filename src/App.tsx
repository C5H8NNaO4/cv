import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useState } from 'react';
import './App.css';
import { usePDF } from 'react-to-pdf';
import './lib/i18n';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RoomIcon from '@mui/icons-material/Room';
import Markdown from './components/Markdown/Markdown';
import {
  IconButton,
  Grid,
  Card,
  Link,
  CardHeader,
  Typography,
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
import {
  age,
  durStr,
  duration,
  experience,
  map,
  projectExperience,
  recentSkill,
  skill,
} from './lib/util';
import {
  BIRTHDAY,
  CV_START,
  REACT_START,
  RUST_START,
  TRAINING_START,
} from './const';
import { Project, Skill } from './types';
import { Page } from './components/Page';
import { format, getYear } from 'date-fns';
import { Chart } from './components/Chart';
import clsx from 'clsx';

const projects = [
  {
    name: 'Maxon Online Presence',
    description: 'description.maxon',
    href: 'https://preview.maxongroup.com/de-de',
    duration: 1.5,
    stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'GraphQL'],
  },
  {
    name: 'React Server',
    description: 'description.react-server',
    href: 'https://state-less.cloud',
    repo: 'https://github.com/state-less/clean-starter',
    duration: 1,
    stack: ['TypeScript', 'Node.js', 'React', 'GraphQL'],
  },
  {
    name: 'Lists App',
    description: 'description.lists',
    href: 'https://lists.state-less.cloud',
    repo: 'https://github.com/C5H8NNaO4/lists-app-backend',
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
    href: `https://justmycv.com/`,
    duration: age(CV_START),
    stack: ['TypeScript', 'React', 'MUI'],
  },
];
const data = {
  skills: [
    { name: 'TypeScript', experience: 7, stack: true, tags: ['language'] },
    { name: 'JavaScript', start: TRAINING_START, tags: ['language'] },
    { name: 'LotusScript', experience: 6, tags: ['language'] },
    { name: 'Rust', start: RUST_START, tags: ['language'] },
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
    { name: 'Your needed skill', experience: 0, tags: ['Grow together'] },
  ],
  projects,
  workHistory: [
    {
      company: 'Bechtle',
      homepage: 'https://www.bechtle.com',
      location: 'Germany - Freiburg',
      position: 'FIAE',
      start: '2012-05-01',
      end: '2015-03-01',
      stack: ['JavaScript', 'Java', 'LotusScript', 'Lotus Notes', 'Domino'],
    },
    {
      company: 'Bechtle',
      homepage: 'https://www.bechtle.com',
      location: 'Germany - Freiburg',
      position: 'Junior Software Engineer',
      start: '2015-03-01',
      end: '2016-03-01',
      stack: ['LotusScript', 'Lotus Notes', 'Domino', 'Basic'],
    },
    {
      position: 'Living abroad in Chile',
      company: 'Arboleda Emaluisa',
      location: 'Chile, Temuco',
      homepage: 'https://www.facebook.com/arboledaemaluisa/',
      start: '2016-05-01',
      end: '2017-04-15',
      stack: ['JavaScript', 'TypeScript', 'React', 'MUI'],
      disabled: true,
    },
    {
      company: 'Bechtle',
      location: 'Germany - Freiburg',
      homepage: 'https://www.bechtle.com',
      position: 'Junior Software Engineer',
      start: '2018-05-01',
      end: '2019-05-01',
      stack: ['C#', 'Perl'],
    },
    {
      company: 'Spoo',
      position: 'Software Engineer',
      location: 'Germany - Denzlingen',
      homepage: 'https://www.spoo-group.com',
      start: '2020-01-01',
      end: '2021-12-01',
      stack: ['PSQL', 'JavaScript', 'Vue', 'Kafka', 'Docker', 'Kubernetes'],
    },
    {
      company: 'Cosuno',
      location: 'Portugal - Braga',
      position: 'Senior Frontend Developer',
      homepage: 'https://www.cosuno.com',
      start: '2022-02-01',
      end: '2022-07-01',
      stack: ['TypeScript', 'GraphQL', 'React'],
    },
    {
      position: 'Senior IT Developer',
      company: 'Digitas Pixelpark',
      location: 'Germany - Freiburg',
      start: '2022-09-01',
      homepage: 'https://www.digitaspixelpark.com/',
      stack: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'JavaScript'],
    },
  ],
};

const exp = data.skills.reduce(
  (acc: Record<string, number>, cur: Skill): Record<string, number> => {
    acc[cur.name.replace(/\./g, '-')] =
      cur.experience || Math.round(age(cur.start)) || 0;
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
          <Grid item container xs={12} md={8} spacing={1} sx={{ gap: '2px' }}>
            <Grid item xs={12} sx={{ height: 'min-content' }}>
              <Card square sx={{ width: '100%', display: 'flex' }}>
                <CardHeader
                  sx={{ mx: 'auto' }}
                  avatar={
                    <Avatar
                      imgProps={{
                        width: '40px',
                        height: '40px',
                        sx: { objectFit: 'cover' },
                      }}
                      src="/pp.jpg"
                    />
                  }
                  title="Moritz Roessler"
                  subheader="Senior Fullstack Developer"
                />
                <CardHeader
                  action={
                    !exporting && (
                      <>
                        <IconButton
                          color="primary"
                          sx={{
                            ml: 'auto',
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
                        <IconButton
                          sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                          <Link href={`${i18n.language}.pdf`} download>
                            <DownloadIcon></DownloadIcon>
                          </Link>
                        </IconButton>
                      </>
                    )
                  }
                ></CardHeader>
              </Card>
              <Card square>
                <CardContent>
                  <Description />
                </CardContent>
              </Card>
            </Grid>
            <Grid item sx={{ mx: 'auto', my: 'auto' }}>
              <Card square>
                <Tooltip title={t("This is what I'm looking to work with")}>
                  <CardHeader title="Stack"></CardHeader>
                </Tooltip>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Stack skills={data.skills} />
                </Box>
              </Card>
            </Grid>
            <Grid item sx={{ mt: 'auto', alignSelf: 'flex-end' }} xs={12}>
              <Card square sx={{ h: '100%' }}>
                <CardHeader
                  title={t('description.marketing')}
                  subheader={t('sub.marketing')}
                />
                <Chart />
              </Card>
            </Grid>
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
                  {data.workHistory.map((entry) => {
                    return <WorkHistoryEntry {...entry} />;
                  })}
                  <WorkHistoryEntry
                    company={t('your company')}
                    position="Senior Fullstack Developer"
                    location="Europe (probably Germany)"
                    start={getYear(new Date()) + 2 + ''}
                    end="?"
                  />
                </List>
              </Box>
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
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Card square>
              <Grid
                container
                sx={{ m: 2, display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Grid
                  item
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <StarIcon sx={{ fill: 'gold' }} />=
                  <Typography variant="h6">{t('Recent experience')}</Typography>
                </Grid>
                <Grid
                  item
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Chip
                    size="small"
                    sx={{
                      backgroundColor: 'primary.light',
                    }}
                  />
                  =<Typography variant="h6">{t('Part of my stack')}</Typography>
                </Grid>
                <Grid
                  item
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Chip
                    size="small"
                    sx={{
                      borderColor: 'gold',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                    }}
                  />
                  =<Typography variant="h6">{durStr(7, true)}</Typography>
                </Grid>
                <Grid sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Chip
                    size="small"
                    sx={{
                      borderColor: 'success.main',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                    }}
                  />
                  =<Typography variant="h6">{durStr(5, true)}</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card square sx={{ height: '100%' }}>
              <CardHeader title={t('Expected Benefits')} />
              <List sx={{ w: '50%' }}>
                <ListItem dense>
                  <ListItemIcon>
                    <EuroSymbolIcon />
                  </ListItemIcon>
                  <ListItemText primary="100k €" secondary="Salary" />
                </ListItem>
                <ListItem dense>
                  <ListItemIcon>
                    <HomeWorkIcon />
                  </ListItemIcon>
                  <ListItemText primary="100% Remote" secondary="Homeoffice" />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} sx={{ h: '100%' }}>
            <Card
              square
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardHeader title={t('Contact')} />
              <Box sx={{ display: 'flex' }}>
                {exporting && (
                  <List sx={{ w: '50%' }}>
                    <ListItem dense>
                      <ListItemText
                        primary="+4917620350106"
                        secondary="Phone"
                      />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText
                        primary="moritz.roessler@gmail.com"
                        secondary="E-Mail"
                      />
                    </ListItem>
                  </List>
                )}
              </Box>
              {!exporting && (
                <CardActionArea sx={{ mt: 'auto' }}>
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
                          {t('eMail')}
                        </Link>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Book a Meeting" placement="bottom">
                      <Button size="small" color="primary">
                        <Link href="https://calendly.com/moritz-roessler/30min">
                          {t('Calendly')}
                        </Link>
                      </Button>
                    </Tooltip>
                  </CardActions>
                </CardActionArea>
              )}
            </Card>
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card square sx={{ height: '100%' }}>
              <CardHeader title="Skills" />
              <Grid
                container
                spacing={1}
                sx={{ height: 'calc(100% - 54px)' }}
                justifyContent={'space-between'}
              >
                <Grid item container>
                  <SkillCards skills={data.skills} />
                </Grid>
                <Grid item xs={12} sx={{ mt: 'auto', height: 'min-content' }}>
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
          <Grid item container xs={12} md={4}>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={t('Portfolio', { from: 1, to: 3 })}
                ></CardHeader>
              </Card>
            </Grid>
            <Grid item sx={{ mt: 'auto' }}>
              <Card>
                <Projects
                  projects={data.projects}
                  from={0}
                  to={3}
                  expanded={clsn !== ''}
                  md={12}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting} last>
        <Portfolio from={3} expanded={clsn !== ''} />
      </Page>
    </div>
  );
}

export const Portfolio = ({
  from,
  to,
  expanded,
}: {
  from: number;
  to: number;
  expanded: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card sx={{ pb: 2 }}>
          <CardHeader
            title={t('Portfolio', { from: from + 1, to: to + 1 })}
          ></CardHeader>
        </Card>
      </Grid>
      <Grid item container xs={12}>
        <Projects
          projectId="below"
          projects={data.projects}
          from={3}
          expanded={expanded}
          xs={12}
          md={6}
        />
      </Grid>
    </Grid>
  );
};
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
  location?: string;
  stack?: string[];
  disabled?: boolean;
}
export const WorkHistoryEntry = (props: WorkHistoryEntry) => {
  const { company, position, start, end, homepage, location, stack, disabled } =
    props;
  return (
    <ListItem disabled={disabled}>
      {!end && getYear(new Date(start)) < getYear(new Date()) && (
        <ListItemIcon>
          <StarIcon sx={{ fill: 'gold' }} />
        </ListItemIcon>
      )}
      <ListItemText
        primary={`${format(new Date(start), 'MMM yyyy')} - ${
          end === '?' ? end : end ? format(new Date(end), 'MMM yyyy') : ' now.'
        }`}
        secondary={
          <div>
            <span>
              {position}
              {company && ' at '}
              {homepage && (
                <Link href={homepage ? homepage : undefined}>{company}</Link>
              )}
              {!homepage && <span>{company}</span>}
            </span>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomIcon sx={{ height: '1rem', width: '1rem' }} />
              <Typography variant="caption">{location}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {stack?.map((label) => (
                <RecentSkill label={label} />
              ))}
            </Box>
          </div>
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
        .sort(
          (a, b) =>
            experience(skill(data.skills, b.name)) -
            experience(skill(data.skills, a.name))
        )
        .map((skill) => {
          return (
            <ListItemButton
              dense
              sx={{
                borderWidth: data.skills.find((s) => s.name === skill.name)
                  ?.stack
                  ? '0px 0px 0px 2px'
                  : '0px 0px 0px 2px',
                borderStyle: 'solid',
                borderColor: data.skills.find((s) => s.name === skill.name)
                  ?.stack
                  ? 'primary.light'
                  : 'white',
              }}
            >
              {recentSkill(data.workHistory, skill.name) && (
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                  }}
                >
                  <StarIcon sx={{ fill: 'gold' }} />
                </ListItemIcon>
              )}
              <ListItemText
                sx={{ my: 0 }}
                primary={t(skill.name)}
                secondary={durStr(skill.experience || age(skill.start))}
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
                sx={{
                  borderColor:
                    Math.ceil(skill.experience || 0) >= 7
                      ? 'gold'
                      : Math.ceil(skill.experience || 0) >= 5
                      ? 'success.main'
                      : undefined,
                  borderWidth:
                    Math.ceil(skill.experience || 0) < 5 ? '0px' : '2px',
                  borderStyle: 'solid',
                }}
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
  const { t } = useTranslation();
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
                    <CardHeader title={capitalCase(t(tag))} />
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
  projectId,
  from,
  to,
  expanded,
  xs = 12,
  md = 6,
}: {
  projects: Project[];
  projectId?: string;
  from?: number;
  to?: number;
  expanded?: boolean;
  xs?: number;
  md?: number;
}) => {
  const [toggled, setToggled] = useState('');
  const { t } = useTranslation();
  return (
    <Grid container columnSpacing={1}>
      {projects.slice(from || 0, to).map((project) => {
        const desc = t(project.description || '').split(' ');
        return (
          <Grid item xs={xs} md={md} sx={{ mt: project.mt }}>
            <Card
              square
              sx={{
                height: '100%',
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
                  return <RecentSkill label={tech} />;
                })}
              </Box>

              {project.href && (
                <ListItem dense>
                  <ListItemText
                    primary={
                      <Link href={t(project.href)}>{t(project.href)}</Link>
                    }
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
              {desc && desc?.length <= 10 && (
                <CardContent>{desc.join(' ')}</CardContent>
              )}
              {desc && desc?.length > 10 && (
                <Accordion
                  square
                  expanded={expanded || toggled === (projectId || project.name)}
                >
                  <AccordionSummary
                    onClick={() =>
                      setToggled(
                        toggled === (projectId || project.name)
                          ? ''
                          : projectId || project.name
                      )
                    }
                  >
                    {desc?.slice(0, 10).join(' ')}...
                  </AccordionSummary>
                  <AccordionDetails>
                    <Markdown>{'...' + desc?.slice(10).join(' ')}</Markdown>
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
        age: Math.floor(age(BIRTHDAY)),
        experience: exp,
        consts: map({ BIRTHDAY, TRAINING_START }, (date: string) =>
          durStr(age(date))
        ),
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

export const RecentSkill = ({ label }: { label: string }) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      title={clsx({
        [durStr(experience(skill(data.skills, label)) || 7, true) + '.']:
          experience(skill(data.skills, label)) >= 7,
        [durStr(5, true) + '.']:
          experience(skill(data.skills, label)) >= 5 &&
          experience(skill(data.skills, label)) < 7,
        [t('Recent experience')]: recentSkill(data.workHistory, label),
        [t('Part of my stack')]: data.skills.find((s) => s.name === label)
          ?.stack,
      })}
    >
      <Chip
        size="small"
        avatar={
          recentSkill(data.workHistory, label) ? (
            <Avatar sx={{ background: 'transparent' }}>
              <StarIcon
                sx={{
                  fill: 'gold',
                }}
              />
            </Avatar>
          ) : undefined
        }
        sx={{
          backgroundColor: data.skills.find((s) => s.name === label)?.stack
            ? 'primary.light'
            : undefined,
          borderColor:
            experience(skill(data.skills, label)) >= 7
              ? 'gold'
              : experience(skill(data.skills, label)) >= 5
              ? 'success.main'
              : undefined,
          borderWidth:
            experience(skill(data.skills, label)) >= 5 ? '2px' : '0px',
          borderStyle: 'solid',
        }}
        label={label}
      />
    </Tooltip>
  );
};
