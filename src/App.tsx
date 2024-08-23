import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        <Home titulo='Sopa de Cebola' texto='É gostoso?'/>
        {/* <Home titulo='Sopa de Tomate' texto='É gostoso?'/> */}
        <Contador/>
        <Tarefa/>
    </>
  )
}

export default App
