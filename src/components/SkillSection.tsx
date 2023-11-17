import {
  Card,
  CardHeader,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { LanguagesCard } from './LanguagesCard';
import data from '@/data';
import { useTranslation } from 'react-i18next';
import { age, durStr, experience, recentSkill, skill } from '@/lib/util';
import { Skill } from '@/types';
import StarIcon from '@mui/icons-material/Star';
import { capitalCase } from 'change-case';

export const Skills = ({ skills, tag }: { skills: Skill[]; tag: string }) => {
  const { t } = useTranslation();
  return (
    <Grid container>
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
            <Grid item xs={12} md={6}>
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
            </Grid>
          );
        })}
    </Grid>
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
            key={chunk.join('-')}
            item
            container
            xs={12}
            md={6}
            spacing={1}
            alignContent={'start'}
          >
            {chunk.map((tag: string) => {
              return (
                <Grid key={tag} item xs={12}>
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
export const SkillSection = () => {
  return (
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
          <LanguagesCard />
        </Grid>
      </Grid>
    </Card>
  );
};
