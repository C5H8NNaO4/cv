import { EducationEntry } from '@/App';
import Markdown from '@/components/Markdown';
import { WorkExperienceItemProps } from '@/components/WorkExperienceItem';
import { NAME, SURNAME } from '@/const';
import data from '@/data';
import { formatDuration, formatPhoneNr } from '@/lib/format';
import { Typography, Box, Link, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { capitalCase } from 'change-case';
import { experience } from '@/lib/util';
import { Skill } from '@/types';

export const Name = () => {
  return (
    <Box>
      <Typography sx={{ textAlign: 'center' }}>
        {NAME} {SURNAME}
      </Typography>
    </Box>
  );
};

export const Contact = () => {
  const printing = useMediaQuery('print');

  return (
    <ul
      style={{
        display: 'flex',
        paddingInlineStart: '0px',
        gap: '32px',
        justifyContent: 'center',
      }}
    >
      {[
        data.address,
        `${data.city}, ${data.country}`,
        [data.email, 'mailto:' + data.email],
        [formatPhoneNr(data.phone), 'tel:' + data.phone],
      ].map((data, i) => {
        return (
          <li style={{ display: i === 0 ? 'block' : 'list-item' }}>
            {Array.isArray(data) && !printing ? (
              <Link href={data[1]}>{data[0]}</Link>
            ) : (
              <Typography>{Array.isArray(data) ? data[0] : data}</Typography>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export const Footer = () => {
  return (
    <>
      <Typography sx={{ textAlign: 'center' }}>
        © {new Date().getFullYear()}, {data.name}
      </Typography>
      <hr />
      <Typography sx={{ textAlign: 'center' }}>
        <Link
          href={`https://justmycv.com/${i18n.language}`}
        >{`https://justmycv.com/${i18n.language}`}</Link>
      </Typography>
    </>
  );
};

export const SkillsSummary = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Skills')}
      </Typography>
      <SkillEntry
        title="Spoken Languages"
        skills={[
          { name: 'German (C2)' },
          { name: 'English (C1)' },
          { name: 'Spanish (B2)' },
        ]}
      />
      <SkillEntry title="Programming Languages" tag={'language'} />
      <SkillEntry title="Frontend" tag={'frontend'} />
      <SkillEntry title="Backend" tag={'backend'} />
      <SkillEntry title="Frameworks" tag={'framework'} />
    </>
  );
};

export const SkillEntry = ({
  tag,
  skills,
  title,
}: {
  tag?: string;
  skills?: Skill[];
  title?: string;
}) => {
  const { t } = useTranslation();
  const filtered =
    skills || data.skills.filter((skill) => skill.tags.includes(tag));

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'start' }}>
        {(title || tag) && (
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {capitalCase(t(title || tag))}:
          </Typography>
        )}
        &nbsp;
        {filtered
          .sort((a, b) => experience(b) - experience(a))
          .map((skill, i, arr) => {
            return (
              <>
                <Typography
                  variant="body2"
                  sx={{ textDecoration: skill.stack ? 'underline' : 'none' }}
                >
                  {skill.name}
                  {i < arr.length - 1 ? ', ' : ''}
                </Typography>
                &nbsp;
              </>
            );
          })}
      </Box>
    </Box>
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
            return a.start.localeCompare(b.start);
          })
          .map((entry) => {
            return <EducationSummaryEntry {...entry} />;
          })}
      </div>
    </>
  );
};

export const EducationSummaryEntry = (props: EducationEntry) => {
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
        <Typography variant="body2">{formatDuration(start, end)}</Typography>
      </Box>
    </div>
  );
};

export const WorkSummary = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        {t('Experience')}
      </Typography>
      <div>
        {data.workHistory
          .sort((a, b) => {
            return b.start.localeCompare(a.start);
          })
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
        <Typography variant="body2">{formatDuration(start, end)}</Typography>
      </Box>
      <Markdown>{t(`descriptions.${id}.experience`)}</Markdown>
    </div>
  );
};
