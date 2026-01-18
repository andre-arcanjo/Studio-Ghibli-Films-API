import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RenderFilms } from "./components/RenderFilms/RenderFilms"
import { FilmDetail } from "./components/FilmsDetails/FilmDetail"

function App() {

  return (
    <>
      <BrowserRouter basename="/Studio-Ghibli-Films-API">
        <Routes>
          <Route path="/" element={<RenderFilms />} />
          <Route path="/films/:id" element={<FilmDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
