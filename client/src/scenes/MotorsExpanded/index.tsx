import { Box, useMediaQuery } from "@mui/material"
import AreaCharts  from "../../components/AreaChart"
import DobleAreaChart from "../../components/DobleAreaChart"
import DashedLineChart from "../../components/DashedLineChart"
import TwoSimplePieChart from "../../components/TwoSimplePieChart"
import TwoSimplePieChart2 from "../../components/TwoSimplePieChart2"

const gridTemplateLargeScreens = `
  "a b c"
  "d e f"
`

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "e"
  "f"
  "f"
  "f"
  `

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

  return (
    <Box width="100%" height="100%" display="grid" gap="0rem" sx={ isAboveMediumScreens ? {
      gridTemplateColumns: "repeat(0, minmax(0px, 1fr))",
      gridTemplateRows: "repeat(0, minmax(0px, 1fr))",
      gridTemplateAreas: gridTemplateLargeScreens,
    } : {
      gridAutoColumns: "1fr",
      gridAutoRows: "80px",
      gridTemplateAreas: gridTemplateSmallScreens,
    }}>

      <AreaCharts gridArea="a" />
      <DobleAreaChart gridArea="b"/>
      <DashedLineChart gridArea="c"/>
      <TwoSimplePieChart gridArea="d"/>
      <TwoSimplePieChart2 gridArea="e"/>
      <AreaCharts gridArea="f"/>
    </Box>
  )
}

export default Dashboard