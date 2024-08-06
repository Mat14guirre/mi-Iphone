/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import CartWidget from "../CartWidget/CartWidget.jsx"
import NavbarLink from "./NavbarLink/NavbarLink.jsx";
import { categories } from "../../mock/mockData.js";

const Navbar = () => {
    return (
        <>
        <h3 className="logo">MIPhone <img width="50" height="50" src="https://img.icons8.com/bubbles/50/iphone-x.png" alt="iphone-x"/></h3>
        <nav className= 'navItems'> 
                {categories.map((element,index)=>{
                    return <NavbarLink key ={index} category={element}/>
                })}
        </nav>
        <CartWidget/>
        </>
    );
};

export default Navbar;