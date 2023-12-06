import data from '@/data';
import { Card, CardHeader, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Projects } from './Projects';

export const Portfolio = ({
  from,
  to,
  expanded,
  xs = 12,
  md = 12,
  noGrid = false,
}: {
  from: number;
  to: number;
  expanded: boolean;
  hideHeaderOnMobile?: boolean;
  xs?: number;
  md?: number;
  noGrid?: boolean;
}) => {
  const { t } = useTranslation();
  const headerCard = (
    <Card sx={{ flexShrink: 0 }}>
      <CardHeader
        title={t('Portfolio', {
          from: from + 1,
          to: to,
        })}
      ></CardHeader>
    </Card>
  );
  return (
    <>
      {!noGrid ? (
        <Grid item xs={12}>
          {headerCard}
        </Grid>
      ) : (
        headerCard
      )}
      {/* <Grid item container xs={12} justifyContent={'space-between'}> */}
      <Projects
        projectId={md === 6 ? 'portfolio-2' : undefined}
        projects={data.projects}
        from={from}
        to={to}
        expanded={expanded}
        xs={xs}
        md={md}
        noGrid={noGrid}
      />
      {/* </Grid> */}
    </>
  );
};
