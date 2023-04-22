import { Box, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import FlexBetween from "../../components/FlexBetween"
import PixIcon from "@mui/icons-material/Pix"

const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState<"dashboard" | "performance" | "motors">("dashboard")

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Sampol
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to="/" onClick={() => { setSelected("dashboard") }} style={{ color: selected === "dashboard" ? "inherit" : palette.grey[700], textDecoration: "inherit" }}>
            Dashboard
          </Link>
        </Box>
        <Box>
        <Link to="/performance" onClick={() => { setSelected("performance") }} style={{ color: selected === "performance" ? "inherit" : palette.grey[700], textDecoration: "inherit" }}>
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