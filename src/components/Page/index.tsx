import { Paper } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Page = ({
  children,
  last = false,
  exporting,
}: PropsWithChildren<{ exporting: boolean; last?: boolean }>) => {
  return (
    <Paper
      sx={{
        minHeight: exporting && !last ? 1169.5 * 1.43 + 'px' : undefined,
        maxHeight: exporting ? 1169.5 * 1.43 + 'px' : undefined,

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
