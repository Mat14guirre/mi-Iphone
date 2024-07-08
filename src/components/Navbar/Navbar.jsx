import CartWidget from "../CartWidget/CartWidget.jsx"

const Navbar = () => {
    return (
        <>
        <h3 className="logo">MIPhone <img width="50" height="50" src="https://img.icons8.com/bubbles/50/iphone-x.png" alt="iphone-x"/></h3>
        <nav className= 'navItems'> 
                <button className= 'navItem'>Celulares</button>
                <button className= 'navItem'>Notebooks</button>
                <button className= 'navItem'>Accesorios</button>
                <button className= 'navItem'>Contacto</button>
                <button className= 'navItem'>Nosotros</button>
        </nav>
        <CartWidget/>
        </>
    );
};

export default Navbar;