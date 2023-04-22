import React from 'react'
import { PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';

interface Props {
    gridArea: string
}
  
  const data02 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 567 },
    { name: 'Group C', value: 398 },
    { name: 'Group D', value: 800 },
    { name: 'Group E', value: 908 },
    { name: 'Group F', value: 800 },
  ];


const TwoSimplePieChart2 = (props: Props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data02}
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
  )
}

export default TwoSimplePieChart2