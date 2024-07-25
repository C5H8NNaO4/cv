import './App.css';
import './lib/i18n';
import {
  Box,
  Card,
  CardHeader,
  Grid,
  useMediaQuery,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import data from './data';
import { useTranslation } from 'react-i18next';
import { Templates } from './lib/templates';
import { TEMPLATE } from './const';

function App() {
  const printing = useMediaQuery('print');
  const Layout = Templates[TEMPLATE].Layout;

  return (
    <div id="root">
      <Layout />
      {/* <Box sx={{ mt: !printing ? '100vh' : 0 }} />
      <Page>
        <AchievementsCard />
      </Page> */}
    </div>
  );
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
}
export const EducationEntry = (props: EducationEntry) => {
  const { school, degree, start, end } = props;
  const { t } = useTranslation();
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${degree} ${t('at the')} ${school}`}
      />
    </ListItem>
  );
};

export const SocialCard = () => {
  return (
    <Card>
      <CardHeader title="Social"></CardHeader>
      <Grid container>
        {data.social.map((social) => {
          return (
            <Grid item xs={12} md={12}>
              <ListItem dense>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  {social.Icon && <social.Icon />}
                </ListItemIcon>
                <ListItemText
                  primary={<Link href={social.url}>{social.url}</Link>}
                  secondary={
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <b>{social.title}</b>
                      {social.secondary}
                    </Box>
                  }
                ></ListItemText>
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};
export default App;
