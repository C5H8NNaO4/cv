import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { durStr, experience, recentSkill, skill } from '@/lib/util';
import data from '@/data';
import { Avatar, Chip, Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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
