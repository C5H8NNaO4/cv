import { Card, Chip, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import SurfingIcon from '@mui/icons-material/Surfing';
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
          <StarIcon />=
          <Typography variant="h6">{t('Recent experience')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <WorkIcon />=
          <Typography variant="h6">{t('Professional experience')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SurfingIcon />=
          <Typography variant="h6">{t('Hobby experience')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              padding: '1px',
              borderStyle: 'solid',
              borderWidth: '0px 0px 2px 0px',
              borderColor: 'primary.light',
            }}
          />
          =<Typography variant="h6">{t('Part of my stack')}</Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              borderColor: 'gold',
              backgroundColor: 'gold',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          =<Typography variant="h6">{durStr(10, true)}</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              borderColor: 'success.main',
              backgroundColor: 'success.main',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          =<Typography variant="h6">5+</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Chip
            size="small"
            sx={{
              borderColor: 'info.main',
              backgroundColor: 'info.main',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          =<Typography variant="h6">3+</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
