import { Paper, useMediaQuery, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Page = ({
  sx = {},
  children,
  last = false,
}: PropsWithChildren<{ last?: boolean; sx?: BoxProps['sx'] }>) => {
  const printing = useMediaQuery('print');
  const autoHeight = printing;
  return (
    <Paper
      sx={{
        minHeight: autoHeight && !last ? 420 * 3.75 * 1.01 + 'px' : undefined,
        maxHeight: autoHeight ? 420 * 3.75 * 1.01 + 'px' : undefined,

        // overflow: 'hidden',
        m: 0,
        p: 1,
        ...sx,
        // pt: '8px',
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};
