import './App.css'
import { Users } from "./components/Users";
//siempre que el import sea 'nombrado' van con llaves 
import Employes from "./components/Employes";
//si el import es no nombrado o por defoult va sin llaves 

function App() {
//el compponete es una funcion que devuelve contenido randerizable = oseda que lo voy a ver 
//el componente siemore arranca con mayuscula 

//npm install -para instalar dependencias 
//npm run dev -para correr el programa

  return (
    <>
    <Users name="bribri"/>
    ñiñiñiñi
    <Employes/>
    </>
  )
}

export default App;
