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
        display: 'flex',
        flexDirection: 'column',
        mx: 'auto',
        minHeight: autoHeight && !last ? 297 * 3.75 - 2 * 8 + 'px' : undefined,
        maxHeight: autoHeight ? 297 * 3.75 - 2 * 8 + 'px' : undefined,
        width: 1 ? 210 * 3.75 - 6 * 8 + 'px' : undefined,
        border: '1px solid white',
        my: 0,
        py: 2,
        px: 4,
        ...sx,
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};
