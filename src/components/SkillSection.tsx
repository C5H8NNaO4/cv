import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { LanguagesCard } from './LanguagesCard';
import data from '@/data';
import { useTranslation } from 'react-i18next';
import {
  age,
  durStr,
  experience,
  getExperienceColor,
  projectExperience,
  recentSkill,
  skill,
} from '@/lib/util';
import { Skill } from '@/types';
import StarIcon from '@mui/icons-material/Star';
import { capitalCase } from 'change-case';
import WorkIcon from '@mui/icons-material/Work';
import SurfingIcon from '@mui/icons-material/Surfing';
import { RecentSkill } from './RecentSkillChip';

export const Skills = ({ skills, tag }: { skills: Skill[]; tag: string }) => {
  const { t } = useTranslation();
  const filtered = skills.filter(({ tags, chip }) => {
    return tags.includes(tag) && !chip;
  });
  const printing = useMediaQuery('print');

  return (
    <Grid container>
      {filtered
        .sort(
          (a, b) =>
            experience(skill(data.skills, b.name)) -
            experience(skill(data.skills, a.name))
        )
        .map((skill) => {
          const skillExperience = skill.experience || age(skill.start);
          return (
            <Grid
              item
              xs={printing ? (filtered.length === 1 ? 12 : 6) : 12}
              md={filtered.length === 1 ? 12 : 6}
            >
              <ListItemButton
                key={skill.name}
                dense
                sx={{
                  borderWidth: data.skills.find((s) => s.name === skill.name)
                    ?.stack
                    ? '0px 0px 2px 0px'
                    : '0px 0px 2px 0px',
                  borderStyle: 'solid',
                  borderColor: data.skills.find((s) => s.name === skill.name)
                    ?.stack
                    ? 'warning.light'
                    : 'white',
                }}
              >
                {recentSkill(data.workHistory, skill.name) && (
                  <ListItemIcon
                    sx={{
                      minWidth: '40px',
                    }}
                  >
                    <StarIcon
                      sx={{
                        fill: (theme) => getExperienceColor(skill.name, theme),
                      }}
                    />
                  </ListItemIcon>
                )}
                {projectExperience(data.projects, skill.name, true) > 0 ||
                  (recentSkill(data.workHistory, skill.name, 20) &&
                    !recentSkill(data.workHistory, skill.name, 3) && (
                      <ListItemIcon
                        sx={{
                          minWidth: '40px',
                        }}
                      >
                        <WorkIcon
                          sx={{
                            fill: (theme) =>
                              getExperienceColor(skill.name, theme),
                          }}
                        />
                      </ListItemIcon>
                    ))}

                {!recentSkill(data.workHistory, skill.name, 20) && (
                  <ListItemIcon
                    sx={{
                      minWidth: '40px',
                    }}
                  >
                    <SurfingIcon
                      sx={{
                        fill: (theme) => getExperienceColor(skill.name, theme),
                      }}
                    />
                  </ListItemIcon>
                )}
                <ListItemText
                  sx={{ my: 0 }}
                  primary={t(skill.name)}
                  secondary={
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                      }}
                    >
                      {durStr(skillExperience)}
                    </Box>
                  }
                ></ListItemText>
              </ListItemButton>
            </Grid>
          );
        })}
    </Grid>
  );
};

export const Chips = ({ skills, tag }: { skills: Skill[]; tag: string }) => {
  const filtered = skills.filter(({ tags, chip }) => {
    return tags.includes(tag) && chip;
  });

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {filtered
        .sort(
          (a, b) =>
            experience(skill(data.skills, b.name)) -
            experience(skill(data.skills, a.name))
        )
        .map((skill) => {
          return (
            <Box>
              {recentSkill(data.workHistory, skill.name) ? (
                <RecentSkill label={skill.name} />
              ) : (
                <Chip
                  key={skill.name}
                  size="small"
                  label={skill.name}
                  sx={{
                    borderColor: (theme) =>
                      skill.stack
                        ? theme.palette.info.light
                        : getExperienceColor(skill.name, theme),
                    borderWidth: skill.stack
                      ? '0px 0px 2px 0px'
                      : getExperienceColor(skill.name)
                      ? '2px 2px 2px 2px'
                      : '0px',
                    borderStyle: 'solid',
                  }}
                ></Chip>
              )}
            </Box>
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
  const printing = useMediaQuery('print');

  return (
    <Grid item container xs={12} spacing={1}>
      {chunked.map((chunk: string[]) => {
        return (
          <Grid
            key={chunk.join('-')}
            item
            container
            xs={printing ? 6 : 12}
            md={6}
            spacing={1}
            alignContent={'stretch'}
            justifyContent={'space-between'}
          >
            {chunk.map((tag: string) => {
              return (
                <Grid key={tag} item xs={12}>
                  <Card square sx={{ height: '100%' }}>
                    <CardHeader title={capitalCase(t(tag))} />
                    <Skills skills={skills} tag={tag} />
                    <CardContent>
                      <Chips skills={skills} tag={tag} />
                    </CardContent>
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
export const SkillSection = () => {
  return (
    <Card square sx={{ height: '100%' }} className="alternate">
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
          <LanguagesCard />
        </Grid>
      </Grid>
    </Card>
  );
};
