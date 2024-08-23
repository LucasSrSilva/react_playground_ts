import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect( () => {
    if (completed) {
      setTarefa("Concluiu a Careca!!!!!!!!!!!!!");
    }
    else{
      setTarefa("")
    }
  }, [completed])
  
  return (
    <div>
      <h2>Componente careca</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a careca</p>
      <button onClick={() => setCompleted(!completed)}>Concluir careca</button>
    </div>
  )
}

export default Tarefa