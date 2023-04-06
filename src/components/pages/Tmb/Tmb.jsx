import "./Tmb.css"
import Input from "../../input/Input"


const Tmb = () => {
  return (
    <section className="tmb">
        <form>
          <fieldset>
            <h2>TMB</h2>
            <Input nome={"Peso"} placeholder={"Ex:80(kg)"} />
            <Input nome={"Altura"} placeholder={"Ex:170(cm)"} />
            <Input nome={"Idade"} placeholder={"Ex:20"} />

            <button>Calcular</button>
          </fieldset>
        </form>
        
    </section>
  )
}

export default Tmb