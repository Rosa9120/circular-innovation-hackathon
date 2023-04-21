import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo, useState, useEffect } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes, RouteProps } from "react-router-dom"
import Navbar from "./scenes/Navbar"
import Dashboard from "./scenes/Dashboard"
import Performance from "./scenes/Performance"
import { useDispatch, useSelector } from "react-redux"
import { toggleGemelos } from "./slices/gemelosSlice"
import { toggleNoGemelos } from "./slices/noGemelosSlice"
import { RootState } from "./main"

function App() {
  const dispatch = useDispatch();
  const gemelosValue = useSelector((state: RootState) => state.gemelos);
  const noGemelosValue = useSelector((state: RootState) => state.noGemelos);
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 6rem 2rem">
            <Navbar />
       
            <Box width="100%" margin="2rem 1rem 0rem 1rem">
              <input type="checkbox" name="gemelos" checked={gemelosValue} onChange={() => dispatch(toggleGemelos())} />
              <span>Modelo ML</span>
              <input type="checkbox" name="noGemelos" checked={noGemelosValue} onChange={() => dispatch(toggleNoGemelos())} />
              <span>Modelo Actual</span>
            </Box>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/performance" element={<Performance />} />
            </Routes>
            
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
