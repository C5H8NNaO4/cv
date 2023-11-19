import { Paper, useMediaQuery } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Page = ({
  children,
  last = false,
  exporting,
}: PropsWithChildren<{ exporting: boolean; last?: boolean }>) => {
  const printing = useMediaQuery('print');
  const autoHeight = printing || exporting;
  return (
    <Paper
      sx={{
        minHeight: autoHeight && !last ? 420 * 3.75 * 1.01 + 'px' : undefined,
        maxHeight: autoHeight ? 420 * 3.75 * 1.01 + 'px' : undefined,

        // overflow: 'hidden',
        m: 0,
        p: 1,
        // pt: '8px',
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};
