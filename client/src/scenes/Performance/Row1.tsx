import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, CartesianGrid, Legend, Line, ReferenceArea } from 'recharts'
import DashboardBox2 from '../../components/DashBoardBox2'
import { useGetKpisQuery } from '../../state/api'
import { useMemo, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../main'
import { Box } from '@mui/material'

type Props = {}

const Row1 = (props: Props) => {
  //const { data } = useGetKpisQuery()
  const gemelosValue = useSelector((state: RootState) => state.gemelos);
  const noGemelosValue = useSelector((state: RootState) => state.noGemelos);
  const { palette } = useTheme()
  /**const revenueExpenses = useMemo(() => {
    return (
      data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: parseFloat(revenue.substring(1).replace(',', '')),
          expenses: parseFloat(expenses.substring(1).replace(',', '')),
        }
      })
    )
  }, [data])**/

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

  const [yDomainTop, SetYDomainTop] = useState(10000);
  const [yDomainBottom, SetYDomainBottom] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [visibleData, setVisibleData] = useState(data);
  const [xDomainLeft, SetXDomainLeft] = useState("");
  const [xDomainRight, SetXDomainRight] = useState("");

  const getAxisYDomain = (from : string, to : string) =>{
    let reverseOrder = false;
    const dataKeys = data.map((e) => e.name);
    let fromIndex = dataKeys.indexOf(from);
    let toIndex = dataKeys.indexOf(to);

    if (fromIndex > toIndex){
      const fromIndexCopy = fromIndex;
      fromIndex = toIndex;
      toIndex = fromIndexCopy;
      reverseOrder = true;
    }
    const newData = data.slice(fromIndex, toIndex + 1)
    setVisibleData(newData);

    return {
      reverseOrder: reverseOrder 
    }
  }

  const zoomIn = () => {
    if(xDomainLeft === xDomainRight || xDomainRight === ""){
      SetXDomainLeft("");
      SetXDomainRight("");
      return ;
    }
    let xDomainLeftCopy = xDomainLeft;
    let xDomainRightCopy = xDomainRight;
    const {reverseOrder} = getAxisYDomain(xDomainLeftCopy, xDomainRightCopy);

    if (reverseOrder){
      const aux = xDomainLeftCopy;
      xDomainLeftCopy = xDomainRightCopy;
      xDomainRightCopy = aux;
    }

    setIsZoomed(true);
    SetXDomainLeft("");
    SetXDomainRight("");
  }

  const zoomOut = () => {
    setIsZoomed(false);
    setVisibleData(data);
    SetXDomainLeft("");
    SetXDomainRight("");
  }

  return (
    <>
    <div className='contenedorFlex'>
    <DashboardBox2 gridArea="a b c">
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart
            width={500}
            height={300}
            onMouseUp={zoomIn}
            data={visibleData}
            margin={{
              top: 24,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            onMouseDown={(nextState) => {
              SetXDomainLeft(nextState?.activeLabel || "")
              //console.log(xDomainLeft)
            }}
            onMouseMove={(nextState) => {
              xDomainLeft && SetXDomainRight(nextState?.activeLabel || "")
              console.log(xDomainLeft + " " + xDomainRight)
            }}
          >
            <text x="50%" y="15" textAnchor="middle" fontWeight="bold" fontSize={16}>
              Rendimiento medio del Sistema
            </text>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10000]} />
            <Tooltip />
            <Legend />
            {
              gemelosValue ? <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                           : <Line type="monotone" dataKey="" stroke="" />
            }
            {
              noGemelosValue ? <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                             : <Line type="monotone" dataKey="" stroke="" />
            }
            {
              xDomainLeft && xDomainRight ? (
                <ReferenceArea 
                  opacity={0.2}
                  x1={xDomainLeft}
                  x2={xDomainRight}
                  fill='#006dd9'
                />
              ) : null
            }
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox2>
    </div>
    <Box marginRight="5rem">
      {isZoomed ? (
        <button className='resetButton' type="button" onClick={zoomOut}>Reset</button>
      ): null}
    </Box>

    </>
  )
}

export default Row1