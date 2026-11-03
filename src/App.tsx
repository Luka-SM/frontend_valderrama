import { Route, Routes } from 'react-router-dom'
import './App.css'
import FretCalcPage from './pages/FretCalc'
import HomeCollection from './pages/HomeCollection'

export default function App() {
  return(
    <main className='flex flex-col overflow-y-auto scrollbar-hidden'>
      <Routes>
        <Route path='/' element={<HomeCollection/>}/>
        <Route path='/fret-calc' element={<FretCalcPage/>}/>
      </Routes>
    </main>
  )
}