import data from '@/data';
import { Box, Card, CardHeader, List } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WorkExperienceItem } from './WorkExperienceItem';
import { getYear } from 'date-fns';

export const WorkExperienceCard = () => {
  const { t } = useTranslation();
  return (
    <Card square sx={{ mt: 'auto' }}>
      <CardHeader title={t('Work History')} />
      <Box>
        <List>
          {data.workHistory.map((entry) => {
            return (
              <WorkExperienceItem
                key={entry.start + '-' + entry.end}
                {...entry}
              />
            );
          })}
          <WorkExperienceItem
            company={t('your company')}
            position={
              data.position || data.workHistory.at(-1)?.position || 'Freelancer'
            }
            location="Europe (probably Germany)"
            start={getYear(new Date()) + 2 + ''}
            end="?"
          />
        </List>
      </Box>
    </Card>
  );
};
