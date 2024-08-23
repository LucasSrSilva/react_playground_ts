import { useState } from "react"

function Contador() {
  
  const [valor, setValor] = useState(0);

  function clique() {
    if(valor <10) {
      setValor(valor + 1)
    }
    else{
      setValor(0);
    }
  }

  

  return (
    <div>
      <h2>Componente Contador</h2>
        
      <p>O valor atual é: {valor}</p>
      <button onClick={clique} style={{cursor: "pointer"}}>Butaum add +1</button>
    </div>
  )
}

export default Contador