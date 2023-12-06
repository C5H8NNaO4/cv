import {
  useMediaQuery,
  Avatar,
  Card,
  CardHeader,
  CircularProgress,
  List,
  ListItemButton,
  ListItemIcon,
  Link,
  ListItemText,
} from '@mui/material';
import { capitalCase } from 'change-case';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export const LanguagesCard = () => {
  const { t } = useTranslation();
  const printing = useMediaQuery('print');
  return (
    <Card square>
      <CardHeader title={capitalCase(t('Spoken Languages'))} sx={{ pb: 0 }} />
      <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <ListItemButton
          dense
          selected={i18n.language === 'de'}
          sx={{ flexShrink: 1, width: '50%' }}
          onClick={() => {
            i18n.changeLanguage('de');
            window.history.replaceState({}, '', '/de');
          }}
        >
          <ListItemIcon>
            <Avatar sx={{ mr: '-40px' }}>G</Avatar>
            <CircularProgress
              value={100}
              variant="determinate"
            ></CircularProgress>
          </ListItemIcon>
          <ListItemText
            primary={
              printing && i18n.language !== 'de' ? (
                <Link href={`https://justmycv.com/de.pdf`}>{t('German')}</Link>
              ) : (
                t('German')
              )
            }
            secondary="Native"
          />
        </ListItemButton>
        <ListItemButton
          dense
          selected={i18n.language === 'en'}
          sx={{ flexShrink: 1, width: '50%' }}
          onClick={() => {
            i18n.changeLanguage('en');
            window.history.replaceState({}, '', '/en');
          }}
        >
          <ListItemIcon>
            <Avatar sx={{ mr: '-40px' }}>E</Avatar>
            <CircularProgress value={80} variant="determinate" />
          </ListItemIcon>
          <ListItemText
            primary={
              printing && i18n.language !== 'en' ? (
                <Link href={`https://justmycv.com/en.pdf`}>{t('English')}</Link>
              ) : (
                t('English')
              )
            }
            secondary="C1"
          />
        </ListItemButton>
        <ListItemButton
          dense
          selected={i18n.language === 'es'}
          sx={{ flexShrink: 1, width: '50%' }}
          onClick={() => {
            i18n.changeLanguage('es');
            window.history.replaceState({}, '', '/es');
          }}
        >
          <ListItemIcon>
            <Avatar sx={{ mr: '-40px' }}>S</Avatar>

            <CircularProgress value={50} variant="determinate" />
          </ListItemIcon>
          <ListItemText
            primary={
              printing && i18n.language !== 'es' ? (
                <Link href={`https://justmycv.com/es.pdf`}>{t('Spanish')}</Link>
              ) : (
                t('Spanish')
              )
            }
            secondary="B1"
          />
        </ListItemButton>
      </List>
    </Card>
  );
};
