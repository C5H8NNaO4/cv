import data from '@/data';
import { age, durStr } from '@/lib/util';
import { Skill } from '@/types';
import { Box, Card, CardHeader, Chip, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Stack = ({ skills }: { skills: Skill[] }) => {
  return (
    <Box sx={{ m: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {skills
        .sort((a, b) => (b.experience || 0) - (a.experience || 0))
        .filter((skill) => skill.stack)
        .map((skill) => {
          return (
            <Tooltip
              key={'stack-chip-' + skill.name}
              title={durStr(skill.experience || age(skill.start))}
            >
              <Chip
                label={skill.name}
                sx={{
                  borderColor:
                    Math.ceil(skill.experience || 0) >= 10
                      ? 'gold'
                      : Math.ceil(skill.experience || 0) >= 5
                      ? 'success.main'
                      : undefined,
                  borderWidth:
                    Math.ceil(skill.experience || 0) < 5
                      ? '0px'
                      : '0px 0px 2px 0px',
                  borderStyle: 'solid',
                }}
              />
            </Tooltip>
          );
        })}
    </Box>
  );
};

export const StackCard = () => {
  const { t } = useTranslation();
  return (
    <Card square>
      <Tooltip title={t('Bonus points for AWS or PSQL')} placement="top">
        <span>
          <CardHeader
            title="Stack"
            subheader={t("This is what I'm looking to work with")}
          ></CardHeader>
        </span>
      </Tooltip>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack skills={data.skills} />
      </Box>
    </Card>
  );
};
