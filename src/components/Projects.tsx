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
  ListItemText,
} from '@mui/material';
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
    <Grid container columnSpacing={1} rowSpacing={1}>
      {projects.slice(from || 0, to).map((project) => {
        const desc = t(project.description || '')
          .trim()
          .split(' ');

        return (
          <Grid key={project.name} item xs={xs} md={md} sx={{ mt: project.mt }}>
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
                  return <RecentSkill key={tech} label={tech} />;
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
