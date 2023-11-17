import { Card, Chip, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import StarIcon from '@mui/icons-material/Star';
import { durStr } from '@/lib/util';

export const LegendCard = () => {
  const { t } = useTranslation();
  return (
    <Card square>
      <Grid
        container
        sx={{ m: 2, display: 'flex', alignItems: 'center', gap: 2 }}
      >
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <StarIcon sx={{ fill: 'gold' }} />=
          <Typography variant="h6">{t('Recent experience')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              backgroundColor: 'primary.light',
            }}
          />
          =<Typography variant="h6">{t('Part of my stack')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              borderColor: 'gold',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          =<Typography variant="h6">{durStr(7, true)}</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              borderColor: 'success.main',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          =<Typography variant="h6">{durStr(5, true)}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
