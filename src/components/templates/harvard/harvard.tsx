import Markdown from '@/components/Markdown';
import { WorkExperienceItemProps } from '@/components/WorkExperienceItem';
import {
  INCLUDE_ADDRESS,
  INCLUDE_LOCATION,
  NAME,
  SURNAME,
  RELEVANT_SKILLS,
  NUM_PROJECTS,
} from '@/const';
import data, { experienceBySkill } from '@/data';
import { formatInterval, formatLink, formatPhoneNr } from '@/lib/format';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { capitalCase } from 'change-case';
import { experience, formatDuration } from '@/lib/util';
import { EducationEntryProps, Skill } from '@/types';
import { Page } from '@/components/Page';

export const Name = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {NAME} {SURNAME}
      </Typography>
    </Box>
  );
};

export const Contact = () => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingInlineStart: '0px',
        columnGap: '32px',
        justifyContent: 'center',
      }}
    >
      {[
        INCLUDE_ADDRESS && data.address,
        INCLUDE_LOCATION && `${data.city}, ${data.country}`,
        [data.email, 'mailto:' + data.email],
        [formatPhoneNr(data.phone), 'tel:' + data.phone],
      ]
        .filter(Boolean)
        .map((data, i) => {
          return (
            <li style={{ display: i === 0 ? 'block' : 'list-item' }}>
              {Array.isArray(data) ? (
                <Link
                  href={data[1]}
                  sx={{ textDecoration: 'none', color: 'black' }}
                >
                  {data[0]}
                </Link>
              ) : (
                <Typography>{Array.isArray(data) ? data[0] : data}</Typography>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export const Introduction = () => {
  const { t } = useTranslation();
  return (
    <Markdown>
      {t('descriptions.introduction', {
        experience: experienceBySkill,
      })}
    </Markdown>
  );
};
export const Footer = () => {
  return (
    <Box>
      <hr />
      <Typography sx={{ textAlign: 'center' }}>
        <Link
          href={`https://justmycv.com/${i18n.language}`}
        >{`justmycv.com/${i18n.language}`}</Link>
        <Link
          href={`https://justmycv.com/${i18n.language}.pdf`}
          sx={{ ml: 1 }}
        >{`.pdf`}</Link>
      </Typography>
    </Box>
  );
};

export const SkillsSummary = () => {
  const { t } = useTranslation();
  const printing = useMediaQuery('print');
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Skills')}
      </Typography>
      <SkillEntry
        title="Spoken Languages"
        skills={
          [
            {
              name: 'German (C2)',
              href: 'https://justmycv.com/de' + (printing ? '.pdf' : ''),
            },
            {
              name: 'English (C1)',
              href: 'https://justmycv.com/en' + (printing ? '.pdf' : ''),
            },
            {
              name: 'Spanish (B2)',
              href: 'https://justmycv.com/es' + (printing ? '.pdf' : ''),
            },
          ] as any
        }
      />
      <SkillEntry title="Programming Languages" tag={'language'} />
      <SkillEntry title="Frontend" tag={'frontend'} />
      <SkillEntry title="Backend" tag={'backend'} />
      <SkillEntry
        title="Frameworks"
        tag={'framework'}
        exclude={['frontend', 'backend']}
      />
    </>
  );
};

export const SkillEntry = ({
  tag,
  skills,
  title,
  exclude,
}: {
  tag?: string;
  skills?: Skill[];
  title?: string;
  exclude?: string[];
}) => {
  const { t } = useTranslation();
  const filtered =
    skills ||
    data.skills.filter(
      (skill) =>
        skill.tags.includes(tag || '') &&
        !skill.tags.some((tag) => exclude?.includes(tag))
    );

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start' }}>
        {(title || tag) && (
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {capitalCase(t(title || tag || ''))}:
          </Typography>
        )}
        &nbsp;
        {filtered
          .sort(
            (a, b) =>
              (RELEVANT_SKILLS.indexOf(b.name) -
                RELEVANT_SKILLS.indexOf(a.name)) *
              10 +
              (Number(b.stack || 0) - Number(a.stack || 0)) * 5 +
              (experience(b) - experience(a))
          )
          .map((skill, i, arr) => {
            return (
              <Box sx={{ display: 'flex' }}>
                <Tooltip
                  title={
                    experience(skill) ? formatDuration(experience(skill)) : ''
                  }
                >
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: skill.stack ? 'underline' : 'none' }}
                  >
                    <Link
                      href={skill.href}
                      sx={{ textDecoration: 'none', color: 'black' }}
                    >
                      {t(skill.name)}
                    </Link>
                    {i < arr.length - 1 ? ', ' : ''}
                  </Typography>
                </Tooltip>
                &nbsp;
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export const ProjectSummary = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Projects')}
      </Typography>
      <div>
        {data.projects
          .slice()
          .filter((project) => !project.company)
          .sort((a, b) => {
            return (b.sort || 0) - (a.sort || 0);
          })
          .slice(0, NUM_PROJECTS)
          .map((project) => {
            return <ProjectSummaryEntry {...project} />;
          })}
      </div>
    </>
  );
};
export type ProjectEntryProps = {
  stars?: number;
  sort?: number;
  repo?: string;
  name: string;
  description: string;
  duration?: number;
};

export const ProjectSummaryEntry = (props: ProjectEntryProps) => {
  const { t } = useTranslation();
  const { repo, stars, name, description, duration } = props;
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        {/* <Typography variant="body2">{location}</Typography> */}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Markdown style={{ maxWidth: '80%' }}>{t(description)}</Markdown>
        {duration && (
          <Typography variant="body2">{formatDuration(duration)}</Typography>
        )}
      </Box>
      {repo && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={repo} target="_blank" rel="noreferrer">
            {formatLink(repo)}
          </Link>
          {stars && (
            <Typography variant="body2">{stars + ' ' + t('Stars')}</Typography>
          )}
        </Box>
      )}
    </div>
  );
};
export const EducationSummary = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Education')}
      </Typography>
      <div>
        {data.education
          .sort((a, b) => {
            return b.start.localeCompare(a.start);
          })
          .map((entry) => {
            return <EducationSummaryEntry {...entry} />;
          })}
      </div>
    </>
  );
};

export const EducationSummaryEntry = (props: EducationEntryProps) => {
  const { t } = useTranslation();
  const { school, degree, location, end, start } = props;
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold' }}>
          {school}
        </Typography>
        <Typography variant="body2">{location}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">{t(degree)}</Typography>
        <Typography variant="body2">{formatInterval(start, end)}</Typography>
      </Box>
    </div>
  );
};

export const WorkSummary = ({
  slice,
  title,
}: {
  slice: number[];
  title: string;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Experience', {
          suffix: title,
        })}
      </Typography>
      <div>
        {data.workHistory
          .sort((a, b) => {
            return b.start.localeCompare(a.start);
          })
          .slice(...slice)
          .map((entry) => {
            return <WorkSummaryEntry {...entry} />;
          })}
      </div>
    </>
  );
};

export const WorkSummaryEntry = (props: WorkExperienceItemProps) => {
  const { location, end, start, company, position, id } = props;
  const { t } = useTranslation();
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="overline" sx={{ fontWeight: 'bold' }}>
          {company}
        </Typography>
        <Typography variant="body2">{location}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">{position}</Typography>
        <Typography variant="body2">{formatInterval(start, end)}</Typography>
      </Box>
      <Markdown style={{ maxWidth: '80%' }}>
        {t(`descriptions.${id}.experience`)}
      </Markdown>
    </div>
  );
};

export const Layout = () => {
  return (
    <>
      <Page sx={{ w: '100%' }}>
        <Box>
          <Name />
          <hr />
          <Contact />
          <Introduction />
          <WorkSummary slice={[0, -4]} title="(1-3)" />
          <SkillsSummary />
        </Box>
        <Box sx={{ flexGrow: 1, height: 'calc(100% - 64px)' }} />
        <Footer />
      </Page>
      <Page>
        <WorkSummary slice={[-4]} title="(4-7)" />
        <EducationSummary />
        <Box sx={{ flexGrow: 1, height: 'calc(100% - 64px)' }} />
        {/* <Footer /> */}
      </Page>
      <Page>
        <ProjectSummary />
        <Box sx={{ flexGrow: 1, height: 'calc(100% - 64px)' }} />
        {/* <Footer /> */}
      </Page>
    </>
  );
};
