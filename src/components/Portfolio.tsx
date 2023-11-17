import data from '@/data';
import { Card, CardHeader, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Projects } from './Projects';

export const Portfolio = ({
  from,
  to,
  expanded,
  hideHeaderOnMobile,
  xs = 12,
  md = 12,
}: {
  from: number;
  to: number;
  expanded: boolean;
  hideHeaderOnMobile?: boolean;
  xs?: number;
  md?: number;
}) => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={1}
      sx={{ height: 'calc(100% + 8px)' }}
      justifyContent={'space-between'}
    >
      {!hideHeaderOnMobile && (
        <Grid item xs={12}>
          <Card sx={{ pb: 2 }}>
            <CardHeader
              title={t('Portfolio', { from: from + 1, to: to + 1 })}
            ></CardHeader>
          </Card>
        </Grid>
      )}
      <Grid item container xs={12} sx={{ mt: 'auto' }}>
        <Projects
          projectId="below"
          projects={data.projects}
          from={from}
          to={to}
          expanded={expanded}
          xs={xs}
          md={md}
        />
      </Grid>
    </Grid>
  );
};
