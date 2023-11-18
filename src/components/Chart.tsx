import { Box } from '@mui/material';
import { getYear } from 'date-fns';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const ts = [1200, 1400, 1500];
const inc = 0.04 + 0.03;
const inflate = (ts: number, years: number) =>
  Math.ceil(ts * (1 + inc * years));
const vk = (ts: number) => (5 * 52 - 30) * ts * 0.85;
const b = 100000;
const year = getYear(new Date()) + 1;
const data = [
  { name: year + 1, salary: b, yield: vk(ts[0]), profit: vk(ts[0]) - 100000 },
  {
    name: year + 2,
    salary: inflate(b, 0),
    yield: vk(ts[0]),
    profit: vk(ts[0]) - 100000,
  },
  {
    name: year + 3,
    salary: inflate(b, 1),
    yield: vk(ts[1]),
    profit: vk(ts[1]) - 100000,
  },
  {
    name: year + 4,
    salary: inflate(b, 2),
    yield: vk(ts[1]),
    profit: vk(ts[1]) - 100000,
  },
  {
    name: year + 5,
    salary: inflate(b, 3),
    yield: vk(ts[2]),
    profit: vk(ts[2]) - 100000,
  },
];

export const Chart = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ResponsiveContainer width={'95%'} height={350}>
        <LineChart data={data}>
          <Legend verticalAlign="top" height={36} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="salary" stroke="green" />
          <Line type="monotone" dataKey="yield" stroke="gold" />
          <Line type="monotone" dataKey="profit" stroke="black" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
