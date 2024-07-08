import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx';

function App() {
  return (
    <>
    <Navbar />
    <ItemListConteiner greeting= {'bienvenidos a nuestra tienda...'} />
    </>
  );
}

export default App
