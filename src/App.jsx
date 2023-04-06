import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

// reaproveitamento de estrutura 
import { Outlet } from "react-router-dom";



function App() {
 
  return (
     <div className="App">
        <Header/>
        <hr />
        <Outlet/>
        <Footer/>
     </div>
      
  );
}

export default App;
