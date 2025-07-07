import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokeDex from './components/PokeDex/PokeDex'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {

  return (
      <Routes>
        <Route path='/' element={<PokeDex />} />
        <Route path='/pokemon/:name' element={<PokemonDetails />} />
      </Routes>
  )
}

export default App
