import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/contact.jsx';
import Error from './components/Error/Error.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import Layout from './pages/Layout.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<ItemListConteiner greeting={'bienvenidos a nuestra tienda...'}/>}/>
        <Route path='/category/Inicio' element={<Inicio/>}/>
        <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
        <Route path='product/:id' element= {<ItemDetailConteiner/>}/>
        <Route path='/category/Contacto' element= {<Contact/>}/>
        <Route path='/category/Nosotros' element={<AboutUs/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
    
    </>
  );
}
 
export default App
