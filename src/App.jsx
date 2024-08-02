import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx'

function App() {
  return (
    <>
    <Navbar />
    <ItemListConteiner greeting= {'bienvenidos a nuestra tienda...'} />
    <ItemDetailConteiner/>
    </>
  );
}
 
export default App
