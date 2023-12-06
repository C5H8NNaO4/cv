import { CALENDLY_LINK } from '@/const';
import data from '@/data';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  Link,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ContactCard = ({ exporting }: { exporting: boolean }) => {
  const { t } = useTranslation();
  return (
    <Card
      square
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardHeader title={t('Contact')} sx={{ pb: 0 }} />
      <List sx={{ w: '50%' }} disablePadding>
        <ListItem dense>
          <ListItemText primary={data.phone} secondary="Phone" />
        </ListItem>
        <ListItem dense>
          <ListItemText primary={data.email} secondary="E-Mail" />
        </ListItem>
      </List>
      {!exporting && (
        <CardActionArea sx={{ mt: 'auto' }}>
          <CardActions>
            <Tooltip title="+4917620350106" placement="bottom">
              <Button size="small" color="primary">
                <Link href={`tel://${data.phone}`}>{t('Call')}</Link>
              </Button>
            </Tooltip>
            <Tooltip title={data.email} placement="bottom">
              <Button size="small" color="primary">
                <Link href={`mailto://${data.email}`}>{t('eMail')}</Link>
              </Button>
            </Tooltip>
            {CALENDLY_LINK && (
              <Tooltip title="Book a Meeting" placement="bottom">
                <Button size="small" color="primary">
                  <Link href={CALENDLY_LINK}>{t('Calendly')}</Link>
                </Button>
              </Tooltip>
            )}
          </CardActions>
        </CardActionArea>
      )}
    </Card>
  );
};
