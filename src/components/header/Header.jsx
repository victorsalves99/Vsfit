import "./Header.css"
import { Link } from "react-router-dom"

function Header(){

    return (
    <header className="header">
        <h1>
            Vs<span id="span" >F</span>it
        </h1>
        <nav>
            <li><Link className="ancora"  to="/">Home</Link></li>
            <li><Link className="ancora"  to="/imc">IMC</Link></li>
            <li><Link className="ancora"  to="/tmb">TMB</Link></li>
            <li><Link className="ancora"  to="/qda">Quantia de Agua por dia</Link></li>
        </nav>
    </header>
    )
  
};

export default Header;
