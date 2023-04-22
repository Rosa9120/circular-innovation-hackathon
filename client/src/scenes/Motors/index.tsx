import { Box, useMediaQuery } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import Row4 from "./Row4"

const gridTemplateLargeScreens = `
  "a b"
  "c d"
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
`

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
  
  return (
    <Box width="100%" height="100%" display="grid" marginTop="1rem" gap="1.5rem" sx={ isAboveMediumScreens ? {
      gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
      gridTemplateRows: "repeat(2, minmax(60px, 1fr))",
      gridTemplateAreas: gridTemplateLargeScreens,
    } : {
      gridAutoColumns: "1fr",
      gridAutoRows: "80px",
      gridTemplateAreas: gridTemplateSmallScreens,
    }}>
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </Box>
  )
}

export default Dashboard