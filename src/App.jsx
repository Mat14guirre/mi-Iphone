import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  return (
    <>
    <Navbar />
    <ItemListConteiner greeting= {'bienvenidos a nuestra tienda...'} />
    <Card/>
    </>
  );
}
 
export default App
