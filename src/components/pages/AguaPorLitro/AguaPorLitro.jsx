import "./AguaPorLitro.css"
import Input from "../../input/Input"


const AguaPorLitro = () => {
  return (
    <section className="AguaPorLitro">
        <form>
          <fieldset>
            <h2>Água por Dia </h2>
            <Input nome={"Peso"} placeholder={"Ex:80(kg)"} />
            <button>Calcular</button>
          </fieldset>
        </form>
        
    </section>
  )
}

export default AguaPorLitro