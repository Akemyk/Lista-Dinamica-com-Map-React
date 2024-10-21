import { useState } from 'react'
import Lista from './Components/Lista';
import './App.css'

function App() {
  const listaDeNomes = ['Julia','Bianca','Camila'];

  
  return (
    <>
     <h1>Lista de Nomes</h1>
     <Lista nomes={listaDeNomes} />
    </>
  )
}

export default App
