import { Suspense, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes'
import Loading from './components/Loading'

function App() {

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
