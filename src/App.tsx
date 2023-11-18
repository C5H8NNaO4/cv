import { useState } from 'react';
import './App.css';
import { usePDF } from 'react-to-pdf';
import './lib/i18n';
import i18n from 'i18next';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
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
import { locales } from './components/WorkExperienceItem';

function App() {
  const { toPDF, targetRef } = usePDF({ filename: `CV - ${data.name}.pdf` });
  const [clsn, setClsn] = useState('');
  const exporting = clsn === 'exporting';
  const { t } = useTranslation();
  return (
    <div id="root" className={clsn} ref={targetRef}>
      <Page exporting={exporting}>
        <Grid container spacing={2}>
          <Grid item container xs={12} md={8} spacing={1} sx={{ gap: '2px' }}>
            <Grid item xs={12} sx={{ height: 'min-content' }}>
              <BioCardHeader
                toPDF={toPDF}
                exporting={exporting}
                setExporting={(exporting: boolean) => {
                  setClsn(exporting ? 'exporting' : '');
                }}
              />
              <BioCardContent />
            </Grid>
            <Grid item sx={{ mx: 'auto', my: 'auto' }}>
              <StackCard />
            </Grid>

            <Grid item sx={{ mt: 'auto', alignSelf: 'flex-end' }} xs={12}>
              <MarketingCard />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <EducationCard />
            <WorkExperienceCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpectedBenefitsCard
              salary={data.salary}
              benefits={data.benefits}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ h: '100%' }}>
            <ContactCard exporting={exporting} />
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <LegendCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <SkillSection />
          </Grid>
          <Grid item container xs={12} md={4} alignContent={'space-between'}>
            <Portfolio
              from={0}
              to={3}
              exporting={exporting}
              expanded={exporting}
            />
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting} last>
        <Portfolio
          from={3}
          to={5}
          expanded={clsn !== ''}
          md={6}
          hideHeaderOnMobile={!exporting}
        />
        <Grid container sx={{ mt: 2 }} spacing={1}>
          <Grid item xs={12} md={12}>
            <ProjectCard
              project={{
                name: 'Books',
                id: 'books',
                href: 'https://www.goodreads.com/review/list/158325463-moritz-roessler',
                description: t('descriptions.books'),
                stack: [],
              }}
              desc={t('descriptions.books').split(' ')}
              toggled={'Books'}
              setToggled={() => {}}
            />
          </Grid>
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
                      <ListItemText
                        primary={`${format(
                          new Date(learning.date),
                          'MMM yyyy',
                          {
                            locale: locales[i18n.language],
                          }
                        )}: ${learning.title}`}
                        secondary={t(learning.description)}
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

export default App;
