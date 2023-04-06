import "./Imc.css"
import Input from "../../input/Input"


const Imc = () => {
  return (
    <section className="imc">
        <form>
          <fieldset>
            <h2>IMC</h2>
            <Input nome={"Peso"} placeholder={"Ex:80(kg)"} />
            <Input nome={"Altura"} placeholder={"Ex:170(cm)"} />
            <button>Calcular</button>
          </fieldset>
            
           
        </form>
        
    </section>
  )
}

export default Imc