import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/contact.jsx';
import Error from './components/Error/Error.jsx';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import Layout from './pages/Layout.jsx';
import Inicio from './components/Inicio/Inicio.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx';
import CartContextProvider from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<ItemListConteiner greeting={"Bienvenidos a nuestra tienda"} />}/>
        <Route path='/category/Inicio' element={<Inicio/>}/>
        <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
        <Route path='product/:id' element= {<ItemDetailConteiner/>}/>
        <Route path='/Contacto' element= {<Contact/>}/>
        <Route path='/Nosotros' element={<AboutUs/>}/>
        <Route path='/Carrito' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
    
    </CartContextProvider>
  );
}
 
export default App
