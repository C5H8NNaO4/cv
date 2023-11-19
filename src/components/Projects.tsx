import { useState } from 'react';
import { durStr, duration } from '@/lib/util';
import { Project } from '@/types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown';
import { RecentSkill } from './RecentSkillChip';

export const Projects = ({
  projects,
  projectId,
  from,
  to,
  expanded,
  xs = 12,
  md = 6,
  noGrid,
}: {
  projects: Project[];
  projectId?: string;
  from?: number;
  to?: number;
  expanded?: boolean;
  xs?: number;
  md?: number;
  noGrid?: boolean;
}) => {
  const [toggled, setToggled] = useState('');
  const { t } = useTranslation();
  const printing = useMediaQuery('print');
  return (
    <>
      {projects.slice(from || 0, to).map((project, i, arr) => {
        const isLast = i === arr.length - 1 && arr.length % 2 === 1;
        const desc = t(project.description || '')
          .trim()
          .split(' ');
        const card = (
          <ProjectCard
            project={project}
            projectId={projectId}
            expanded={expanded}
            desc={desc}
            toggled={toggled}
            setToggled={setToggled}
          />
        );
        if (noGrid) return card;
        return (
          <Grid
            key={project.name}
            item
            xs={printing ? (isLast ? 12 : 6) : xs}
            md={isLast ? 12 : md}
            sx={{ flex: 1 }}
          >
            {card}
          </Grid>
        );
      })}
    </>
  );
};

export type ProjectCardProps = {
  expanded?: boolean;
  project: Project;
  desc: string[];
  toggled: string;
  projectId?: string;
  setToggled: (id: string) => void;
};
export const ProjectCard = ({
  expanded,
  project,
  desc,
  toggled,
  setToggled,
  projectId,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  const projectDuration =
    project.duration || duration(project.start, project.end);
  return (
    <Card
      square
      sx={{
        height: '100%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
      }}
    >
      <CardHeader
        title={project.name}
        subheader={projectDuration ? durStr(projectDuration) : undefined}
      />
      <Box sx={{ m: 1, gap: 0.5, display: 'flex', flexWrap: 'wrap' }}>
        {project.stack.map((tech: string) => {
          return <RecentSkill key={tech} label={tech} />;
        })}
      </Box>
      {project.company && (
        <ListItem dense>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              project.homepage && (
                <Link href={t(project.homepage)}>{t(project.company)}</Link>
              )
            }
            secondary={t('Company')}
          />
        </ListItem>
      )}
      {project.href && (
        <ListItem dense>
          <ListItemText
            primary={<Link href={t(project.href)}>{t(project.href)}</Link>}
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
      <Box sx={{ flex: 1 }}></Box>
      {desc && desc?.length > 10 && (
        <Accordion
          square
          expanded={expanded || toggled === (projectId || project.name)}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <AccordionSummary
            sx={{ mt: 'auto' }}
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
  );
};
