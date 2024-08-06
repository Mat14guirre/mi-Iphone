// eslint-disable-next-line no-unused-vars
import { NavLink } from "react-router-dom"
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const NavbarLink = ({category}) =>{
    return (
        <>
        <NavLink to={`/category/${category}`} className="NavItem">
            {category}
        </NavLink>
        </>
    )
}
export default NavbarLink