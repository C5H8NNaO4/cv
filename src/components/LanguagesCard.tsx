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
      <CardHeader
        title={capitalCase(t('spoken'))}
        subheader={capitalCase(t('languages'))}
      />
      <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <ListItemButton
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
              printing ? (
                <Link href={`https://justmycv.com/${i18n.language}.pdf`} />
              ) : (
                t('German')
              )
            }
            secondary="Native"
          />
        </ListItemButton>
        <ListItemButton
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
          <ListItemText primary={t('English')} secondary="C1" />
        </ListItemButton>
        <ListItemButton
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
          <ListItemText primary={t('Spanish')} secondary="B1" />
        </ListItemButton>
      </List>
    </Card>
  );
};
