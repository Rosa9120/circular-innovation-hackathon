import { Box, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import FlexBetween from "../../components/FlexBetween"
import sampol from '../../assets/sampol.png';

const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState<"dashboard" | "performance" | "motors">("dashboard")

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
      <Link to="/performance" onClick={() => { setSelected("performance") }} style={{ fontSize: '1.2rem', color: selected === "performance" ? palette.grey[800] : "inherit", textDecoration: "inherit" }}>
        <FlexBetween gap="0.75rem">
          <img src={sampol} alt="Logo de sampol" style={{width: '2.5rem', height: '2.5rem'}} />
          <Typography variant="h4" fontSize="2rem">
            Sampol
          </Typography>
          </FlexBetween>
        </Link>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/" onClick={() => { setSelected("dashboard") }} style={{ fontSize: '1.2rem', color: selected === "dashboard" ? palette.grey[800] : "inherit", textDecoration: "inherit" }}>
            Dashboard
          </Link>
        </Box>
        <Box>
        <Link to="/performance" onClick={() => { setSelected("performance") }} style={{ fontSize: '1.2rem', color: selected === "performance" ? palette.grey[800] : "inherit", textDecoration: "inherit" }}>
            Performance
        </Link>
        </Box>
        <Box>
        <Link to="/motors" onClick={() => { setSelected("motors") }} style={{ color: selected === "motors" ? "inherit" : palette.grey[700], textDecoration: "inherit" }}>
            Motors
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar