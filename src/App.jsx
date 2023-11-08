import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Start from './pages/Start'
import HomeOperator from './pages/HomeOperator'
import HomeObr from './pages/HomeObr'
import HomeAdmin from './pages/HomeAdmin'
import Instructions from './pages/Instructions'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home-operator' element={<HomeOperator />} />
        <Route path='/home-obr' element={<HomeObr />} />
        <Route path='/home-admin' element={<HomeAdmin />} />
        <Route path='/instructions' element={<Instructions />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
