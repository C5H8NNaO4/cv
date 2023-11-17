import { EducationEntry } from '@/App';
import { Card, CardHeader, List } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const EducationCard = () => {
  const { t } = useTranslation();
  return (
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
  );
};
