import './App.css';
import './lib/i18n';
import i18n from 'i18next';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  useMediaQuery,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Page } from './components/Page';
import { ExpectedBenefitsCard } from './components/ExpectedBenefitsCard';
import data from './data';
import { ContactCard } from './components/ContactCard';
import { LegendCard } from './components/LegendCard';
import { EducationCard } from './components/EducationCard';
import { WorkExperienceCard } from './components/WorkExperienceCard';
import { MarketingCard } from './components/MarketingCard';
import { StackCard } from './components/StackCard';
import { BioCardContent, BioCardHeader } from './components/IntroCard';
import { SkillSection } from './components/SkillSection';
import { Portfolio } from './components/Portfolio';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './components/Projects';
import { differenceInBusinessDays, format } from 'date-fns';

import Markdown from './components/Markdown';
import { StackOverflowIcon } from './lib/icons';
import {
  Contact,
  EducationSummary,
  Footer,
  Introduction,
  Name,
  SkillsSummary,
  WorkSummary,
} from './components/templates/harvard/harvard';
import { locales } from './lib/format';
import { LanguagesCard } from './components/LanguagesCard';

function App() {
  const { t } = useTranslation();
  const printing = useMediaQuery('print');
  return (
    <div id="root">
      <Page sx={{ w: '100%' }}>
        <Box>
          <Name />
          <hr />
          <Contact />
          <Introduction />
          <EducationSummary />
          <WorkSummary slice={[0, -4]} title="(1-3)" />
          <SkillsSummary />
        </Box>
        <Box sx={{ flexGrow: 1, height: 'calc(100% - 64px)' }} />
        <Footer />
      </Page>
      <Page>
        <WorkSummary slice={[-4]} title="(4-7)" />
        <Box sx={{ flexGrow: 1, height: 'calc(100% - 64px)' }} />

        <Footer />
      </Page>
      <Box sx={{ mt: !printing ? '100vh' : 0 }} />
      <Page>
        <Grid container spacing={2}>
          <Grid
            item
            container
            xs={printing ? 8 : 12}
            md={8}
            spacing={1}
            sx={{ gap: '2px' }}
          >
            <Grid item xs={12} sx={{ height: 'min-content' }}>
              <BioCardHeader />
              <BioCardContent />
            </Grid>
          </Grid>
          <Grid
            item
            xs={printing ? 4 : 12}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* <EducationCard /> */}
            <WorkExperienceCard slice={[0, -2]} />
          </Grid>
        </Grid>
      </Page>
      <Page>
        <Grid container spacing={2}>
          <Grid item xs={12} spacing={1} container>
            <Grid item xs={6}>
              <StackCard />
            </Grid>
            <Grid item xs={6}>
              <LanguagesCard />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <MarketingCard />
          </Grid>
          <Grid item xs={12} md={6} container spacing={1}>
            <Grid item xs={6} md={12}>
              <ExpectedBenefitsCard
                salary={data.salary}
                benefits={data.benefits}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <ContactCard exporting={printing} />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <LegendCard />
          </Grid>
        </Grid>
      </Page>
      <Page>
        <Grid item xs={printing ? 8 : 12} md={12}>
          <SkillSection />
        </Grid>
      </Page>
      <Page>
        <Grid container spacing={1}>
          <Portfolio
            from={0}
            to={2}
            expanded={printing}
            xs={printing ? 12 : 6}
            md={6}
          />
        </Grid>
      </Page>
      <Page>
        <Grid container spacing={1}>
          <Portfolio
            from={2}
            to={4}
            expanded={printing}
            xs={printing ? 12 : 6}
            md={6}
          />
        </Grid>
      </Page>
      <Page>
        <Grid container spacing={1}>
          <Portfolio
            from={4}
            to={5}
            expanded={printing}
            xs={printing ? 12 : 6}
            md={6}
          />
        </Grid>
      </Page>
      <Page last>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Achievements"></CardHeader>
              <CardContent>{t('descriptions.learnings')}</CardContent>
              {data.learnings
                .sort((a, b) =>
                  differenceInBusinessDays(new Date(b.date), new Date(a.date))
                )
                .map((learning) => {
                  return (
                    <ListItem>
                      {learning.favorite && (
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          <MilitaryTechIcon sx={{ fill: 'gold' }} />
                        </ListItemIcon>
                      )}
                      {learning.skill && (
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          <PsychologyIcon />
                        </ListItemIcon>
                      )}
                      {learning.idea && (
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          <LightbulbIcon sx={{ fill: 'gold' }} />
                        </ListItemIcon>
                      )}
                      {learning.trophy && (
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          <EmojiEventsIcon sx={{ fill: 'gold' }} />
                        </ListItemIcon>
                      )}
                      {learning.so && (
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                          <StackOverflowIcon />
                        </ListItemIcon>
                      )}
                      <ListItemText
                        primary={`${format(
                          new Date(learning.date),
                          'MMM yyyy',
                          {
                            locale: locales[i18n.language],
                          }
                        )}: ${learning.title}`}
                        secondary={
                          <Markdown>{t(learning.description)}</Markdown>
                        }
                      ></ListItemText>
                    </ListItem>
                  );
                })}
            </Card>
          </Grid>
        </Grid>
      </Page>
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
