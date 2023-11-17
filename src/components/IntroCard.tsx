import data, { experienceBySkill } from '@/data';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Link,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import i18n from 'i18next';
import { Markdown } from '@/components/Markdown';
import { age, durStr, map } from '@/lib/util';
import { BIRTHDAY, TRAINING_START } from '@/const';
import { useTranslation } from 'react-i18next';

export const Description = () => {
  const { t } = useTranslation();
  return (
    <Markdown>
      {t('description', {
        age: Math.floor(age(BIRTHDAY)),
        experience: experienceBySkill,
        consts: map({ BIRTHDAY, TRAINING_START }, (date: string) =>
          durStr(age(date))
        ),
        tags: {
          frameworks: data.skills
            .filter((skill) => {
              return (skill.tags || []).includes('framework');
            })
            .sort((a, b) => (b.experience || 0) - (a.experience || 0))
            .slice(0, 5)
            .map((skill) => skill.name)
            .join(', '),
        },
      })}
    </Markdown>
  );
};

export const BioCardContent = () => {
  return (
    <Card square>
      <CardContent>
        <Description />
      </CardContent>
    </Card>
  );
};
export const BioCardHeader = ({
  exporting,
  setExporting,
  toPDF,
}: {
  exporting: boolean;
  toPDF: any;
  setExporting: (value: boolean) => void;
}) => {
  return (
    <Card square sx={{ width: '100%', display: 'flex' }}>
      <CardHeader
        sx={{ mx: 'auto' }}
        avatar={
          <Avatar
            imgProps={{
              width: '40px',
              height: '40px',
              sx: { objectFit: 'cover' },
            }}
            src="/pp.jpg"
          />
        }
        title={data.name}
        subheader={data.position || data.workHistory?.at(-1)?.position}
      />
      <CardHeader
        action={
          !exporting && (
            <>
              <IconButton
                color="primary"
                sx={{
                  ml: 'auto',
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
                onClick={() => {
                  setExporting(true);
                  setTimeout(() => {
                    toPDF();
                    setExporting(false);
                  }, 0);
                }}
              >
                <DownloadIcon></DownloadIcon>
              </IconButton>
              <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Link href={`${i18n.language}.pdf`} download>
                  <DownloadIcon></DownloadIcon>
                </Link>
              </IconButton>
            </>
          )
        }
      ></CardHeader>
    </Card>
  );
};
