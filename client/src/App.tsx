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
import Motors from "./scenes/Motors"
import MotorsExpanded from "./scenes/MotorsExpanded"

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
            <div className="contenedorCentrado">
              <div className='contenedorFlexFiltros'>
                  <div style={{ display:'flex', justifyContent: 'center', gap: '1rem' }} >
                    <input type="checkbox" name="gemelos" style={{ transform: 'scale(2)' }} checked={gemelosValue}  onChange={() => dispatch(toggleGemelos())} />
                    <span style={{ fontSize: '1.2rem' }}>Modelo ML</span>
                  </div>
                  <div style={{ display:'flex', justifyContent: 'center', gap: '1rem' }} >
                    <input type="checkbox" name="noGemelos" style={{ transform: 'scale(2)' }} checked={noGemelosValue} onChange={() => dispatch(toggleNoGemelos())} />
                    <span style={{ fontSize: '1.2rem' }}>Modelo Actual</span>
                  </div>
              </div>
            </div>
            
 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/motors" element={<Motors />} />
              <Route path="/motors/:id" element={<MotorsExpanded />} />
            </Routes>
            
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
