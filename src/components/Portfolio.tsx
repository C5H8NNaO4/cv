import data from '@/data';
import { Card, CardHeader, Grid, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Projects } from './Projects';

export const Portfolio = ({
  from,
  to,
  expanded,
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
  const printing = useMediaQuery('print');

  return (
    <>
      {(from === 0 || printing) && (
        <Grid item xs={12} sx={{ height: 'min-content' }}>
          <Card sx={{ pb: 2 }}>
            <CardHeader
              title={t('Portfolio', {
                from: from + 1,
                to: printing ? to : data.projects.length,
              })}
            ></CardHeader>
          </Card>
        </Grid>
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
      />
      {/* </Grid> */}
    </>
  );
};
