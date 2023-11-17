import { useState } from 'react';
import './App.css';
import { usePDF } from 'react-to-pdf';
import './lib/i18n';

import { Grid, Card, ListItem, ListItemText } from '@mui/material';
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
import { Projects } from './components/Projects';

function App() {
  const { toPDF, targetRef } = usePDF({ filename: `CV - ${data.name}.pdf` });
  const [clsn, setClsn] = useState('');
  const exporting = clsn === 'exporting';

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
          <Grid item xs={12} md={4}>
            <EducationCard />
            <WorkExperienceCard />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <LegendCard />
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
          <Grid item xs={12} md={8}>
            <SkillSection />
          </Grid>
          <Grid item container xs={12} md={4}>
            <Grid item xs={12}>
              <Portfolio from={0} to={3} expanded={exporting} />
            </Grid>
          </Grid>
        </Grid>
      </Page>
      <Page exporting={exporting} last>
        <Portfolio
          from={3}
          to={4}
          expanded={clsn !== ''}
          hideHeaderOnMobile={!exporting}
        />
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
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${degree} at ${school}`}
      />
    </ListItem>
  );
};

export default App;
