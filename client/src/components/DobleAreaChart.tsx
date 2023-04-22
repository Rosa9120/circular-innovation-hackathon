import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
// import DashboardBox from './components/DashboardBox'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
interface Props {
    gridArea: string
}

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


const DobleAreaChart = (props: Props) => {
  const { palette } = useTheme()

  return (
    <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.secondary[300]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.secondary[300]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }} axisLine={{ strokeWidth: "0" }} />
            <YAxis tickLine={false} style={{ fontSize: "10px" }} axisLine={{ strokeWidth: "0" }} domain={[0, 10000]} />
            <Tooltip />
            <Area type="monotone" dataKey="uv" dot={true} stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="pv" dot={true} stroke={palette.secondary.main} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
  )
}

export default DobleAreaChart