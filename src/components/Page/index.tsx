import { Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Page = ({
  children,
  exporting,
}: PropsWithChildren<{ exporting: boolean }>) => {
  return (
    <Paper
      sx={{
        minHeight: exporting ? '1720px' : undefined,
        maxHeight: exporting ? '1720px' : undefined,

        overflow: 'hidden',
        m: 0,
        p: 1,
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};
