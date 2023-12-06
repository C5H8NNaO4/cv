import {
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '@/lib/number';
export type Benefit = {
  Icon: any;
  primary: string;
  secondary: string;
};
export const ExpectedBenefitsCard = ({
  salary,
  benefits,
}: {
  salary: number;
  benefits: Benefit[];
}) => {
  const { t } = useTranslation();
  return (
    <Card square>
      <CardHeader title={t('Expected Benefits')} sx={{pb:0}}/>
      <List sx={{ w: '50%' }} disablePadding>
        <ListItem dense>
          <ListItemIcon>
            <EuroSymbolIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${formatCurrency(salary)}`}
            secondary="Salary"
          />
        </ListItem>
        {benefits.map(({ Icon, primary, secondary }) => (
          <ListItem key={primary} dense>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
