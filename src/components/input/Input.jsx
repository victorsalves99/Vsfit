import "./Input.css"
import { useState } from "react"

const Input = ({nome,placeholder}) => {
    const [valor,setValor] = useState("")
  return (
    <div className="input">
        <label htmlFor={nome}>{nome}:</label>
        <input type="text"  id={nome} value={valor} placeholder={placeholder} onChange={(ev) => setValor(ev.target.value)}/>
    </div>
  )
}

export default Input