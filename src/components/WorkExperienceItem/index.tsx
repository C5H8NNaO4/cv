import { RecentSkill } from '@/App';
import {
  Box,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { format, getYear } from 'date-fns';
import StarIcon from '@mui/icons-material/Star';
import RoomIcon from '@mui/icons-material/Room';

export interface WorkExperienceItemProps {
  company?: string;
  position: string;
  start: string;
  end?: string;
  homepage?: string;
  location?: string;
  stack?: string[];
  disabled?: boolean;
}
export const WorkExperienceItem = (props: WorkExperienceItemProps) => {
  const { company, position, start, end, homepage, location, stack, disabled } =
    props;
  return (
    <ListItem disabled={disabled}>
      {!end && getYear(new Date(start)) < getYear(new Date()) && (
        <ListItemIcon>
          <StarIcon sx={{ fill: 'gold' }} />
        </ListItemIcon>
      )}
      <ListItemText
        primary={`${format(new Date(start), 'MMM yyyy')} - ${
          end === '?' ? end : end ? format(new Date(end), 'MMM yyyy') : ' now.'
        }`}
        secondary={
          <span>
            <span>
              {position}
              {company && ' at '}
              {homepage && (
                <Link href={homepage ? homepage : undefined}>{company}</Link>
              )}
              {!homepage && <span>{company}</span>}
            </span>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RoomIcon sx={{ height: '1rem', width: '1rem' }} />
              <Typography variant="caption">{location}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {stack?.map((label) => (
                <RecentSkill key={label} label={label} />
              ))}
            </Box>
          </span>
        }
      />
    </ListItem>
  );
};
