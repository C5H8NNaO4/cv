import { Card, CardContent, CardHeader, Chip } from '@mui/material';

export const ChipCard = ({ title, tags }) => {
  return (
    <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {tags.map((label: string) => {
        return <Chip label={label} />;
      })}
    </CardContent>
  );
};
