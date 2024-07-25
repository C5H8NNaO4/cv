import data from '@/data';
import { Card, CardHeader, List } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { EducationEntry } from './EducationEntry';

export const EducationCard = () => {
  const { t } = useTranslation();
  return (
    <Card square>
      <CardHeader title={t('Education')} />
      <List>
        {data.education
          .sort((a, b) => {
            return a.start.localeCompare(b.start);
          })
          .map((entry) => {
            return <EducationEntry {...entry} />;
          })}
      </List>
    </Card>
  );
};
