import { Card, CardHeader } from '@mui/material';
import { Chart } from './Chart';
import { useTranslation } from 'react-i18next';

export const MarketingCard = () => {
  const { t } = useTranslation();
  return (
    <Card square sx={{ h: '100%' }}>
      <CardHeader
        title={t('descriptions.marketing')}
        subheader={t('sub.marketing')}
      />
      <Chart />
    </Card>
  );
};
