//Componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Form from "../src/components/Form";

//CSS
import './App.css'

function App() {
  
  return (
    <div className='app'>
      <NavBar/>
      <Form/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
