import { ContactCard } from '@/components/ContactCard';
import { ExpectedBenefitsCard } from '@/components/ExpectedBenefitsCard';
import { BioCardContent, BioCardHeader } from '@/components/IntroCard';
import { LanguagesCard } from '@/components/LanguagesCard';
import { LegendCard } from '@/components/LegendCard';
import { MarketingCard } from '@/components/MarketingCard';
import { Page } from '@/components/Page';
import { Portfolio } from '@/components/Portfolio';
import { SkillSection } from '@/components/SkillSection';
import { StackCard } from '@/components/StackCard';
import { WorkExperienceCard } from '@/components/WorkExperienceCard';
import data from '@/data';
import {
  Grid,
  useMediaQuery,
  Card,
  CardHeader,
  CardContent,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { StackOverflowIcon } from '@/lib/icons';
import Markdown from '@/components/Markdown';
import { formatDate } from '@/lib/format';
import { differenceInBusinessDays } from 'date-fns';
import { useTranslation } from 'react-i18next';

export const Layout = () => {
  const printing = useMediaQuery('print');
  const { t } = useTranslation();
  return (
    <>
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
          <Grid item xs={12}></Grid>
          <AchievementsCard />
        </Grid>
      </Page>
    </>
  );
};

export const AchievementsCard = () => {
  const { t } = useTranslation();
  return (
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
                primary={`${formatDate(learning.date)}: ${learning.title}`}
                secondary={<Markdown>{t(learning.description)}</Markdown>}
              ></ListItemText>
            </ListItem>
          );
        })}
    </Card>
  );
};
