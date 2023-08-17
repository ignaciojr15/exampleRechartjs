import {Link, Routes, Route, BrowserRouter } from "react-router-dom"

import { Bar } from "recharts"
import { BarGraphic } from "./BarGraphic"
import {  HexaGraphic } from "./HexaGraphic"
import { CheeseGraphic } from "./CheeseGraphic"
import { LineGraphics } from "./LineGraphics"
import { HexaGraphicTrue } from "./HexaGraphicTrue"

export const Router = () => {
  return (
    <BrowserRouter>
     <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Gráfico de Barras
            </Link>
          </li>
          <li>
            <Link
              to="/ola"
              className="hover:text-gray-300 transition duration-300"
            >
              Gráfico de ola
            </Link>
          </li>
          <li>
            <Link
              to="/queso"
              className="hover:text-gray-300 transition duration-300"
            >
             grafico queso
            </Link>
          </li>
          <li>
            <Link
              to="/line"
              className="hover:text-gray-300 transition duration-300"
            >
             grafico linea
            </Link>
          </li>
          <li>
            <Link
              to="/hexagono"
              className="hover:text-gray-300 transition duration-300"
            >
             grafico hexagonal
            </Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route  path="/" element={<BarGraphic />} />
      <Route path="/ola" element={<HexaGraphic/>} />
      <Route path="/queso" element={<CheeseGraphic/>} />
      <Route path="/line" element={<LineGraphics/>} />
      <Route path="/hexagono" element={<HexaGraphicTrue/>} />
      <Route path="*" element={<h2>pagina no encotrada</h2>} />
    
    </Routes>
  </BrowserRouter>
  
  )
}
