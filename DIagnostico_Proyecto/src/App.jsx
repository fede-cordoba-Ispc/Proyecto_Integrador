
import './App.css'
import Saludo from './Componentes/Saludo'
import Presentacion from './Componentes/Presentacion'
import Card from './Componentes/Card'
import Button from './Componentes/Button'
function App() {


  return (
    <>
      <Saludo nombre ="Fede"/>
      <Presentacion nombre ="Fede" edad="43" profesion="analista"/>
      <Button />
      <Card />


    </>
  )
}

export default App
